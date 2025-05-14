
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Airplay, Car, Map, Briefcase, Globe, Compass } from "lucide-react";

const services = [
  {
    title: "Airport Transfers",
    description: "Reliable airport pick-ups and drop-offs at all major Indian airports with flight monitoring and wait time included.",
    icon: Airplay
  },
  {
    title: "Corporate Travel",
    description: "Dependable transportation solutions for business professionals and executives traveling across India's business hubs.",
    icon: Briefcase
  },
  {
    title: "Wedding Transportation",
    description: "Make your Indian wedding celebrations memorable with our decorated luxury transportation services.",
    icon: Car
  },
  {
    title: "Heritage Tours",
    description: "Explore India's incredible monuments and attractions with knowledgeable chauffeurs and customized itineraries.",
    icon: Map
  },
  {
    title: "Pan-India Travel",
    description: "Comfortable transportation between major Indian cities with experienced professional drivers.",
    icon: Globe
  },
  {
    title: "Pilgrimage Journeys",
    description: "Safe and comfortable transportation for spiritual journeys to India's sacred sites and temples.",
    icon: Compass
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Our Premium Services</h2>
        <p className="section-subheading text-center">
          We offer a wide range of transportation solutions tailored to meet your specific needs across India
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="rounded-full bg-gold/10 p-6 mb-6">
                  <service.icon className="h-10 w-10 text-gold" />
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
