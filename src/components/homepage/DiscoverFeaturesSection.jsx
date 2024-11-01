'use client'
import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FeatureAccordionItem = ({ feature, isOpen }) => {
  return (
    <AccordionItem
      value={feature.id}
      className="border rounded-2xl bg-white overflow-hidden shadow-sm"
    >
      <AccordionTrigger 
        className={cn(
          "px-8 py-6 hover:no-underline",
          "[&[data-state=open]>div]:pb-0",
          "[&[data-state=open]_.title-closed]:opacity-0",
          "[&[data-state=open]_.title-closed]:translate-y-2"
        )}
      >
        <div className="flex items-start space-x-4 w-full">
          <div className="mt-1">
            {feature.icon}
          </div>
          <div className="flex-1 text-left">
            <h3 className={cn(
              "title-closed text-2xl font-semibold text-gray-900",
              "transition-all duration-300 ease-in-out"
            )}>
              {feature.title}
            </h3>
          </div>
        </div>
      </AccordionTrigger>
      
      <AccordionContent>
        <div className="px-8 pb-6">
          <div className="ml-12">
            <h3 className={cn(
              "title-open text-2xl font-semibold text-gray-900 mb-4",
              "transition-all duration-300 ease-in-out",
              "opacity-1 -translate-y-2",
              "[&[data-state=open]]:opacity-100",
              "[&[data-state=open]]:translate-y-0"
            )}>
              {feature.title}
            </h3>
            <p className="text-gray-600 text-lg">
              {feature.description}
            </p>
            {feature.hasLink && (
              <a 
                href="#" 
                className="text-blue-500 hover:text-blue-600 font-medium flex items-center group mt-6"
              >
                {feature.action}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const DiscoverFeaturesSection = ({ 
  features,
  reversed = false,
  showHeader = true,
  headerTitle = "Discover All Our Features",
  headerSubtitle = "Empower Your Team, Elevate Your Success.",
  className = ""
}) => {
  const [activeSection, setActiveSection] = useState(features[0]?.id || null);

  const handleAccordionChange = (value) => {
    setActiveSection(prev => prev === value ? null : value);
  };

  const AccordionSection = (
    <div className="space-y-4">
      <Accordion
        type="single"
        collapsible
        value={activeSection}
        onValueChange={handleAccordionChange}
        className="space-y-4"
      >
        {features.map((feature) => (
          <FeatureAccordionItem
            key={feature.id}
            feature={feature}
            isOpen={activeSection === feature.id}
          />
        ))}
      </Accordion>
    </div>
  );

  const IllustrationSection = (
    <div className="hidden lg:block">
      <div className="bg-white rounded-xl p-6 h-full shadow-lg transition-all duration-300 ease-in-out">
        {activeSection && features.map((feature) => (
          feature.id === activeSection && (
            <div key={feature.id} className="w-full h-full">
              {feature.imageSrc ? (
                <img 
                  src={feature.imageSrc} 
                  alt={feature.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                feature.illustration
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );

  return (
    <div className={cn("bg-gray-50 py-12", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {headerTitle}
            </h1>
            <p className="text-xl text-gray-600">
              {headerSubtitle}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reversed ? (
            <>
              {IllustrationSection}
              {AccordionSection}
            </>
          ) : (
            <>
              {AccordionSection}
              {IllustrationSection}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverFeaturesSection;