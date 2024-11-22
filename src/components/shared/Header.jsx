  import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../ui/card";

const Header = () => {
  const navItems = [
    { label: "Product", href: "https://app.hrbox.africa/system/login" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="w-full bg-white dark:bg-neutral-500 sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto  bg-white dark:bg-neutral-500  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="w-full h-full ">
                  <Image
                    src="/assets/desktoplogo.webp"
                    width={197}
                    height={60}
                    alt="HR BOX Africa Logo"
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-neutral-800 font-[500] text-bodysmal hover:text-primary dark:text-neutral-200 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-neutral-800 bg-neutral-700 bg-opacity-[.2] font-[500] text-bodysmal hover:text-primary dark:text-white"
              >
                Sign Up
              </Button>
              <Button className="bg-primary-dark text-bodysmal hover:bg-primary-light text-neutral-99">
                Log In
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="!h-8 !w-8" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-neutral-500 font-[500] text-lg hover:text-primary dark:text-neutral-200 dark:hover:text-white transition-colors px-4 py-2"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="flex flex-col space-y-4 pt-4">
                      <a
                        href="https://app.hrbox.africa/system/login"
                        variant="ghost"
                        className="text-neutral-800 bg-neutral-700 font-[500] text-bodysmal dark:text-white w-full"
                      >
                        Sign Up
                      </a>
                      <a href="https://app.hrbox.africa/system/login" className="bg-primary-dark text-bodysmal hover:bg-primary-light text-neutral-99 w-full">
                        Log In
                      </a>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        
      </div>
      <section className="bg-[#D8F2FF] w-full">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 p-4 text-center sm:text-left">
            <span className="font-[500] text-bodysmal text-neutral-800">Talk to sales:</span>
            <a 
              href="tel:+254719262360" 
              className="text-bodysmal text-neutral-800 hover:text-blue-800 hover:underline font-[500]"
            >
              +254 719 262 360
            </a>
          </div>
        </section>
    </header>
  );
};

export default Header;
