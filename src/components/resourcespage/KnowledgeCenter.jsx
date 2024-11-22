'use client'
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const KnowledgeCenter = () => {
  const [activeTab, setActiveTab] = useState('Blogs');

  // Data for different content types
  const contentData = {
    Blogs: [
      {
        id: 1,
        title: "The Importance of Compliance Audits in HR",
        description: "Empowering children in rural primary schools by providing access to essential reading materials, mentorship, and hands-on skill development, inspiring them to aspire to great heights.",
        image: "/assets/impact/img1.webp",
      },
      {
        id: 2,
        title: "Why Performance Management is Crucial for Growing Companies",
        description: "Empowering children in rural primary schools by providing access to essential reading materials, mentorship, and hands-on skill development, inspiring them to aspire to great heights.",
        image: "/assets/impact/img2.webp",
      },
      {
        id: 3,
        title: "The Importance of Compliance Audits in HR",
        description: "Empowering children in rural primary schools by providing access to essential reading materials, mentorship, and hands-on skill development, inspiring them to aspire to great heights.",
        image: "/assets/impact/img1.webp",
      }
    ],
    'Case Studies': [
      {
        id: 4,
        title: "HR Transformation Case Study",
        description: "A detailed analysis of HR transformation in leading companies, focusing on digital adoption and process improvement.",
        image: "/assets/impact/img1.webp",
      }
      // Add more case studies here
    ],
    'Whitepapers': [
      {
        id: 7,
        title: "Future of HR Technology",
        description: "An in-depth look at emerging HR technologies and their impact on workplace management.",
        image: "/assets/impact/img2.webp",
      }
      // Add more whitepapers here
    ]
  };

  const tabs = ['Blogs', 'Case Studies', 'Whitepapers'];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold text-[#0A2358] mb-2">Knowledge Center</h1>
        <p className="text-[#2563EB]">Your Source for HR Insights</p>
      </div>

      {/* Navigation with underline */}
      <div className="relative mb-8">
        <div className="flex justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 relative ${
                activeTab === tab ? 'text-[#2563EB]' : 'text-gray-600'
              } hover:text-[#2563EB] transition-colors`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563EB]" />
              )}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#BAE8FF]" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {contentData[activeTab].map((item) => (
          <Card 
            key={item.id} 
            className="overflow-hidden shadow-lg rounded-xl border-[BAE8FF] hover:shadow-xl transition-shadow bg-white"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                width={400}
                height={300}
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-[#0A2358] mb-3 leading-tight">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              <button className="text-[#2563EB] font-semibold hover:text-[#1E40AF]">
                Read More
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeCenter;