import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Heart, 
  Briefcase, 
  GraduationCap, 
  MapPin,
  Hotel,
  Church,
  MessageCircle
} from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import CardAnimation from "@/components/ui/card-animation";

const services = [
  {
    name: "Tour Service",
    icon: Plane,
    description: "Comprehensive tour services covering popular destinations with comfortable transportation and accommodation.",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Marriage Service",
    icon: Church,
    description: "Special transportation arrangements for weddings, including guest pickup and venue transfers.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Business Service",
    icon: Briefcase,
    description: "Professional transportation solutions for corporate events and business travel needs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Honeymoon Service",
    icon: Heart,
    description: "Romantic getaway services with luxury transportation and carefully planned itineraries.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Student IV Service",
    icon: GraduationCap,
    description: "Educational tour services designed specifically for student groups and institutions.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Drop Service",
    icon: MapPin,
    description: "Reliable point-to-point transfer services for individuals and groups.",
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1561395089/assets/12/a248b8-4254-400e-89e0-72dadb20acb8/original/DE2.6.1.jpg"
  },
  {
    name: "Budget Rooms",
    icon: Hotel,
    description: "Affordable accommodation options carefully selected to complement your travel plans.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600"
  }
];

const ServiceCard = ({ service, index }) => (
  <CardAnimation index={index}>
    <Card 
      key={index} 
      className="service-card border-none overflow-hidden bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 relative">
        <div className="absolute -top-7 left-6 bg-primary rounded-full p-3 shadow-lg">
          <service.icon className="h-6 w-6 text-white" />
        </div>
        <div className="pt-4">
          <h3 className="font-semibold text-xl text-primary mb-3">{service.name}</h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            {service.description}
          </p>
          <a 
            href={`https://wa.me/+917373555444?text=Hi, I'm interested in the ${service.name}. Could you please provide more information?`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button 
              variant="outline" 
              className="w-full border-primary text-black hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Inquire via WhatsApp
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  </CardAnimation>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Premium Services</h2>
          <p className="section-subheading">
            Discover our specially curated services designed for every travel need
          </p>
        </div>
        
        {/* Mobile Carousel (visible on small and medium screens) */}
        <div className="lg:hidden mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2">
                  <div className="p-1 h-full">
                    <ServiceCard service={service} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static mx-2 bg-white border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" />
              <CarouselNext className="static mx-2 bg-white border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop Grid (hidden on small and medium screens) */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
