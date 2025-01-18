// app/(admin)/admin/edit-blog/[slug]/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminHeader from '@/components/blogs/AdminHeader';
import EnhancedBlogUpload from '@/components/blogs/EnhancedBlogUpload';
import { useToast } from '@/hooks/use-toast';

export default function EditBlogPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.slug}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          toast({
            title: "Error",
            description: "Failed to fetch blog post",
            variant: "destructive",
          });
          router.push('/admin/manage-blogs');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive",
        });
        router.push('/admin/manage-blogs');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug, router, toast]);

  if (isLoading) {
    return (
      <>
        <AdminHeader />
        <div className="container mx-auto px-4">
          <div>Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader />
      <div className="container mx-auto px-4">
        <EnhancedBlogUpload initialData={blog} isEditing={true} />
      </div>
    </>
  );
}