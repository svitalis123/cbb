import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { createBlogPost, BlogPostSchema } from '@/models/BlogPost';
import { sanitizeRichTextContent } from '@/utils/htmlSanitizer';

export async function POST(request) {
  try {
    const blogData = await request.json();
    
    // Validate blogData against BlogPostSchema
    Object.keys(BlogPostSchema).forEach(key => {
      if (BlogPostSchema[key].required && !blogData[key]) {
        throw new Error(`${key} is required`);
      }
    });

    // Sanitize content
    if (blogData.content) {
      blogData.content = sanitizeRichTextContent(blogData.content);
    }

    const client = await clientPromise;
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    
    // Create blog post with proper date handling
    const blogPost = createBlogPost({
      ...blogData,
      publishDate: new Date(blogData.publishDate), // Convert string to Date object
    });

    const result = await collection.insertOne(blogPost);
    
    return NextResponse.json({ 
      success: true, 
      id: result.insertedId,
      title_id: blogPost.title_id 
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to create blog post'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    
    const blogPosts = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}