import Image from 'next/image';
import React from 'react';

const ImpactPrograms = () => {
  const programs = [
    {
      title: "Aspire Workshops Curriculum",
      description: "Empowering children in rural primary schools by providing access to essential reading materials, mentorship, and hands-on skill development, inspiring them to aspire to great heights.",
      image: "/assets/impact/img1.webp",
      imageAlt: "Students reading in sunlit classroom"
    },
    {
      title: "Career Workshops Curriculum",
      description: "Enhancing the employability of graduates through tailored capacity-building programs, equipping them with the skills needed to succeed in today's competitive job market.",
      image: "/assets/impact/img2.webp",
      imageAlt: "Professional woman in office setting"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <p className="text-blue-500 text-sm font-medium mb-2">What Makes Us Special?</p>
        <h1 className="text-[#1a2b4b] text-4xl font-bold mb-4">We Are Impact Focused.</h1>
        <p className="text-blue-900 text-lg">5% of our revenue is channeled to our 2 impact programs</p>
      </div>

      <div className="grid md:grid-cols-2  justify-center  gap-8">
        {programs.map((program, index) => (
          <div 
            key={index} 
            className="bg-white rounded-3xl max-w-[480px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-shadow duration-300"
          >
            <div className="relative  h-70">
              <Image
                height={400}
                width={600}
                src={program.image}
                alt={program.imageAlt}
                className="w-full h-full object-obtain"
              />
            </div>
            <div className="p-8">
              <h2 className="text-[#1a2b4b] text-xl font-bold mb-4">{program.title}</h2>
              <p className="text-blue-900 leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactPrograms;