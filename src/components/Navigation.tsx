"use client";

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/20 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">EM</span>
            </div>
            <span className="heading-serif text-xl font-semibold text-charcoal">
              Eternal Moments
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-grey hover:text-sage transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-muted-grey hover:text-sage transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-muted-grey hover:text-sage transition-colors duration-300 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-muted-grey hover:text-sage transition-colors duration-300 font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Book Now
            </button>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+74951234567" 
              className="text-sage hover:text-charcoal transition-colors duration-300 font-medium"
            >
              +7 (495) 123-45-67
            </a>
            <span className="text-muted-grey">|</span>
            <a 
              href="mailto:info@eternalmoments.ru" 
              className="text-sage hover:text-charcoal transition-colors duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sage/10 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span 
                className={`h-0.5 bg-sage transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'w-6'
                }`}
              />
              <span 
                className={`h-0.5 bg-sage transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'w-6'
                }`}
              />
              <span 
                className={`h-0.5 bg-sage transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'w-6'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-6' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-sage/20">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-muted-grey hover:text-sage transition-colors duration-300 font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left text-muted-grey hover:text-sage transition-colors duration-300 font-medium py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left text-muted-grey hover:text-sage transition-colors duration-300 font-medium py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-muted-grey hover:text-sage transition-colors duration-300 font-medium py-2"
            >
              Reviews
            </button>
            <div className="pt-2 border-t border-sage/10">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full"
              >
                Book Now
              </button>
            </div>
            <div className="flex flex-col space-y-2 pt-2">
              <a 
                href="tel:+74951234567" 
                className="text-sage hover:text-charcoal transition-colors duration-300 font-medium"
              >
                +7 (495) 123-45-67
              </a>
              <a 
                href="mailto:info@eternalmoments.ru" 
                className="text-sage hover:text-charcoal transition-colors duration-300 font-medium"
              >
                info@eternalmoments.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}