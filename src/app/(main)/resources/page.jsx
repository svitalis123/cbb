// app/(main)/blogs/page.tsx
import { Metadata } from 'next';
import clientPromise from '@/lib/mongodb';
import Resources from '@/components/resourcespage/Resources';

export const metadata = {
  title: 'Knowledge Center',
  description: 'Explore our blogs, case studies, and whitepapers',
};

async function getPosts() {
  const client = await clientPromise;
  const db = client.db("blogDatabase");
  const collection = db.collection("posts");
  
  return await collection.find({})
    .sort({ createdAt: -1 })
    .toArray();
}

export default async function KnowledgeCenterPage() {
  const posts = await getPosts();
  
  return (
    <main className="bg-[#eef9ff] w-full py-4 lg:py-12 overflow-hidden">
      <Resources posts={posts} />
    </main>
  );
}