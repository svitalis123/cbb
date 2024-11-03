import React from 'react';
import { Calendar, DollarSign } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, bulletPoints = [] }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4">
      <div className="text-blue-600 w-12 h-12">
        {Icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {bulletPoints.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ServicesGrid = () => {
  const CalendarDollarIcon = () => (
    <div className="relative">
      <Calendar className="w-12 h-12 stroke-current" />
      <DollarSign className="w-6 h-6 stroke-current absolute bottom-0 right-0" />
    </div>
  );

  const services = [
    {
      title: "Payroll Outsourcing",
      description: "Let us manage your payroll complexities, so you can focus on growth. Our services ensure compliant, timely payroll processing each month.",
      icon: <CalendarDollarIcon />
    },
    {
      title: "Recruitment",
      description: "Find top talent fast. We handle job postings and interviews, streamlining your hiring process to help you build the perfect team.",
      icon: <CalendarDollarIcon />
    },
    {
      title: "HR and Compliance Audits",
      description: "Navigate labor laws confidently. Our audits ensure your HR practices meet regulatory standards and enhance efficiency.",
      icon: <CalendarDollarIcon />
    },
    {
      title: "Staff Outsourcing",
      description: "Access skilled professionals on demand. Our flexible staffing solutions offer short-term support without long-term commitments",
      icon: <CalendarDollarIcon />
    },
    {
      title: "HR Consulting",
      description: "From policy development to training, our consulting services align with your business goals.",
      icon: <CalendarDollarIcon />,
      bulletPoints: [
        "Policy Development: Clear, compliant HR policies.",
        "Contract Management: Up-to-date, legally sound employee contracts.",
        "Employee Training: Empower your workforce through comprehensive training."
      ]
    },
    {
      title: "Employee Surveys",
      description: "Gauge satisfaction and engagement with custom surveys, gaining insights to strengthen workplace culture.",
      icon: <CalendarDollarIcon />
    },
    {
      title: "Employer of Record Services",
      description: "Expand globally without the hassle. We handle employment contracts, payroll, taxes, and compliance for your international team",
      icon: <CalendarDollarIcon />
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]  gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bulletPoints={service.bulletPoints}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;