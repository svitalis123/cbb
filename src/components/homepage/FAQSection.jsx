'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { H3 } from '../ui/typography';

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
      answer: "Yes, we offer end-to-end HR outsourcing, including payroll, recruitment, employee management, and compliance."
    },
    {
      question: "How secure is HRBOX? Where is your data stored?",
      answer: "HRBOX prioritizes data security. All data is encrypted and stored securely in ISO-certified data centers, ensuring full compliance with global data protection regulations."
    }
  ];

  return (
    <div className="max-w-[1280px]  mx-auto p-8 my-8 bg-white rounded-[64px] shadow-lg">
      <H3 className=" font-[600] text-neutral-800 mb-8 text-center">
        Frequently Asked Questions
      </H3>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div 
            key={index}
            className="bg-[#EEF9FF] rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="text-[#0F331C] text-bodysmal font-[600]">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-navy-800" />
              ) : (
                <ChevronDown className="w-5 h-5 text-navy-800" />
              )}
            </button>
            
            {openIndex === index && item.answer && (
              <div className="px-6 pb-4 text-bodysmal font-[400] text-neutral-600">
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