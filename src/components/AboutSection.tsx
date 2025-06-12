import React from 'react';
import { Check } from "lucide-react";

const features = [
  "Professional and experienced drivers",
  "Well-maintained vehicle fleet",
  "Customized travel packages",
  "24/7 customer support",
  "Comfortable and safe journey",
  "Affordable pricing"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
                alt="Lee Travels fleet"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl md:flex hidden">
              <div className="text-center px-4">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm mt-1">Years Experience</p>
              </div>
              <div className="border-l border-white/20 text-center px-4">
                <p className="text-4xl font-bold">1000+</p>
                <p className="text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:pl-12">
            <h2 className="section-heading mb-6 text-left">Your Trusted Travel Partner in South India</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience in the travel industry across South India, Lee Travels has established itself as a reliable and customer-focused transportation service provider. We take pride in offering comfortable, safe, and affordable travel solutions for all your needs - from tour packages to business travel, and from wedding events to student tours.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced drivers knows every corner of South India, ensuring you have a smooth and pleasant journey. We maintain our vehicles regularly to provide you with a comfortable and safe travel experience, all while keeping our services affordable and accessible.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-full p-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Mobile Stats (visible on mobile only) */}
            <div className="grid grid-cols-2 gap-4 mt-12 md:hidden">
              <div className="bg-primary text-white p-6 rounded-xl text-center">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm mt-1">Years Experience</p>
              </div>
              <div className="bg-primary text-white p-6 rounded-xl text-center">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-muted-foreground">
              Our customer support team is available round the clock to assist you with any queries or requirements.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Safe Travel</h3>
            <p className="text-muted-foreground">
              Your safety is our priority. All our vehicles are regularly maintained and equipped with safety features.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Best Rates</h3>
            <p className="text-muted-foreground">
              We offer competitive and transparent pricing with no hidden charges for all our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
