// src/app/(admin)/layout.jsx
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      // Don't check auth for login page
      if (pathname === '/admin/login') return;

      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const authTimestamp = localStorage.getItem('authTimestamp');
      
      // Check if authentication exists and is not expired (24 hours)
      const isValid = isAuthenticated === 'true' && 
        authTimestamp && 
        (Date.now() - parseInt(authTimestamp)) < 24 * 60 * 60 * 1000;

      if (!isValid) {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('authTimestamp');
        router.push('/admin/login');
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 5 * 60 * 1000); // Check every 5 minutes

    return () => clearInterval(interval);
  }, [pathname, router]);

  return (
    <div className="min-h-screen bg-[#eef9ff]">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
