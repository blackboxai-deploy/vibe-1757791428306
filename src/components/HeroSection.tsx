"use client";

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Split Layout Container */}
      <div className="w-full h-screen flex flex-col lg:flex-row">
        
        {/* Left Panel - Sage Background with Content */}
        <div 
          className={`lg:w-1/2 w-full h-1/2 lg:h-full relative overflow-hidden transition-all duration-600 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
          style={{ backgroundColor: 'var(--sage)' }}
        >
          <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-16">
            <div className="max-w-lg mx-auto lg:mx-0">
              
              {/* Heading with Line-by-Line Animation */}
              <div className="mb-8">
                <h1 className="heading-serif heading-1 text-white leading-tight">
                  <div 
                    className={`transform transition-all duration-800 delay-300 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    Wedding Planning
                  </div>
                  <div 
                    className={`transform transition-all duration-800 delay-500 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                  >
                    in Moscow
                  </div>
                </h1>
              </div>

              {/* Description */}
              <div 
                className={`mb-10 transform transition-all duration-800 delay-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p className="body-large text-white/90 leading-relaxed">
                  Creating unforgettable moments with elegant sophistication. 
                  From intimate ceremonies to grand celebrations, we bring your 
                  dream wedding to life in Moscow's most beautiful venues.
                </p>
              </div>

              {/* CTA Button with Spring Animation */}
              <div 
                className={`transform transition-all duration-1000 delay-900 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-sage px-8 py-4 rounded-xl font-semibold text-lg 
                           hover:bg-white/95 hover:transform hover:scale-105 hover:shadow-xl
                           transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Book Your Dream Wedding</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-8 left-8 lg:left-16 opacity-20">
            <div className="w-20 h-20 border border-white/30 rounded-full"></div>
            <div className="w-12 h-12 border border-white/30 rounded-full mt-4 ml-8"></div>
          </div>
        </div>

        {/* Right Panel - Hero Image */}
        <div 
          className={`lg:w-1/2 w-full h-1/2 lg:h-full relative overflow-hidden transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd3dfb4a-cf0a-4ea3-a58a-082dc366dfa9.png"
              alt="Romantic couple dancing outdoors in elegant wedding attire during golden hour"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = 'var(--light-sage)';
                target.style.display = 'flex';
                target.style.alignItems = 'center';
                target.style.justifyContent = 'center';
                target.innerHTML = '<span style="color: white; font-size: 1.2rem;">Beautiful Wedding Moment</span>';
              }}
            />
            
            {/* Gradient Overlay for better text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden"></div>
          </div>

          {/* Floating Elements */}
          <div 
            className={`absolute top-8 right-8 transform transition-all duration-1000 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-sage font-semibold text-sm">8+ Years</div>
              <div className="text-charcoal text-xs">Experience</div>
            </div>
          </div>

          <div 
            className={`absolute bottom-12 right-8 transform transition-all duration-1000 delay-1300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-sage font-semibold text-sm">100+</div>
              <div className="text-charcoal text-xs">Happy Couples</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-2 cursor-pointer group"
             onClick={() => scrollToSection('about')}>
          <span className="text-sm text-sage group-hover:text-charcoal transition-colors">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-sage rounded-full flex justify-center group-hover:border-charcoal transition-colors">
            <div className="w-1 h-3 bg-sage rounded-full mt-2 animate-bounce group-hover:bg-charcoal transition-colors"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute -top-4 -right-4 w-64 h-64 bg-sage rounded-full"></div>
        <div className="absolute bottom-20 -left-4 w-32 h-32 bg-light-sage rounded-full"></div>
      </div>
    </section>
  );
}