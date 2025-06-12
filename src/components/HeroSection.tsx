import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80"
          alt="Travel Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Your Journey, Our Commitment
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto text-gray-200 px-2">
          Experience seamless travel across South India with our comprehensive fleet and specialized packages
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 lg:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg font-medium"
            onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Fleet
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <a 
            href="https://wa.me/+917397080671" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="w-full border-2 border-white text-black hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 lg:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg font-medium"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Inquire via WhatsApp
            </Button>
          </a>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 max-w-6xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">South India Coverage</h3>
            <p className="text-sm sm:text-base text-gray-300">Comprehensive travel services across all South Indian states</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Diverse Fleet</h3>
            <p className="text-sm sm:text-base text-gray-300">From 4-seater cars to 54-seater buses for all your needs</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Specialized Packages</h3>
            <p className="text-sm sm:text-base text-gray-300">Custom packages for tours, weddings, business, and more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
