import React from 'react';
import { Calendar, ChartBarIcon, DockIcon, DollarSign, UsersIcon } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, bulletPoints = [], className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4 ${className}`}>
      <div className="text-blue-600 w-12 h-12">
        {Icon}
      </div>
      <h3 className="text-bodybold font-[600] text-neutral-800">{title}</h3>
      <p className="text-neutral-600 text-bodysmal">{description}</p>
      {bulletPoints.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-bodysmal font-[400] text-neutral-600">
          {bulletPoints.map((point, index) => (
            <li className='text-bodysmal text-neutral-600' key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Payroll Outsourcing",
      description: "Let us handle your payroll complexities while you focus on growing your business. Our outsourced payroll services ensure timely and compliant payroll processing every month.",
      icon: <UsersIcon />
    },
    {
      title: "Recruitment",
      description: "Find the right talent fast. From job posting to interviews, we manage the entire recruitment process so you can focus on finding the perfect fit for your team.",
      icon: <UsersIcon />
    },
    {
      title: "HR and Compliance Audits",
      description: "We help you navigate the complexities of labor laws and regulations. Our audits ensure that your HR practices are fully compliant and efficient. ",
      icon: <UsersIcon />
    },
    {
      title: "Staff Outsourcing",
      description: "Get access to skilled professionals without the long-term commitment. Our staff outsourcing services provide flexible, short-term staffing solutions.",
      icon: <DockIcon />
    },
    {
      title: "Employee Surveys",
      description: "Measure employee satisfaction and engagement with our custom surveys. Get actionable insights to improve your workplace culture.",
      icon: <ChartBarIcon />
    },
    {
      title: "HR Consulting",
      description: "Whether you need policy development, contract management, or employee training, our HR consulting services are tailored to your business goals.",
      bulletPoints: [
        "Policy Development: Create clear, compliant, and effective HR policies.",
        "Contract Management: Ensure all employee contracts are legally sound and up-to-date.",
        "Employee Training: Provide comprehensive training to empower your workforce."
      ],
      icon: <ChartBarIcon />,
      span: true
    },
    {
      title: "Employer of Record Services",
      description: "Expand your business across borders without the complexity. We take care of employment contracts, payroll, taxes, and compliance on your behalf.",
      icon: <DockIcon />
    }
  ];

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              className={service.span ? 'lg:col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;