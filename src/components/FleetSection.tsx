
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Bus, Ship, Airplay } from "lucide-react";

const vehicles = [
  {
    name: "Executive Sedan",
    icon: Car,
    description: "Luxury sedan perfect for business travel and airport transfers. Comfortable seating for up to 3 passengers.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Premium SUV",
    icon: Car,
    description: "Spacious SUVs ideal for small groups and families. Comfortable seating for up to 6 passengers with luggage.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Luxury Coach",
    icon: Bus,
    description: "High-end coaches for large groups. Modern amenities with seating for up to 50 passengers.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "VIP Travel Options",
    icon: Airplay,
    description: "Premium charter services for discerning clients. Private jets and yacht arrangements available.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80&w=600"
  }
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Our Premium Fleet</h2>
        <p className="section-subheading text-center">
          Discover our range of luxury vehicles available for your transportation needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="vehicle-card border-none overflow-hidden bg-white">
              <div className="h-48 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <vehicle.icon className="h-5 w-5 text-gold" />
                  <h3 className="font-semibold text-xl text-navy">{vehicle.name}</h3>
                </div>
                <p className="text-charcoal/80 mb-4">
                  {vehicle.description}
                </p>
                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
