"use client";

import { useEffect, useState, useRef } from 'react';

export default function ScenicBreak() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset
  const parallaxOffset = scrollY * 0.3;

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))`,
        }}
      >
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e5d7b5d-1eb8-4969-ada7-2997984eadaf.png"
          alt="Breathtaking mountain lake landscape with romantic couple silhouette during golden hour"
          className="w-full h-full object-cover scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = 'var(--sage)';
            target.style.display = 'flex';
            target.style.alignItems = 'center';
            target.style.justifyContent = 'center';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div 
          className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Poetic Text */}
          <blockquote className="space-y-6">
            <p className="heading-serif text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed font-normal">
              "Love is not just something you fall into...
            </p>
            <p className="heading-serif text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed font-normal">
              Love is something you rise to."
            </p>
          </blockquote>

          {/* Attribution */}
          <div 
            className={`mt-12 transform transition-all duration-1500 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="body-large text-white/80 font-light">
              — Your Love Story Awaits —
            </p>
          </div>

          {/* Decorative Elements */}
          <div 
            className={`flex justify-center items-center space-x-8 mt-16 transform transition-all duration-1500 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="w-16 h-px bg-white/40"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-16 h-px bg-white/40"></div>
          </div>

          {/* Call to Action */}
          <div 
            className={`mt-12 transform transition-all duration-1500 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full 
                       hover:bg-white/30 hover:scale-105 transition-all duration-300
                       border border-white/20 hover:border-white/40 font-medium"
            >
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div 
        className={`absolute top-20 left-20 transform transition-all duration-2000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-60' : '-translate-y-8 opacity-0'
        }`}
      >
        <div className="w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div 
        className={`absolute bottom-32 right-24 transform transition-all duration-2000 delay-1300 ${
          isVisible ? 'translate-y-0 opacity-40' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="w-16 h-16 border border-white/15 rounded-full"></div>
      </div>

      <div 
        className={`absolute top-1/3 right-16 transform transition-all duration-2000 delay-1500 ${
          isVisible ? 'translate-y-0 opacity-30' : '-translate-y-8 opacity-0'
        }`}
      >
        <div className="w-12 h-12 border border-white/10 rounded-full"></div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className={`flex flex-col items-center space-y-2 cursor-pointer group transform transition-all duration-1500 delay-1700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          onClick={() => {
            const element = document.getElementById('testimonials');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">Continue</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white/80 transition-colors"></div>
          </div>
        </div>
      </div>

      {/* Subtle Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        <div 
          className={`absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full transform transition-all duration-3000 ${
            isVisible ? 'translate-y-0 opacity-100 animate-bounce' : 'translate-y-16 opacity-0'
          }`}
        ></div>
        
        <div 
          className={`absolute top-3/4 right-1/3 w-1 h-1 bg-white/20 rounded-full transform transition-all duration-3000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100 animate-pulse' : 'translate-y-16 opacity-0'
          }`}
        ></div>
      </div>


    </section>
  );
}