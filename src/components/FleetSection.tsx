import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Bus, Airplay, Globe } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const vehicles = [
  {
    name: "Executive Sedan",
    icon: Car,
    description: "Luxury sedan perfect for business travel and airport transfers. Comfortable seating for up to 3 passengers.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Premium SUV",
    icon: Car,
    description: "Spacious SUVs ideal for small groups and families. Comfortable seating for up to 6 passengers with luggage.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Luxury Coach",
    icon: Bus,
    description: "High-end coaches for large groups. Modern amenities with seating for up to 50 passengers.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Heritage Tours",
    icon: Globe,
    description: "Exclusive guided tours to India's most iconic landmarks with premium transportation and expert guides.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600"
  }
];

const VehicleCard = ({ vehicle, index }) => (
  <Card 
    key={index} 
    className="vehicle-card border-none overflow-hidden bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group h-full"
  >
    <div className="h-56 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      <img 
        src={vehicle.image} 
        alt={vehicle.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <CardContent className="p-6 relative">
      <div className="absolute -top-7 left-6 bg-gold rounded-full p-3 shadow-lg">
        <vehicle.icon className="h-6 w-6 text-white" />
      </div>
      <div className="pt-4">
        <h3 className="font-semibold text-xl text-navy mb-3">{vehicle.name}</h3>
        <p className="text-charcoal/80 mb-5 leading-relaxed">
          {vehicle.description}
        </p>
        <Button 
          variant="outline" 
          className="w-full border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
        >
          Learn More
        </Button>
      </div>
    </CardContent>
  </Card>
);

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-lightgray to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading text-center">Our Premium Fleet</h2>
          <p className="section-subheading text-center">
            Discover our range of luxury vehicles available for your transportation needs across India
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
              {vehicles.map((vehicle, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full">
                    <VehicleCard vehicle={vehicle} index={index} />
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
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-14">
          <Button 
            className="bg-navy hover:bg-navy/90 text-white px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            View Our Complete Fleet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
