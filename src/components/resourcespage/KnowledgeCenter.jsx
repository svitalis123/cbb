'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';


const KnowledgeCenter = ({ posts }) => {
  const [activeTab, setActiveTab] = useState('Blogs');

  // Function to truncate text to a specific word limit
  const truncateText = (text, limit = 25) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  // Function to clean and extract the original image path from Next.js image URL
  const cleanImageUrl = (url) => {
    try {
      if (!url) return "/placeholder-image.jpg";
      
      // If it's a Next.js image URL, extract the original path
      if (url.includes('/_next/image?url=')) {
        const urlParam = new URL(url).searchParams.get('url');
        if (urlParam) {
          return decodeURIComponent(urlParam);
        }
      }
      
      // If it's already a clean URL, return it
      return url;
    } catch (error) {
      return "/placeholder-image.jpg";
    }
  };

  // Group posts by category
  const contentData = posts.reduce((acc, post) => {
    const category = post.type || 'Blogs'; // Default to Blogs if type is not specified
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      id: post._id,
      title: post.title,
      description: post.excerpt || post.content,
      content: post.content,
      slug: post.title_id,
      categories: post.categories || []
    });
    return acc;
  }, {
    'Blogs': [],
    'Case Studies': [],
    'Whitepapers': []
  });

  const tabs = ['Blogs', 'Case Studies', 'Whitepapers'];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
      >
        <h1 className="text-neutral-800 text-body lg:text-h3 font-[600] mb-2">
          Knowledge Center
        </h1>
        <p className="text-neutral-600 text-body font-[350]">
          Your Source for HR Insights
        </p>
      </motion.div>

      {/* Navigation with underline */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="flex justify-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 relative ${
                activeTab === tab ? 'text-neutral-900' : 'text-[#333]'
              } hover:text-[#2563EB] transition-colors`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2563EB]" />
              )}
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#BAE8FF]" />
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
      >
        {contentData[activeTab].map((item) => {
          const rawImageUrl = item.content.match(/src="([^"]+)"/)?.[1] || "";
          const imageUrl = cleanImageUrl(rawImageUrl);
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href={`/resources/${item.slug}`} 
                className="no-underline hover:no-underline"
              >
                <Card 
                  className="overflow-hidden shadow-lg max-w-[389px] rounded-[32px] p-4 border-[BAE8FF] hover:shadow-xl transition-shadow bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={item.title}
                      className="w-full rounded-[16px] h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff40] via-transparent to-transparent opacity-50" />
                  </div>
                  <CardContent className="p-2">
                    {item.categories && item.categories.length > 0 && (
                      <div className="flex gap-2 mb-3">
                        {item.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="bg-[#f8f9fa] text-neutral-800 border-none"
                          >
                            {category.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <h2 className="font-[600] text-neutral-800 text-[24px] mb-3 leading-normal line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-neutral-600 mb-4 text-bodysmal font-normal leading-relaxed line-clamp-3">
                      {truncateText(item.description)}
                    </p>
                    <span className="text-neutral-800 font-[500] text-bodysmal hover:text-[#1E40AF]">
                      Read More
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default KnowledgeCenter;