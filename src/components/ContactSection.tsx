import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98765 43210",
    link: "tel:+917397080671"
  },
  {
    icon: Mail,
    title: "Email",
    details: "contact@leetravels.com",
    link: "mailto:contact@leetravels.com"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Coimbatore, Tamil Nadu",
    link: "https://goo.gl/maps/maps/place/Coimbatore,+Tamil+Nadu/@11.0141263,76.8848337"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "24/7 Available",
    link: "#"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">
            Contact us for inquiries about our travel services and packages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={info.link}
                      className="flex items-start space-x-4"
                      target={info.icon === Mail ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.details}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Quick Inquiry</h3>
              <p className="text-muted-foreground mb-8">
                Get instant responses through WhatsApp for any queries about our services.
              </p>
              <a 
                href="https://wa.me/+917397080671?text=Hi, I would like to know more about your travel services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7376535397517!2d76.99062937460235!3d11.078505089111744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7f3acac092f%3A0x9947b0b9b7dd3baf!2sSaravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1707297198403!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lee Travels Office Location"
                className="rounded-2xl"
              ></iframe>
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-primary mb-2">Visit Our Office</h3>
                  <p className="text-sm text-muted-foreground">
                    📍 Coimbatore, Tamil Nadu - Your trusted travel partner in South India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-24 text-center">
          <Card className="border-none shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Operating Hours</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/5">
                  <h4 className="font-medium mb-2">Weekdays</h4>
                  <p className="text-muted-foreground">24/7 Available</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5">
                  <h4 className="font-medium mb-2">Weekends</h4>
                  <p className="text-muted-foreground">24/7 Available</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">
                Our customer support team is available round the clock to assist you
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
