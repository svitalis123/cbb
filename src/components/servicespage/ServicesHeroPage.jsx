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
            <H1 className=" font-[600] leading-[111%] text-neutral-800 dark:text-white tracking-normal">
              Leave HR to Us
            </H1>
            
            <p className="text-bodysmal md:text-[1.75rem] font-[400] text-neutral-600 dark:text-neutral-200">
              Outsource the Effort, Keep the Impact
            </p>
            
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
            <a href="https://airtable.com/appplvfzbs9RuJ9e4/pagtTulSCq3GEcZbU/form" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#BAE8FF] text-bodysmal font-[600] hover:text-neutral-99 hover:bg-primary-light text-[#123059] dark:bg-primary-light dark:hover:bg-primary transition-colors"
              >
                Book a Demo 
              </Button>
              </a>
              <a href="https://airtable.com/appplvfzbs9RuJ9e4/pagtTulSCq3GEcZbU/form" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-primary-dark text-bodysmal font-[600] hover:text-neutral-99 hover:bg-primary-light text-neutral-99 dark:bg-primary-light dark:hover:bg-primary transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
            </div>
           
          </div>
        
       
      </div>
    </div>
  );
};

export default HeroSection;