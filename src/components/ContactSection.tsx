import React, { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Inquiry from Website*%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Service Required:* ${formData.service}%0A
*Message:* ${formData.message}`;
    
    // Use India's country code (+91) and replace with your actual WhatsApp number
    const whatsappNumber = '919981234567'; // Replace with your actual number (91 + your number without +)
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-lightgray to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-navy/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading text-center">Get In Touch</h2>
          <p className="section-subheading text-center">
            Contact us for inquiries, bookings, or customized luxury transportation solutions across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold text-navy mb-6">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name" 
                    className="w-full border-gray-200 focus:border-gold focus:ring-gold/30"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address" 
                    className="w-full border-gray-200 focus:border-gold focus:ring-gold/30"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                  Service Required
                </label>
                <select 
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold h-10"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Corporate Travel">Corporate Travel</option>
                  <option value="Wedding Transportation">Wedding Transportation</option>
                  <option value="Heritage Tour">Heritage Tour</option>
                  <option value="Pan-India Travel">Pan-India Travel</option>
                  <option value="Pilgrimage Journey">Pilgrimage Journey</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your transportation needs" 
                  className="w-full min-h-[150px] border-gray-200 focus:border-gold focus:ring-gold/30"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-white py-6 rounded-md shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Send Message via WhatsApp
              </Button>
            </form>
          </div>
          
          <div className="lg:col-span-2 flex flex-col space-y-8">
            <div className="h-56 sm:h-72 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.1909761!3d28.5269212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fec0f0f10d%3A0xb5471bf56102101a!2sLuxury%20Car%20Rental%20Delhi!5e0!3m2!1sen!2sin!4v1641832404403!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex-grow">
              <h3 className="text-2xl font-semibold text-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Our Location</h4>
                    <p className="text-charcoal/70">123 Luxury Avenue, Suite 400<br />New Delhi, 110001, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Phone</h4>
                    <p className="text-charcoal/70">+91 (998) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Email</h4>
                    <p className="text-charcoal/70">info@luxtravel.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-navy/5 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy mb-1">Business Hours</h4>
                    <p className="text-charcoal/70">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
