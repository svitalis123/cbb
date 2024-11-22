'use client'
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { H3 } from '../ui/typography';
import Image from 'next/image';

const ContactForm = () => {
  // Contact information data
  const contactInfo = {
    title: "Get In Touch With HRBOX Africa",
    subtitle: "Ready to streamline your HR processes?",
    callToAction: "Contact us today to get started.",
    details: [
      {
        id: 'phone',
        icon: '/assets/contact/calling.gif',
        label: 'Phone Number:',
        value: '+254 719 262 360'
      },
      {
        id: 'email',
        icon: '/assets/contact/mail.gif',
        label: 'Email Address:',
        value: 'info@hrbox.com'
      },
      {
        id: 'location',
        icon: '/assets/contact/location.gif',
        label: 'Office Location:',
        value: 'Kilimani No 51'
      }
    ]
  };

  // Form fields initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="text-center mb-8">
        <H3 className="font-[600] text-neutral-800 mb-4">{contactInfo.title}</H3>
        <p className="text-body text-neutral-600 font-[400] mb-2">{contactInfo.subtitle}</p>
        <p className="text-body text-neutral-600 font-[400]">{contactInfo.callToAction}</p>
      </div>

      <Card className="w-full max-w-[1000px] mx-auto rounded-[20px] shadow-[0_2px_20px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="w-full md:w-[320px] bg-[#EEF9FF] p-8">
            <h2 className="text-neutral-800 text-[24px]  font-[600] mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.details.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex flex-col items-start">
                    <Image width={400} height={600} src={item.icon} alt={item.label} className="h-12 w-12 text-blue-600 mb-3" />
                   
                    <div>
                      <p className="text-neutral-800  font-[600] text-bodybold mb-0">{item.label}</p>
                      <p className="text-neutral-600  text-bodysmal font-[400]">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex-1 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Placeholder"
                    className="w-full border-b-2 text-bodyextr font-normal border-[#E2E8F0] pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Placeholder"
                    className="w-full border-b-2 text-bodyextr font-normal border-[#E2E8F0] pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Placeholder"
                  className="w-full border-b-2 text-bodyextr font-normal border-[#E2E8F0] pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors"
                />
              </div>

              <div>
                <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Your Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Placeholder"
                  className="w-full border-b-2 text-bodyextr font-normal border-[#E2E8F0] pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors"
                />
              </div>

              <div>
                <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  placeholder="Placeholder"
                  className="w-full border-b-2 border-[#E2E8F0] text-bodyextr font-normal pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary-dark text-neutral-99 py-3 rounded-lg hover:bg-[#2454BE] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactForm;