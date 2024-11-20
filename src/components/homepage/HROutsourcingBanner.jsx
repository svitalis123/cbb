import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const HROutsourcingBanner = ({ 
  title = "Focus on Growth, We'll Handle the Rest",
  subtitle = "Outsource the Effort, Keep the Impact",
  label = "HR Outsourcing",
  buttonText = "Learn More about HR Outsourcing",
  imageSrc = "/assets/homepage/outsourcingillust.webp",
  imageAlt = "Two professionals in blue attire discussing business metrics"
}) => {
  return (
    <Card className="bg-white max-w-[1280px] mx-auto w-[95%] lg:w-full my-8 rounded-[64px] shadow-lg overflow-hidden">
      <CardContent className="flex flex-col lg:flex-row justify-between items-center p-8">
        <div className="flex-1 max-w-lg">
          <span className="text-blue-500 text-sm mb-2 block">{label}</span>
          <h1 className="text-navy-900 text-4xl font-bold mb-2">{title}</h1>
          <div className="flex-1 md:hidden py-5">
            <Image src={imageSrc} width={600} height={400} alt={imageAlt} className="w-full h-auto"/>
          </div>
          <p className="text-blue-900 mb-6">{subtitle}</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            {buttonText}
          </button>
        </div>
        <div className="hidden md:flex md:flex-1">
          <Image src={imageSrc} width={600} height={400} alt={imageAlt} className="w-full h-auto"/>
        </div>
      </CardContent>
    </Card>
  );
};

export default HROutsourcingBanner;