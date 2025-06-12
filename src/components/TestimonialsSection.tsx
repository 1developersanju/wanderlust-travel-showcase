import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya ",
    role: "Wedding Client",
    content: "Lee Travels made our wedding transportation hassle-free. Their team was punctual, professional, and ensured all our guests reached the venue comfortably.",
    image: "https://media.istockphoto.com/id/1254176393/photo/portrait-of-a-happy-woman-of-indian-ethnicity.jpg?s=2048x2048&w=is&k=20&c=OhAXG2Gn8pnFuY0a34DzYezhVTHoshdQmBBUQBhIUmw="
  },
  {
    name: "Arjun ",
    role: "Business Traveler",
    content: "Regular business trips across South India are now stress-free thanks to Lee Travels. Their drivers are knowledgeable and the vehicles are always well-maintained.",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Dr. Kavitha",
    role: "College Principal",
    content: "Our college regularly uses Lee Travels for student tours. They provide safe, reliable, and affordable transportation solutions that meet our requirements perfectly.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Our Clients Say</h2>
          <p className="section-subheading">
            Hear from our valued customers about their experiences with Lee Travels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "We take pride in delivering reliable and comfortable transportation experiences across South India."
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">1000+</p>
              <p className="text-muted-foreground mt-2">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground mt-2">Vehicles</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="text-muted-foreground mt-2">Destinations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
