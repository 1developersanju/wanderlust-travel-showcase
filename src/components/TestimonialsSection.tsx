
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rajiv Mehta",
    position: "CEO, Global Enterprises",
    quote: "The service provided by this travel agency exceeded all my expectations. The chauffeurs are professional, the vehicles are immaculate, and the attention to detail is impressive.",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Priya Sharma",
    position: "Event Manager",
    quote: "We've used their services for multiple corporate events across Delhi, Mumbai and Bangalore, and they've never disappointed. Their fleet is exceptional, and their staff is always punctual and courteous.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Arjun Singh",
    position: "Frequent Traveler",
    quote: "As someone who travels regularly throughout India, I appreciate their reliability and consistency. The online booking process is seamless, and the quality of service is always top-notch.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Aisha Patel",
    position: "Wedding Planner",
    quote: "I've recommended this transportation service to all my clients for wedding events. They understand the importance of timing and presentation, making them perfect for special occasions.",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Client Testimonials</h2>
        <p className="section-subheading text-center">
          What our valued clients say about our services
        </p>
        
        <div className="mt-12 px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-gold">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-navy">{testimonial.name}</h4>
                          <p className="text-charcoal/70 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <svg className="h-8 w-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-charcoal/80 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
