
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Contact Us</h2>
        <p className="section-subheading text-center">
          Get in touch with us for inquiries, bookings, or customized transportation solutions
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                    Full Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your full name" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  placeholder="Your phone number" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy mb-1">
                  Service Required
                </label>
                <select 
                  id="service" 
                  className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="corporate">Corporate Travel</option>
                  <option value="special">Special Event</option>
                  <option value="tour">City Tour</option>
                  <option value="intercity">Intercity Travel</option>
                  <option value="cruise">Cruise Transfer</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your transportation needs" 
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="h-64 bg-lightgray rounded-lg mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30599092376!2d-74.25986377504756!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1641831404403!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-navy mb-2">Our Location</h3>
                <p className="text-charcoal/80">123 Luxury Avenue, Suite 400<br />New York, NY 10001</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-navy mb-2">Contact Information</h3>
                <p className="text-charcoal/80">Email: info@luxtravel.com<br />Phone: +1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-navy mb-2">Business Hours</h3>
                <p className="text-charcoal/80">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
