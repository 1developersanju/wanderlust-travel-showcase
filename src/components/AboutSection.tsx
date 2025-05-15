import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Professionally trained chauffeurs",
  "Immaculately maintained luxury vehicles",
  "Tailored travel experiences across India",
  "24/7 customer support",
  "Complimentary amenities in every vehicle",
  "Safety and comfort as top priorities"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-navy to-navy/90 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gold leading-tight">
              Premier Luxury Transportation Across India
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold/30 mb-8 rounded-full"></div>
            
            <p className="text-lg mb-6 text-white/90 leading-relaxed">
              With over 15 years of experience in the luxury transportation industry across India, our agency has built a reputation for excellence and reliability. We pride ourselves on providing exceptional service to our clients, ensuring their travel experiences are comfortable, safe, and memorable.
            </p>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Our team of professional chauffeurs are rigorously trained and committed to delivering the highest standards of service. We maintain a diverse fleet of premium vehicles that are regularly serviced and kept in pristine condition to meet the demanding roads of India.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                className="bg-gold hover:bg-gold/90 text-white font-medium py-6 px-8 rounded hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-gold/30"
              >
                Learn More About Us
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-medium py-6 px-8 rounded hover:-translate-y-1 transition-all duration-300"
              >
                Contact Our Team
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 bg-navy/50 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gold">15+</h3>
                <p className="text-white/80 mt-2">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gold">500+</h3>
                <p className="text-white/80 mt-2">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gold">25+</h3>
                <p className="text-white/80 mt-2">Luxury Vehicles</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gold">50+</h3>
                <p className="text-white/80 mt-2">Destinations</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl group">
              <AspectRatio ratio={3/4} className="bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1507691640734-887fa7be3377?q=80&w=2940&auto=format&fit=crop"
                  alt="Luxury chauffeur service with premium sedan in India"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-80"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-52 h-52 bg-gradient-to-br from-gold to-gold/70 rounded-lg -z-10 blur-sm opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-52 h-52 border-2 border-gold/30 rounded-lg -z-10"></div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <h3 className="text-gold text-2xl font-medium mb-2">Experience Luxury</h3>
              <p className="text-white/90">Our commitment to excellence makes us the premier choice for discerning travelers across India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
