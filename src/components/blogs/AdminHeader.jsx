// src/components/AdminHeader.jsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { H3 } from '../ui/typography';

export default function AdminHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authTimestamp');
    router.push('/admin/login');
  };

  const navigation = [
    { name: 'Upload Blog', path: '/admin/upload-blog' },
    { name: 'Manage Blogs', path: '/admin/manage-blogs' },
  ];

  return (
    <header className="py-4 mb-6 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <H3 className="font-[500] text-neutral-800">Admin Dashboard</H3>
          
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-2">
              {navigation.map((item) => (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => router.push(item.path)}
                  className={`${
                    pathname === item.path 
                      ? 'bg-primary-dark !text-neutral-99' 
                      : 'text-neutral-800 hover:bg-primary hover:!text-neutral-99'
                  } text-bodysmal`}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
            
            <Button 
              onClick={handleLogout}
              variant="ghost" 
              className="bg-primary-dark hover:bg-primary !text-neutral-99 text-bodysmal"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}