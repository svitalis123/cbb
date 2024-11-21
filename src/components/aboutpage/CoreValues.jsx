'use client'
import React, { useState } from 'react';
import {  ThumbsUp, TrendingUp, Scale, GlassWaterIcon } from 'lucide-react';

const CoreValues = () => {
  const [data] = useState({
    title: "Our Core Values",
    subtitle: "We live these values every day, in everything we do.",
    values: [
      {
        icon: GlassWaterIcon,
        title: "Do it well",
        description: "We believe in excellence in everything we do."
      },
      {
        icon: ThumbsUp,
        title: "Make a difference",
        description: "We strive to create positive impacts."
      },
      {
        icon: TrendingUp,
        title: "Go all in",
        description: "We are committed to putting our full effort into each task."
      },
      {
        icon: Scale,
        title: "Lead a balanced life",
        description: "We encourage a harmonious work-life balance for both employees and clients."
      }
    ]
  });

  const ValueCard = ({ icon: Icon, title, description }) => (
    <div className="bg-[#BAE8FF] bg-opacity-[0.2] p-6 rounded-xl shadow-md flex items-start gap-4 transform transition-transform ">
      <Icon className="text-blue-600 w-6 h-6 flex-shrink-0" />
      <div>
        <h3 className="text-navy-900 font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl bg-white rounded-[64px] mx-auto p-10 shadow-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">{data.title}</h1>
        <p className="text-gray-600">{data.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;