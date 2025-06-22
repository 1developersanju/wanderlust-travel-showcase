import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Lee Travels</h2>
            <p className="text-white/70 max-w-md">Your trusted travel partner across South India</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#fleet" className="text-white/70 hover:text-white transition-colors duration-300">Our Fleet</a>
              </li>
              <li>
                <a href="#packages" className="text-white/70 hover:text-white transition-colors duration-300">Packages</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300">Contact</a>
              </li>
              <li>
                <a href="/admin" className="text-white/70 hover:text-white transition-colors duration-300">Admin</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-white/70">Tour Packages</li>
              <li className="text-white/70">Marriage Events</li>
              <li className="text-white/70">Business Travel</li>
              <li className="text-white/70">Student Tours</li>
              <li className="text-white/70">Hotel Bookings</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-white/70">
                  Lee Travels<br />
                  South India
                </p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-white/70">+91 98765 43210</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <span className="text-white/70">contact@leetravels.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">
            &copy; {new Date().getFullYear()} Lee Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
