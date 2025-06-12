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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
            Your Journey, Our Commitment
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-4xl mx-auto text-gray-200 px-2 sm:px-4 leading-relaxed">
            Experience seamless travel across South India with our comprehensive fleet and specialized packages
          </p>
          
          {/* Buttons Section */}
          <div className="pt-4 sm:pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-2xl mx-auto">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg font-medium min-h-[48px] sm:min-h-[56px]"
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
                  className="w-full border-2 border-white text-black hover:bg-white hover:text-primary px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg font-medium min-h-[48px] sm:min-h-[56px]"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Inquire via WhatsApp
                </Button>
              </a>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm p-5 sm:p-6 lg:p-7 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">South India Coverage</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Comprehensive travel services across all South Indian states</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-5 sm:p-6 lg:p-7 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Diverse Fleet</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">From 4-seater cars to 54-seater buses for all your needs</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-5 sm:p-6 lg:p-7 rounded-lg sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Specialized Packages</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Custom packages for tours, weddings, business, and more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
