import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: 'Fleet', href: '#fleet', isRoute: false },
  { name: 'Services', href: '#services', isRoute: false },
  { name: 'About', href: '#about', isRoute: false },
  { name: 'Gallery', href: '/gallery', isRoute: true },
  { name: 'Contact', href: '#contact', isRoute: false },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item: typeof navigation[0]) => {
    if (item.isRoute) {
      // For route navigation, React Router will handle it
      return;
    } else {
      // For section navigation, check if we're on the home page
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first, then scroll to section
        navigate('/');
        // Use setTimeout to ensure navigation completes before scrolling
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If on home page, scroll to section
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Lee Travels
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-primary' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-primary' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              )
            ))}
            <a 
              href="https://wa.me/+917373555444" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className={`${
                  isScrolled 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-white hover:bg-white/90 text-primary'
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Inquire Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? 'text-primary' : 'text-white'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
              {navigation.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavigation(item);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="px-3 py-2">
                <a 
                  href="https://wa.me/+917373555444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Inquire Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
