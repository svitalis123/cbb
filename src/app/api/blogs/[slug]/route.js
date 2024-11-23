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