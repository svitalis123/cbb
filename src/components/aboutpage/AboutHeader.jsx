import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { H1 } from '../ui/typography';
import Image from 'next/image';

const data = {
  title: "Meet HRBOX Africa:",
  subtitle: "Your Trusted HR Partner",
  cards: [
    {
      icon: "/assets/about/plus.webp",
      title: "Mission",
      content: "Empowering people to do excellent work."
    },
    {
      icon: "/assets/about/eye.webp",
      title: "Vision", 
      content: "To become the #1 HR business partner to organizations across Africa."
    }
  ]
};



const AboutHeader = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <H1 className=" font-[600] text-neutral-800 text-center mb-8">
        {data.title}
        <span className="block mt-2">{data.subtitle}</span>
      </H1>
      
      <div className="grid md:grid-cols-2 gap-4">
        {data.cards.map((card, index) => (
          <Card key={index} className="bg-[#BAE8FF] shadow-xl rounded-3xl bg-opacity-[0.2] transition-shadow">
            <CardContent className="p-6 h-full">
              <div className="flex items-center h-full gap-4">
                <Image width={400} height={600} src={card.icon} alt={card.title} className="h-[40px] lg:h-[80px] w-[40px] lg:w-[80px] " />
                <div>
                  <h3 className="font-[600] text-body text-neutral-800 mb-2">{card.title}</h3>
                  <p className="text-neutral-600 min-h-12 font-[400] text-bodyalpha">{card.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutHeader;