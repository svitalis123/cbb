import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const navLinks = [
    { text: "Product", href: "https://app.hrbox.africa/system/login" },
    { text: "Services", href: "/services" },
    { text: "Resources", href: "/resources" },
    { text: "About Us", href: "/about-us" },
    { text: "Contact Us", href: "/contact-us" }
  ];
  
  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      )
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
      )
    }
  ];

  return (
    <div className="flex flex-col mt-10 bg-[#123059]">
      {/* Navigation Bar */}
      <nav className="bg-[#123059] p-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row md:justify-between items-center">
          {/* Logo */}
          <Image
            src="/assets/homepage/footerlogo.png"
            alt="Logo"
            width={400}
            height={100}
          />
          
          {/* Navigation Items */}
          <div className="flex flex-col lg:flex-row gap-5 py-6 lg:items-center">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-neutral-99 font-[500] font-bodysmal hover:text-yellow-400 transition duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-yellow-400 transition duration-200"
              >
                <span className="sr-only">{social.name}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-navy-900 p-4 mt-auto">
        <div className="max-w-7xl mx-auto text-white text-sm">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-6 justify-center items-center">
            <p className='text-small font-[400] text-[#596e8a]'>© 2024 HR Box Africa. All right reserved.</p>
            <div className="space-x-4">
              <a href="/privacy-policy" className="text-[#596e8a] hover:text-yellow-400 transition duration-200">
                Privacy Policy
              </a>
              <a href="/privacy-policy" className="text-[#596e8a] text-small font-[400] hover:text-yellow-400 transition duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;