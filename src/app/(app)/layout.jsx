import Header from '@/components/shared/Header';
import React from 'react';
export default function HomeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}