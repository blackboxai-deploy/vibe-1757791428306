"use client";

import { useEffect, useState, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    weddings: 0,
    years: 0,
    partners: 0,
    timeSaved: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) {
            animateCounters();
            setHasAnimated(true);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { weddings: 100, years: 8, partners: 20, timeSaved: 30 };
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        weddings: Math.floor(targets.weddings * easeOut),
        years: Math.floor(targets.years * easeOut),
        partners: Math.floor(targets.partners * easeOut),
        timeSaved: Math.floor(targets.timeSaved * easeOut)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="section-spacing"
      style={{ backgroundColor: 'var(--warm-linen)' }}
    >
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className={`heading-serif heading-2 mb-6 transform transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Creating Perfect Moments Since 2016
          </h2>
          <p 
            className={`body-large max-w-2xl mx-auto transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            We believe every love story deserves a perfect beginning. Our passion for creating 
            unforgettable weddings has made us Moscow's trusted wedding planning experts.
          </p>
        </div>

        {/* Three Cards Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1 - Bouquet Image */}
          <div 
            className={`card-soft transform transition-all duration-800 delay-300 stagger-1 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="aspect-[4/3] mb-6 rounded-xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16ec5dea-876d-407a-a37b-e2143d3aacf0.png"
                alt="Elegant bridal bouquet with white roses and greenery in soft natural lighting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = 'var(--light-sage)';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                }}
              />
            </div>
            <h3 className="heading-serif heading-4 mb-4">Floral Perfection</h3>
            <p className="body-medium">
              From delicate boutonnieres to stunning centerpieces, our floral designs 
              capture the essence of your love story with natural elegance and seasonal beauty.
            </p>
          </div>

          {/* Card 2 - Team Photo */}
          <div 
            className={`card-soft transform transition-all duration-800 delay-500 stagger-2 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="aspect-[4/3] mb-6 rounded-xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e7bb464-7396-47af-86ae-79f2fe5744a9.png"
                alt="Professional wedding planning team in elegant office setting with warm lighting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = 'var(--light-sage)';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                }}
              />
            </div>
            <h3 className="heading-serif heading-4 mb-4">Expert Team</h3>
            <p className="body-medium">
              Our experienced team of wedding planners, coordinators, and designers work 
              together to ensure every detail is perfectly executed on your special day.
            </p>
          </div>

          {/* Card 3 - Text Content */}
          <div 
            className={`card-soft transform transition-all duration-800 delay-700 stagger-3 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <h3 className="heading-serif heading-4 mb-6">Why Choose Eternal Moments?</h3>
            
            <p className="body-medium mb-6">
              With over 8 years of experience planning weddings across Moscow, 
              we understand that your wedding day should be as unique as your love story.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium">Personalized planning tailored to your vision</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium">Exclusive partnerships with Moscow's finest venues</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium">Full-service coordination from engagement to reception</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium">24/7 support throughout your wedding journey</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                <span className="body-medium">Stress-free experience with attention to every detail</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div 
            className={`text-center transform transition-all duration-1000 delay-900 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="heading-serif heading-1 text-sage mb-2 counter-animate">
              {counters.weddings}+
            </div>
            <div className="body-medium text-charcoal font-semibold">Weddings</div>
            <div className="body-small">Perfectly Planned</div>
          </div>

          <div 
            className={`text-center transform transition-all duration-1000 delay-1100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="heading-serif heading-1 text-sage mb-2 counter-animate">
              {counters.years}+
            </div>
            <div className="body-medium text-charcoal font-semibold">Years Experience</div>
            <div className="body-small">Industry Excellence</div>
          </div>

          <div 
            className={`text-center transform transition-all duration-1000 delay-1300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="heading-serif heading-1 text-sage mb-2 counter-animate">
              {counters.partners}+
            </div>
            <div className="body-medium text-charcoal font-semibold">Trusted Partners</div>
            <div className="body-small">Exclusive Network</div>
          </div>

          <div 
            className={`text-center transform transition-all duration-1000 delay-1500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="heading-serif heading-1 text-sage mb-2 counter-animate">
              {counters.timeSaved}%
            </div>
            <div className="body-medium text-charcoal font-semibold">Time Saved</div>
            <div className="body-small">Planning Efficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
}