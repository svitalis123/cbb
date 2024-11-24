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
          { text: "Book a Demo", link: "https://app.hrbox.africa/system/login", variant: "light" },
          { text: "Get Started Today", link: "https://airtable.com/appplvfzbs9RuJ9e4/pagtTulSCq3GEcZbU/form", variant: "dark", hasArrow: true }
        ]}
        imageSrc = "/assets/homepage/workforce.webp"
        imageAlt = "Team celebrating together in office"
      />

    </div>
  )
}

export default ServicesHomePage
