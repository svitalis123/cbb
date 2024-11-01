'use client'
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { H1 } from '../ui/typography';

const HeroSkeleton = () => (
  <div className="flex flex-col items-center text-center space-y-8 animate-pulse">
    {/* Skeleton Text Content */}
    <div className="max-w-3xl space-y-6">
      <div className="h-14 md:h-20 bg-neutral-200 dark:bg-neutral-600 rounded-lg w-3/4 mx-auto" />
      <div className="h-8 md:h-12 bg-neutral-200 dark:bg-neutral-600 rounded-lg w-2/3 mx-auto" />
      <div className="h-12 bg-neutral-200 dark:bg-neutral-600 rounded-lg w-48 mx-auto" />
    </div>

    {/* Skeleton Image */}
    <div className="w-full max-w-4xl mt-12 relative">
      <div className="aspect-video rounded-[3.5rem] border-8 border-neutral-200 dark:border-neutral-600 overflow-hidden bg-neutral-200 dark:bg-neutral-600">
        <div className="w-full h-full bg-neutral-300 dark:bg-neutral-500" />
      </div>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-secondary/20 to-transparent dark:from-secondary/10 blur-3xl" />
    </div>
  </div>
);

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="w-full min-h-screen bg-gradient-primary dark:bg-neutral-500 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
          <HeroSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-primary dark:bg-neutral-500 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Hero Text Content */}
          <div className="max-w-3xl space-y-6">
            <H1 className="text-4xl md:text-h1 font-normal leading-[111%] text-neutral-500 dark:text-white tracking-normal">
              HR Solutions to{' '}
              <span className="block">Power Your Business</span>
            </H1>
            
            <p className="text-lg md:text-[1.75rem] font-normal text-neutral-400 dark:text-neutral-200">
              Empower your people to do excellent work
            </p>

            <Button 
              size="lg"
              className="bg-primary-dark text-lg font-semibold hover:bg-primary-light text-white dark:bg-primary-light dark:hover:bg-primary transition-colors"
            >
              Get Started with Core HR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-4xl mt-12 relative">
            <div className="aspect-video rounded-[3.5rem] border-8 border-primary dark:border-primary-light overflow-hidden bg-neutral-200 dark:bg-neutral-400">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/api/placeholder/800/450"
                  alt="HR Management Platform Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-b from-secondary/20 to-transparent dark:from-secondary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;