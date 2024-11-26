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
        value: '+254 719 262 360',
        href: 'tel:+254719262360'
      },
      {
        id: 'email',
        icon: '/assets/contact/mail.gif',
        label: 'Email Address:',
        value: 'info@hrbox.com',
        href: 'mailto:info@hrbox.com'
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

  // Error state
  const [errors, setErrors] = useState({});
  
  // Submitting state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Create email body with proper line breaks
    const emailBody = `Dear HRBOX Team,
    
I am ${formData.firstName} ${formData.lastName}, and I would like to get in touch regarding:

${formData.message}

Best regards,
${formData.firstName} ${formData.lastName}
${formData.email}`
    .split('\n')
    .join('%0D%0A');

    // Create mailto URL with properly encoded subject
    const mailtoUrl = `mailto:${contactInfo.details[1].value}?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;

    try {
      // Create and click a link
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error opening email client:', error);
      alert(`Please send your message manually to: ${contactInfo.details[1].value}`);
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-neutral-800 text-[24px] font-[600] mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              {contactInfo.details.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex flex-col items-start">
                    <Image width={400} height={600} src={item.icon} alt={item.label} className="h-12 w-12 text-blue-600 mb-3" />
                    <div>
                      <p className="text-neutral-800 font-[600] text-bodybold mb-0">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-neutral-600 text-bodysmal font-[400] hover:text-primary-dark transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-600 text-bodysmal font-[400]">{item.value}</p>
                      )}
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
                    placeholder="Enter your first name"
                    className={`w-full border-b-2 text-bodyextr font-normal ${errors.firstName ? 'border-red-500' : 'border-[#E2E8F0]'} pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className={`w-full border-b-2 text-bodyextr font-normal ${errors.lastName ? 'border-red-500' : 'border-[#E2E8F0]'} pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full border-b-2 text-bodyextr font-normal ${errors.email ? 'border-red-500' : 'border-[#E2E8F0]'} pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Your Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter subject"
                  className={`w-full border-b-2 text-bodyextr font-normal ${errors.subject ? 'border-red-500' : 'border-[#E2E8F0]'} pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors`}
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-bodyextr font-[600] text-neutral-800 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  placeholder="Enter your message"
                  className={`w-full border-b-2 ${errors.message ? 'border-red-500' : 'border-[#E2E8F0]'} text-bodyextr font-normal pb-2 placeholder-[#A0AEC0] focus:outline-none focus:border-[#2B63D9] transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-primary-dark'} text-neutral-99 py-3 rounded-lg hover:bg-[#2454BE] transition-colors flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Sending...</span>
                    <span className="animate-spin">↻</span>
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactForm;