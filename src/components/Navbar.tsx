import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className={`font-bold text-2xl transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}>
            <span className="text-gold">Lux</span>Travel
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Fleet', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`${
                scrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'
              } transition-colors duration-300 font-medium relative group`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button 
            variant="outline" 
            className={`border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-sm ${
              scrolled ? 'hover:shadow-gold/20' : 'hover:shadow-gold/40'
            }`}
          >
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 transition-colors duration-300 ${scrolled ? 'text-navy' : 'text-white'}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg py-6 px-4 absolute w-full animate-fade-in border-t border-gold/10">
          <nav className="flex flex-col space-y-5">
            {['Home', 'Fleet', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-navy hover:text-gold transition-colors duration-300 font-medium pl-2 border-l-2 border-transparent hover:border-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white w-full mt-4 transition-all duration-300">
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
