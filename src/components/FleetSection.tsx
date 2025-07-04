import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Bus, Truck, Train } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import CardAnimation from "@/components/ui/card-animation";

const vehicles = [
  {
    name: "Cars",
    icon: Car,
    description: "Comfortable sedans for up to four people, perfect for small groups and families.",
    image: "https://www.welcometocovaicalltaxi.com/taxi/images/taxi-service-in-coimbatore.png"
  },
  {
    name: "XUV",
    icon: Car,
    description: "Spacious Xylo and Innova vehicles accommodating 7-8 passengers with luggage.",
    image: "https://auto.economictimes.indiatimes.com/files/retail_files/xuv-500-1665038162-prod-var.jpg"
  },
  {
    name: "Tempo Traveller",
    icon: Truck,
    description: "14-seater tempo traveller, ideal for medium-sized groups and tours.",
    image: "https://content.jdmagicbox.com/comp/coimbatore/s3/0422px422.x422.201103084015.n8s3/catalogue/garuda-travels-mettupalayam-coimbatore-tempo-travellers-on-hire-qxexal9p2v.jpg"
  },
  {
    name: "Coach Van",
    icon: Bus,
    description: "21-seater coach van perfect for corporate events and group tours.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "30-Seater Bus",
    icon: Bus,
    description: "Standard 30-seater bus for larger groups and events.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "AC Bus - 45 Seater",
    icon: Bus,
    description: "Luxury air-conditioned 45-seater bus for comfortable long-distance travel.",
    image: "https://s.alicdn.com/@sc04/kf/Hb64a2c314dd54f438262f3b0ab2e24abm.jpg"
  },
  {
    name: "54-Seater Bus",
    icon: Bus,
    description: "Large capacity 54-seater bus perfect for big groups and events.",
    image: "https://content.jdmagicbox.com/comp/gwalior/w1/9999px751.x751.170323184304.i8w1/catalogue/all-india-tour-and-travel-city-centre-gwalior-bus-services-uosg5.jpeg"
  },
  {
    name: "Train Station Pickup",
    icon: Train,
    description: "Reliable pickup service from train stations across South India.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/10/458336660/WI/FN/TG/223680536/pickup-dropping-service-250x250.jpg"
  }
];

const VehicleCard = ({ vehicle, index }) => (
  <CardAnimation index={index}>
    <Card 
      key={index} 
      className="vehicle-card border-none overflow-hidden bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group h-full"
    >
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6 relative">
        <div className="absolute -top-7 left-6 bg-primary rounded-full p-3 shadow-lg">
          <vehicle.icon className="h-6 w-6 text-white" />
        </div>
        <div className="pt-4">
          <h3 className="font-semibold text-xl text-primary mb-3">{vehicle.name}</h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            {vehicle.description}
          </p>
          <a 
            href={`https://wa.me/+917373555444?text=Hi, I'm interested in booking the ${vehicle.name} for my travel. Could you please provide pricing and availability details?`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button 
              variant="outline" 
              className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              Book Now
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  </CardAnimation>
);

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Fleet</h2>
          <p className="section-subheading">
            Discover our diverse range of vehicles for all your travel needs
          </p>
        </div>
        
        {/* Mobile Carousel (visible on small screens) */}
        <div className="lg:hidden mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {vehicles.map((vehicle, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                  <div className="p-1 h-full">
                    <VehicleCard vehicle={vehicle} index={index} />
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
        
        {/* Desktop Grid (hidden on small screens) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mt-12">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
