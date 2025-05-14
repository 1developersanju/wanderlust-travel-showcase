
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Airplane, Car, Map, Briefcase, Globe, Ship } from "lucide-react";

const services = [
  {
    title: "Airport Transfers",
    description: "Reliable airport pick-ups and drop-offs with flight monitoring and wait time included.",
    icon: Airplane
  },
  {
    title: "Corporate Travel",
    description: "Dependable transportation solutions for business professionals and executives.",
    icon: Briefcase
  },
  {
    title: "Special Events",
    description: "Make your special occasions memorable with our luxury transportation services.",
    icon: Car
  },
  {
    title: "City Tours",
    description: "Explore city attractions with knowledgeable chauffeurs and customized itineraries.",
    icon: Map
  },
  {
    title: "Intercity Travel",
    description: "Comfortable transportation between cities with experienced professional drivers.",
    icon: Globe
  },
  {
    title: "Cruise Transfers",
    description: "Seamless transportation to and from cruise ports with luggage assistance.",
    icon: Ship
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Our Premium Services</h2>
        <p className="section-subheading text-center">
          We offer a wide range of transportation solutions tailored to meet your specific needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-navy/5 p-4 mb-4">
                  <service.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-semibold text-xl text-navy mb-3">{service.title}</h3>
                <p className="text-charcoal/80">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
