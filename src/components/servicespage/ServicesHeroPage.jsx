import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-[4rem] font-bold text-gray-800 leading-tight">
              HR Services<br />
              Tailored for Your<br />
              Business Needs
            </h1>
            <p className="text-xl lg:text-[1.75rem] text-gray-600">
              Outsource the Effort, Keep the Impact
            </p>
          </div>
          <button className="bg-blue-600 text-lg hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
            Get Started with Core HR
          </button>
        </div>
        
        {/* Right Image Section */}
        <div className="w-full md:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div 
            className="bg-gray-200 rounded-3xl aspect-video"
            style={{
              maxheight: '515px',
              height: '32rem',
              width: '100%',
              border: '15px solid #0A3265'
            }}
          >
            {/* Placeholder for hero image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;