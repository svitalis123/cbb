import React from 'react'
import AboutHeader from './AboutHeader'
import CoreValues from './CoreValues'
import PromotionalBanner from '../homepage/PromotionalBanner'

const AboutUs = () => {
  return (
    <div>
      <div className='bg-white py-8 lg:py-16'>
        <AboutHeader />
      </div>
      <div className='bg-[#EEF9FF] py-8 lg:py-16'>
        <CoreValues />
      </div>
      <div className='bg-white py-10'>
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
      </div>
     
    </div>
  )
}

export default AboutUs
