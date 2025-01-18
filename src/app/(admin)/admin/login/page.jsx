// src/app/(admin)/admin/login/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const MAX_ATTEMPTS = 2;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // console.log('Environment:', process.env.NODE_ENV);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('authTimestamp', Date.now().toString());
      
      toast({
        title: "Success!",
        description: "Login successful",
        variant: "success",
      });
      
      router.push('/admin/upload-blog');
    } else {
      const remainingAttempts = MAX_ATTEMPTS - (attempts + 1);
      setAttempts(prev => prev + 1);
      
      if (remainingAttempts === 0) {
        toast({
          title: "Access Denied",
          description: "Maximum login attempts exceeded. Please try again later.",
          variant: "destructive",
        });
        setTimeout(() => setAttempts(0), 30000);
      } else {
        toast({
          title: "Error",
          description: `Invalid credentials. ${remainingAttempts} attempt${remainingAttempts === 1 ? '' : 's'} remaining.`,
          variant: "destructive",
        });
      }
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary">
      <Card className="w-full max-w-md bg-neutral-99 rounded-[64px] shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-h5 lg:text-h4 font-[600] text-neutral-800 mb-8 text-center">Admin Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg"
                required
                disabled={attempts >= MAX_ATTEMPTS}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg"
                required
                disabled={attempts >= MAX_ATTEMPTS}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary-dark hover:bg-primary !text-neutral-99 text-bodysmal font-[500] py-6"
              disabled={isLoading || attempts >= MAX_ATTEMPTS}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
            
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-6 p-4 bg-neutral-700 bg-opacity-[.2] rounded-lg">
                <div className="text-bodyextr text-neutral-600">
                  <div>Expected Email: {process.env.NEXT_PUBLIC_ADMIN_EMAIL}</div>
                  <div>Current Email: {email}</div>
                  <div>Environment: {process.env.NODE_ENV}</div>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}