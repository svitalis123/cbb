import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React from 'react';
export default function PrivacyPolicyLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}