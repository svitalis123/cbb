// app/api/blogs/[slug]/route.js
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request, { params }) {
  const { slug } = params;
  
  try {
    const client = await clientPromise;
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    
    const blog = await collection.findOne({ title_id: slug });
    
    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// PUT (update) blog
export async function PUT(request, { params }) {
  const { slug } = params;
  
  try {
    const blogData = await request.json();
    
    // Remove _id from the update data if it exists
    delete blogData._id;
    
    const client = await clientPromise;
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    
    const result = await collection.findOneAndUpdate(
      { title_id: slug },
      { 
        $set: {
          ...blogData,
          updatedAt: new Date(),
          publishDate: new Date(blogData.publishDate)
        }
      },
      { returnDocument: 'after' }
    );
    
    if (!result) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      data: result
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(request, { params }) {
  const { slug } = params;
  
  try {
    const client = await clientPromise;
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    
    const result = await collection.deleteOne({ title_id: slug });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}