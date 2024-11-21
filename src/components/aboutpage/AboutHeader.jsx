import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const data = {
  title: "Meet HRBOX Africa:",
  subtitle: "Your Trusted HR Partner",
  cards: [
    {
      icon: "plus",
      title: "Mission",
      content: "Empowering people to do excellent work."
    },
    {
      icon: "eye",
      title: "Vision", 
      content: "To become the #1 HR business partner to organizations across Africa."
    }
  ]
};

const IconComponent = ({ type }) => {
  const icons = {
    plus: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />,
    eye: <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </>
  };

  return (
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {icons[type]}
    </svg>
  );
};

const AboutHeader = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-8">
        {data.title}
        <span className="block mt-2">{data.subtitle}</span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-4">
        {data.cards.map((card, index) => (
          <Card key={index} className="bg-[#BAE8FF] shadow-xl rounded-3xl bg-opacity-[0.2] transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-blue-100">
                  <IconComponent type={card.icon} />
                </div>
                <div>
                  <h2 className="font-semibold text-xl mb-2">{card.title}</h2>
                  <p className="text-gray-700">{card.content}</p>
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