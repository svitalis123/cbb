import React from 'react';
import { Users, FileText, Calendar, Handshake, ClipboardList, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const FEATURES_DATA = [
  {
    id: 1,
    title: "Core HR",
    description: "Securely store all employee information.",
    icon: Users
  },
  {
    id: 2,
    title: "Payroll",
    description: "Process payroll in minutes with automatic tax calculations.",
    icon: FileText
  },
  {
    id: 3,
    title: "Leave Management",
    description: "Approve leave requests instantly with real-time balance updates.",
    icon: Calendar
  },
  {
    id: 4,
    title: "ATS and Onboarding",
    description: "Seamlessly convert candidates into productive team members.",
    icon: Handshake
  },
  {
    id: 5,
    title: "Performance Management",
    description: "Turn reviews into growth opportunities with goals and progress tracking.",
    icon: ClipboardList
  },
  {
    id: 6,
    title: "Time Attendance",
    description: "Automate attendance tracking with real-time insights into compliance.",
    icon: Clock
  }
];


const FeatureCard = ({ title, description, icon: Icon }) => (
  <Card className="bg-neutral-700 p-6">
    <CardContent className="p-0">
      <Icon className="h-6 w-6 text-blue-600 mb-3" />
      <h3 className="text-neutral-800 font-[600] text-bodybold mb-2">{title}</h3>
      <p className="text-neutral-600 font-[400] text-bodysmal">{description}</p>
    </CardContent>
  </Card>
);

const PlatformHrSection = ({ title, subtitle, features = FEATURES_DATA }) => (
  <div className="max-w-7xl mx-auto p-8 bg-[#fff] rounded-[64px] shadow-lg">
    <div className="text-center mb-12">
      <h2 className="text-h5 lg:text-h3 font-[600] text-neutral-800 mb-4"> {title || "One Platform, All Your HR Needs"}</h2>
      <p className="text-bodymed font-[400] text-neutral-600">{subtitle || "Everything you need to manage your team, all in one place."}</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="md:col-span-1">
        <Image 
          src="/assets/homepage/platformimg.webp" 
          alt="HR Professional"
          width={500}
          height={500}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      
      <div className="md:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map(({ id, title, description, icon }) => (
          <FeatureCard
            key={id}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </div>
  </div>
);

export default PlatformHrSection;