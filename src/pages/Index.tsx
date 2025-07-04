import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FleetSection from '@/components/FleetSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ui/scroll-animation';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ScrollAnimation variant="slide-right">
        <FleetSection />
      </ScrollAnimation>
      <ScrollAnimation variant="slide-left">
        <ServicesSection />
      </ScrollAnimation>
      <ScrollAnimation variant="zoom">
        <AboutSection />
      </ScrollAnimation>
      <ScrollAnimation variant="slide-up">
        <TestimonialsSection />
      </ScrollAnimation>
      <ScrollAnimation variant="fade">
        <ContactSection />
      </ScrollAnimation>
      <Footer />
    </div>
  );
};

export default Index;
