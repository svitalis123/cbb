import React from 'react'
import ServicesHeroPage from './ServicesHeroPage'
import ServicesGrid from './ServicesGrid'
import PromotionalBanner from '../homepage/PromotionalBanner'

const ServicesHomePage = () => {
  return (
    <div>
      <ServicesHeroPage />
      <ServicesGrid />
      <PromotionalBanner 
        title="Ready to Transform your Workforce?"
        description="Streamline processes, empower your team, and drive growth with HRBOX Africa."
        ctaButtons={[
          { text: "Book a Demo", variant: "light" },
          { text: "Get Started Today", variant: "dark", hasArrow: true }
        ]}
        imageSrc = "/assets/homepage/workforce.webp"
        imageAlt = "Team celebrating together in office"
      />

    </div>
  )
}

export default ServicesHomePage
