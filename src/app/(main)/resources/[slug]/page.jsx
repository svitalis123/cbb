// app/(main)/blogs/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import RenderIndividualBlog from '@/components/blogs/RenderIndividualBlog';
import clientPromise from '@/lib/mongodb';

export async function generateMetadata({ params }) {
  const blog = await getBlogPost(params.slug);
    
    if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt,
    keywords: blog.tags,
    author: 'HR Box Africa',  
    openGraph: {
      title: blog.seoTitle || blog.title,      
      description: blog.seoDescription || blog.excerpt,
      type: 'article',
      url: `https://hrbox.africa/blog/${blog.title_id}`,
      images: [
        {
          url: 'https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg',
          width: 400,
          height: 400,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      images: ['https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg'],
    },
  };
}

async function getBlogPost(slug) {
  const client = await clientPromise;
  const db = client.db("blogDatabase");
  const collection = db.collection("posts");
  return await collection.findOne({ title_id: slug });
}

export default async function BlogPost({ params }) {
  const blog = await getBlogPost(params.slug);


  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#201d1b] w-full text-[#fff] font-sans">
      <RenderIndividualBlog blogData={blog} />
    </div>
  );
}
export const revalidate = 0;