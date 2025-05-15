import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Landmark, Calendar, UserPlus, Car, Shield, MapPin, Clock, Headphones } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const services = [
  {
    title: "Wedding Transportation",
    description: "Make your special day memorable with our luxury wedding transportation services, ensuring you and your guests arrive in style.",
    icon: <Calendar className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Corporate Travel",
    description: "Impress your clients and provide executives with reliable, premium transportation for meetings, airport transfers, and events.",
    icon: <UserPlus className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Airport Transfers",
    description: "Start and end your journey with comfort and reliability. Our chauffeurs track flights and ensure timely pickups and drop-offs.",
    icon: <Car className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1593280405106-e438ebe54abf?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Luxury Tours",
    description: "Explore India's most breathtaking destinations with our curated luxury tours, combining scenic routes with cultural experiences.",
    icon: <Landmark className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Security Services",
    description: "Travel with peace of mind with our trained security personnel, offering protection for high-profile clients and special events.",
    icon: <Shield className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1521791055366-0d553381ad47?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "City-to-City Travel",
    description: "Experience comfortable and luxurious intercity travel with our premium fleet, perfect for both business and leisure journeys.",
    icon: <MapPin className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1592853598595-ef0278025bf2?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "24/7 Availability",
    description: "Our services are available round the clock, ensuring you have access to premium transportation whenever you need it.",
    icon: <Clock className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1551267881-f198ba4aba07?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Dedicated Support",
    description: "Our concierge team provides personalized attention to your transportation needs, offering seamless service coordination.",
    icon: <Headphones className="h-8 w-8 text-white" />,
    bgImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600"
  }
];

const ServiceCard = ({ service, index }) => (
  <Card 
    key={index} 
    className="service-card border-none overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group h-full"
  >
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent group-hover:from-navy/80 transition-all duration-500 z-10"></div>
      <img 
        src={service.bgImage} 
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-gold rounded-full p-3 shadow-lg inline-block">
          {service.icon}
        </div>
        <h3 className="font-bold text-xl text-white ml-2 inline-block align-middle">
          {service.title}
        </h3>
      </div>
    </div>
    <CardContent className="p-5">
      <p className="text-charcoal/80 mb-5 leading-relaxed">
        {service.description}
      </p>
      <Button 
        variant="outline" 
        className="w-full border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
      >
        Learn More
      </Button>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-lightgray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-center">Our Premium Services</h2>
          <p className="section-subheading text-center">
            Experience luxury transportation tailored to your specific needs across India
          </p>
        </div>
        
        {/* Mobile Carousel (visible on small screens) */}
        <div className="md:hidden mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full">
                    <ServiceCard service={service} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static mx-2 bg-white border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300" />
              <CarouselNext className="static mx-2 bg-white border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop Grid (hidden on small screens) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-14">
          <Button 
            className="bg-navy hover:bg-navy/90 text-white px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Request Custom Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
