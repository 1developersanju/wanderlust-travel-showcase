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
    rating: 5
  },
  {
    name: "Priya Sharma",
    position: "Event Manager",
    quote: "We've used their services for multiple corporate events across Delhi, Mumbai and Bangalore, and they've never disappointed. Their fleet is exceptional, and their staff is always punctual and courteous.",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5
  },
  {
    name: "Arjun Singh",
    position: "Frequent Traveler",
    quote: "As someone who travels regularly throughout India, I appreciate their reliability and consistency. The online booking process is seamless, and the quality of service is always top-notch.",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 4
  },
  {
    name: "Aisha Patel",
    position: "Wedding Planner",
    quote: "I've recommended this transportation service to all my clients for wedding events. They understand the importance of timing and presentation, making them perfect for special occasions.",
    avatar: "https://i.pravatar.cc/100?img=9",
    rating: 5
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-lightgray relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="section-heading text-center">Client Testimonials</h2>
          <p className="section-subheading text-center">
            What our valued clients say about our luxury transportation services
          </p>
        </div>
        
        <div className="mt-12 px-4 md:px-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6">
                  <div className="h-full">
                    <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-500 h-full rounded-xl overflow-hidden group hover:-translate-y-2">
                      <CardContent className="p-0">
                        <div className="p-8 pb-6 relative">
                          {/* Quote Icon */}
                          <div className="absolute -top-4 -left-4 opacity-10 text-navy">
                            <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                          
                          <div className="relative">
                            <p className="text-charcoal/80 italic leading-relaxed text-lg mb-8">
                              "{testimonial.quote}"
                            </p>
                          </div>
                          
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold' : 'text-gray-300'}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        
                        {/* Profile Section with Gold Background */}
                        <div className="bg-gradient-to-r from-gold/90 to-gold p-6 flex items-center transition-all duration-300 group-hover:from-gold group-hover:to-gold/90">
                          <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-white/50 shadow-lg">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-white text-lg">{testimonial.name}</h4>
                            <p className="text-white/80 text-sm">{testimonial.position}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2 bg-white/90 border-none shadow-lg hover:bg-gold hover:text-white transition-all duration-300" />
              <CarouselNext className="right-2 bg-white/90 border-none shadow-lg hover:bg-gold hover:text-white transition-all duration-300" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-light text-navy/80 italic max-w-2xl mx-auto">
            "We take pride in delivering unparalleled luxury transportation experiences across India."
          </p>
          <div className="mt-6">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-navy text-white rounded-md hover:bg-navy/90 transition-all duration-300 shadow-lg hover:shadow-navy/30 hover:-translate-y-1"
            >
              Book Your Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
