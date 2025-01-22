import Image from 'next/image';
import React from 'react';
import { H3 } from '../ui/typography';
import { ChevronRight } from 'lucide-react';

const PromotionalBanner = ({ 
  title = "Ready to Transform your Workforce?",
  description = "Streamline processes, empower your team, and drive growth with HRBOX Africa.",
  ctaButtons = [
    { text: "Book a Demo", link: "https://airtable.com/appplvfzbs9RuJ9e4/pagtTulSCq3GEcZbU/form", variant: "light" },
    { text: "Get Started Today", link: "https://airtable.com/appplvfzbs9RuJ9e4/pagtTulSCq3GEcZbU/form", variant: "dark", hasArrow: true }
  ],
  imageSrc = "/team-celebration.jpg",
  imageAlt = "Team celebrating together"
}) => {
  return (
    <div className="max-w-[1280px] w-[98%] lg:w-[100%] mx-auto">
      <div className="bg-gradient-to-b from-sky-300 to-sky-400 rounded-[32px] p-4 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="rounded-[24px] overflow-hidden">
            <Image
              width={600}
              height={400}
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <H3 className="text-neutral-99 font-[600]  leading-tight">
            {title}
          </H3>
          <p className="text-[#D8F2FF] text-bodymed font-[400] leading-relaxed">
            {description}
          </p>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            {ctaButtons.map((button, index) => (
              <a key={index} href={button.link} target="_blank" rel="noopener noreferrer">
              <button                 
                className={`px-8 py-3 flex items-center rounded-lg font-[500] text-bodysmal  transition-colors ${
                  button.variant === 'light' 
                    ? 'bg-neutral-700 text-neutral-800 hover:bg-sky-50'
                    : 'bg-primary-dark text-neutral-99 hover:bg-blue-800'
                }`}
              >
                {button.text}
                {button.hasArrow && <ChevronRight />}
              </button>
               </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;