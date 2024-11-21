import React from 'react';
import HeroSection from './HeroSection';
import { FileText, UserPlus, Clock, Target, WalletCards, Calendar } from "lucide-react";
import { 
  CoreHRIllustration, 
  PayrollIllustration,
  TimeOffIllustration, // New illustration
  ATSIllustration,
  TimeAttendanceIllustration,
  PerformanceIllustration 
} from '@/lib/illustrations';
import DiscoverFeaturesSection from './DiscoverFeaturesSection';
import PlatformHrSection from './PlatformHrSection';
import HROutsourcingBanner from './HROutsourcingBanner';
import PromotionalBanner from './PromotionalBanner';
import FAQSection from './FAQSection';
import Footer from '../shared/Footer';

// First section features
const coreFeatures = [
  {
    id: "core-hr",
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    title: "Core HR",
    description: "Our Core HR module is designed to streamline employee management. From records to compliance, keep everything centralized, secure, and accessible from anywhere.",
    action: "Get Started with Core HR",
    hasLink: true,
    illustration: <CoreHRIllustration />,
    imageSrc: null
  },
  {
    id: "payroll",
    icon: <WalletCards className="w-8 h-8 text-green-500" />,
    title: "Payroll",
    description: "Simplify your payroll process with our automated system. Handle salaries, taxes, and benefits with ease while ensuring compliance and accuracy.",
    action: "Get Started with Payroll",
    hasLink: true,
    illustration: <PayrollIllustration />,
    imageSrc: null
  },
  {
    id: "time-off",
    icon: <Calendar className="w-8 h-8 text-pink-500" />,
    title: "Leave and Time Off",
    description: "Efficiently manage employee time off with our automated leave management system. Track vacation days, sick leave, and other absences with ease.",
    action: "Get Started with Time Off",
    hasLink: true,
    illustration: <TimeOffIllustration />,
    imageSrc: null
  }
];


// Second section features
const additionalFeatures = [
  {
    id: "ats",
    icon: <UserPlus className="w-8 h-8 text-blue-500" />,
    title: "ATS and Onboarding",
    description: "Attract, hire, and onboard top talent effortlessly. From application tracking to digital onboarding, we simplify the recruitment process for both HR teams and new employees.",
    action: "Start Hiring Better",
    hasLink: true,
    illustration: <ATSIllustration />,
    imageSrc: null
  },
  {
    id: "time-attendance",
    icon: <Clock className="w-8 h-8 text-violet-500" />,
    title: "Time and Attendance",
    description: "Track employee time and attendance efficiently with our automated system. Monitor work hours, breaks, and overtime while ensuring compliance with labor regulations.",
    action: "Explore Time Tracking",
    hasLink: true,
    illustration: <TimeAttendanceIllustration />,
    imageSrc: null
  },
  {
    id: "performance",
    icon: <Target className="w-8 h-8 text-emerald-500" />,
    title: "Performance Management",
    description: "Set and track goals, conduct performance reviews, and develop your team with our comprehensive performance management system.",
    action: "Boost Performance",
    hasLink: true,
    illustration: <PerformanceIllustration />,
    imageSrc: null
  }
];

const HomePage = () => {
  return (
    <main className=''>
      <HeroSection
       title="One Platform, All Your HR Needs"
       subtitle="Everything you need to manage your team, all in one place."
      />
      
      <PlatformHrSection />

      <HROutsourcingBanner />

      <PromotionalBanner 
        title="Ready to Transform your Workforce?"
        description="Streamline processes, empower your team, and drive growth with HRBOX Africa."
        ctaButtons={[
          { text: "Book a Demo", variant: "light" },
          { text: "Get Started Today →", variant: "dark" }
        ]}
        imageSrc = "/assets/homepage/workforce.webp"
        imageAlt = "Team celebrating together in office"
      />

      <FAQSection />
      <Footer />
      {/* First features section - original layout */}
      {/* <DiscoverFeaturesSection 
        features={coreFeatures}
        headerTitle="Discover All Our Features"
        headerSubtitle="Empower Your Team, Elevate Your Success."
      /> */}
      
      {/* Second features section - reversed layout, no header */}
      {/* <DiscoverFeaturesSection
        features={additionalFeatures}
        reversed={true}
        showHeader={false}
      /> */}
    </main>
  );
};

export default HomePage;