import Link from "next/link";

// app/(main)/blogs/[slug]/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#201d1b] flex items-center justify-center">
      <div className="text-center text-[#ecc7bc]">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/blogs" className="text-blue-400 hover:text-blue-300">
          Return to Blog List
        </Link>
      </div>
    </div>
  );
}