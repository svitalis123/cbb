// src/components/AdminHeader.jsx
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { H3 } from '../ui/typography';

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authTimestamp');
    router.push('/admin/login');
  };

  return (
    <header className="py-4 mb-6 border-b border-gray-700">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <H3 className=" font-[500] text-neutral-800">Admin Dashboard</H3>
        <Button 
          onClick={handleLogout}
          variant="ghost" 
          className="bg-primary-dark hover:bg-primary !text-neutral-99 text-bodysmal "
        >
          Logout
        </Button>
      </div>
    </header>
  );
}