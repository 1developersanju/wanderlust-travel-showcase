import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // Function to scroll to a section smoothly
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle scroll indicator click
  const handleScrollDown = () => {
    const fleetSection = document.getElementById('fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in leading-tight">
            Luxury Transportation <span className="text-gold">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in leading-relaxed" style={{animationDelay: "0.2s"}}>
            Experience premium travel across India with our exceptional fleet of vehicles and professional chauffeurs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-md shadow-lg hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300"
              onClick={() => scrollToSection('fleet')}
            >
              Explore Our Fleet
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 hover:text-gold text-lg px-8 py-6 rounded-md backdrop-blur-sm transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator with enhanced animation */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={handleScrollDown}
      >
        <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
          <svg className="w-6 h-6 text-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
