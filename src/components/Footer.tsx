import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Lee Travels</h2>
            <p className="text-white/70 max-w-md">Your trusted travel partner across South India</p>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Routes</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Pondicherry</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Rameswaram</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Salem</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Thekkady</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Tirupati</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Wayanad</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Valparai</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Yercaud</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Trichy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Trivandrum</a>
              </li>
            </ul>
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
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300">Services</a>
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

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-white/70 break-words leading-relaxed">
                  1042, cycle mansion, 5th street<br />
                  Near Ganapathi silks<br />
                  Gandhipuram, Cbe 12
                </p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-white/70">+91 73735 55444</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-white/70 break-words leading-relaxed">praveen.leetravels@gmail.com</p>
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
