import Image from 'next/image';
import React from 'react';

const PromotionalBanner = ({ 
  title = "Ready to Transform your Workforce?",
  description = "Streamline processes, empower your team, and drive growth with HRBOX Africa.",
  ctaButtons = [
    { text: "Book a Demo", variant: "light" },
    { text: "Get Started Today", variant: "dark", hasArrow: true }
  ],
  imageSrc = "/team-celebration.jpg",
  imageAlt = "Team celebrating together"
}) => {
  return (
    <div className="max-w-[1280px] w-[98%] lg:w-[100%] mx-auto">
      <div className="bg-gradient-to-b from-sky-300 to-sky-400 rounded-[32px] p-12 flex flex-col md:flex-row items-center gap-12">
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
          <h2 className="text-white text-5xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-white text-xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            {ctaButtons.map((button, index) => (
              <button 
                key={index}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  button.variant === 'light' 
                    ? 'bg-sky-100 text-sky-900 hover:bg-sky-50'
                    : 'bg-blue-700 text-white hover:bg-blue-800'
                }`}
              >
                {button.text}
                {button.hasArrow && " →"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;