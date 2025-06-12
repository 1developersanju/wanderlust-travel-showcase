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

const packages = [
  {
    name: "Tour Package",
    icon: Plane,
    description: "Comprehensive tour packages covering popular destinations with comfortable transportation and accommodation.",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Marriage Package",
    icon: Church,
    description: "Special transportation arrangements for weddings, including guest pickup and venue transfers.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Business Package",
    icon: Briefcase,
    description: "Professional transportation solutions for corporate events and business travel needs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Honeymoon Package",
    icon: Heart,
    description: "Romantic getaway packages with luxury transportation and carefully planned itineraries.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Student IV Package",
    icon: GraduationCap,
    description: "Educational tour packages designed specifically for student groups and institutions.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Drop Package",
    icon: MapPin,
    description: "Reliable point-to-point transfer services for individuals and groups.",
    image: "https://sdmntprwestus2.oaiusercontent.com/files/00000000-948c-61f8-a4e3-59d8f44282df/raw?se=2025-06-12T13%3A48%3A56Z&sp=r&sv=2024-08-04&sr=b&scid=af3ac069-d371-5d80-8ac4-deaf9417b0c9&skoid=864daabb-d06a-46b3-a747-d35075313a83&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-11T20%3A02%3A00Z&ske=2025-06-12T20%3A02%3A00Z&sks=b&skv=2024-08-04&sig=0tVX/RHz4DtSqz21ft7V4MQ1ZgNjMO1DcqoeVxwgrPg%3D"
  },
  {
    name: "Budget Rooms",
    icon: Hotel,
    description: "Affordable accommodation options carefully selected to complement your travel plans.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600"
  }
];

const PackageCard = ({ package: pkg, index }) => (
  <Card 
    key={index} 
    className="package-card border-none overflow-hidden bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 group h-full"
  >
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      <img 
        src={pkg.image} 
        alt={pkg.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <CardContent className="p-6 relative">
      <div className="absolute -top-7 left-6 bg-primary rounded-full p-3 shadow-lg">
        <pkg.icon className="h-6 w-6 text-white" />
      </div>
      <div className="pt-4">
        <h3 className="font-semibold text-xl text-primary mb-3">{pkg.name}</h3>
        <p className="text-muted-foreground mb-5 leading-relaxed">
          {pkg.description}
        </p>
        <a 
          href={`https://wa.me/+917397080671?text=Hi, I'm interested in the ${pkg.name}. Could you please provide more information?`}
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
);

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Premium Services</h2>
          <p className="section-subheading">
            Discover our specially curated packages designed for every travel need
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
              {packages.map((pkg, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/2">
                  <div className="p-1 h-full">
                    <PackageCard package={pkg} index={index} />
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
          {packages.map((pkg, index) => (
            <PackageCard key={index} package={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection; 