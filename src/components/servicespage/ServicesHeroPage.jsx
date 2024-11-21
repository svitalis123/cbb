import React from 'react';
import { Button } from '../ui/button';
import { H1 } from '../ui/typography';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-ful pt-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center ">
        {/* Left Content Section */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
            <H1 className="text-4xl md:text-h1 font-normal leading-[111%] text-neutral-500 dark:text-white tracking-normal">
              Empower your people{' '}
              <span className="block">to do excellent work</span>
            </H1>
            
            <p className="text-lg md:text-[1.75rem] font-normal text-neutral-400 dark:text-neutral-200">
            Effortless HR Solutions for Growing Businesses Across Africa
            </p>
            
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
              <Button 
                size="lg"
                className="bg-[#BAE8FF] text-lg font-semibold hover:bg-primary-light text-[#123059] dark:bg-primary-light dark:hover:bg-primary transition-colors"
              >
                Book a Demo 
              </Button>
              <Button 
                size="lg"
                className="bg-primary-dark text-lg font-semibold hover:bg-primary-light text-white dark:bg-primary-light dark:hover:bg-primary transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
           
          </div>
        
       
      </div>
    </div>
  );
};

export default HeroSection;