'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What does HRBOX Africa do?",
      answer: "HRBOX Africa provides a comprehensive HR tech platform and expert HR services, including payroll, recruitment, compliance audits, and HR consulting."
    },
    {
      question: "Is your support team outsourced?",
      answer: "No, our support team is in-house, ensuring personalized and consistent service."
    },
    {
      question: "Can I outsource the entire HR function to you?",
      answer: "No, our support team is in-house, ensuring personalized and consistent service."
    },
    {
      question: "How secure is HRBOX? Where is your data stored?",
      answer: "No, our support team is in-house, ensuring personalized and consistent service."
    }
  ];

  return (
    <div className="max-w-[1280px]  mx-auto p-8 my-8 bg-white rounded-[64px] shadow-lg">
      <h2 className="text-5xl font-bold text-navy-800 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className="bg-blue-50 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="text-navy-800 font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-navy-800" />
              ) : (
                <ChevronDown className="w-5 h-5 text-navy-800" />
              )}
            </button>
            
            {openIndex === index && item.answer && (
              <div className="px-6 pb-4 text-navy-800">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;