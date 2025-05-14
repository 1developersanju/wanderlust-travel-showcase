
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gold">About Our Agency</h2>
            <p className="text-lg mb-6 text-white/80">
              With over 15 years of experience in the luxury transportation industry across India, our agency has built a reputation for excellence and reliability. We pride ourselves on providing exceptional service to our clients, ensuring their travel experiences are comfortable, safe, and memorable.
            </p>
            <p className="text-lg mb-6 text-white/80">
              Our team of professional chauffeurs are rigorously trained and committed to delivering the highest standards of service. We maintain a diverse fleet of premium vehicles that are regularly serviced and kept in pristine condition to meet the demanding roads of India.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-4xl font-bold text-gold">15+</h3>
                <p className="text-white/80 mt-2">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gold">500+</h3>
                <p className="text-white/80 mt-2">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gold">25+</h3>
                <p className="text-white/80 mt-2">Luxury Vehicles</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gold">50+</h3>
                <p className="text-white/80 mt-2">Destinations</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <AspectRatio ratio={4/3} className="bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1625234900985-e6fcaa52c342?q=80&w=2940&auto=format&fit=crop"
                  alt="Professional chauffeur with luxury car in India"
                  className="w-full h-full object-cover animate-fade-in"
                />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-gold rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
