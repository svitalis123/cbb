// app/(admin)/admin/upload-blog/page.jsx
import AdminHeader from '@/components/blogs/AdminHeader';
import EnhancedBlogUpload from '@/components/blogs/EnhancedBlogUpload';

export default function UploadBlogPage() {
  return (
    <>
      <AdminHeader />
      <div className="container mx-auto px-4">
        <EnhancedBlogUpload />
      </div>
    </>
  );
}