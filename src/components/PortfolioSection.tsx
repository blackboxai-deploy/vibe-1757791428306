"use client";

import { useEffect, useState, useRef } from 'react';

interface PortfolioItem {
  id: number;
  image: string;
  alt: string;
  caption: string;
  isVideo?: boolean;
}

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9d6820d-6c4c-4e45-8fa5-076b4a37591e.png",
      alt: "Elegant church wedding ceremony with beautiful floral arrangements",
      caption: "Sacred Vows at Cathedral of Christ the Saviour"
    },
    {
      id: 2,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7b718a0d-8f46-45bc-8a61-d7cb52729a02.png",
      alt: "Romantic outdoor garden wedding reception with string lights and elegant table settings",
      caption: "Garden Reception Under the Stars"
    },
    {
      id: 3,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b751c2b1-1eb5-4224-887a-e923792d6d45.png",
      alt: "Luxurious ballroom wedding with crystal chandeliers and gold accents",
      caption: "Grand Ballroom Celebration"
    },
    {
      id: 4,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0cec7201-10fc-49fc-ad25-7e50c518324a.png",
      alt: "Intimate rooftop wedding with Moscow skyline sunset backdrop",
      caption: "Rooftop Romance with City Views",
      isVideo: true
    },
    {
      id: 5,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e0cb30b-3aad-4bdd-8875-910babc4244d.png",
      alt: "Traditional Russian wedding with cultural elements and decorations",
      caption: "Cultural Heritage Celebration"
    },
    {
      id: 6,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e74bbe9e-90e3-4eca-8345-53e7e53cab14.png",
      alt: "Modern minimalist wedding setup with clean lines and white flowers",
      caption: "Contemporary Minimalist Design"
    },
    {
      id: 7,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d006421-4309-4468-93f5-5b5ab13fcc05.png",
      alt: "Winter wedding ceremony in snow covered venue with warm lighting",
      caption: "Winter Wonderland Wedding",
      isVideo: true
    },
    {
      id: 8,
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/370bfe83-142d-47ab-8ed1-09827f986d58.png",
      alt: "Vintage themed wedding with antique furniture and classic decorations",
      caption: "Vintage Romance Revival"
    }
  ];

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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, portfolioItems.length - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, portfolioItems.length - 3) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, portfolioItems.length - 2));
  };

  const openLightbox = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <section 
      id="portfolio"
      ref={sectionRef} 
      className="section-spacing bg-white"
    >
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className={`heading-serif heading-2 mb-6 transform transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Our Wedding Portfolio
          </h2>
          <p 
            className={`body-large max-w-2xl mx-auto transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Every wedding tells a unique story. Browse through our collection of 
            beautiful moments we've had the privilege to create for couples across Moscow.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className={`relative transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="overflow-hidden rounded-2xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                width: `${(portfolioItems.length * 100) / 3}%`
              }}
            >
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full px-2 cursor-pointer group"
                  style={{ flex: `0 0 ${100 / portfolioItems.length}%` }}
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[3/2]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-all duration-500 
                               group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.backgroundColor = 'var(--light-sage)';
                        target.style.display = 'flex';
                        target.style.alignItems = 'center';
                        target.style.justifyContent = 'center';
                      }}
                    />
                    
                    {/* Video Play Button Overlay */}
                    {item.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center 
                                    bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center
                                      group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-sage ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Caption Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white body-medium font-medium opacity-0 
                                   group-hover:opacity-100 transform translate-y-4 
                                   group-hover:translate-y-0 transition-all duration-300">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 
                     hover:bg-white rounded-full shadow-lg hover:shadow-xl
                     flex items-center justify-center transition-all duration-300
                     hover:scale-110 z-10"
          >
            <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 
                     hover:bg-white rounded-full shadow-lg hover:shadow-xl
                     flex items-center justify-center transition-all duration-300
                     hover:scale-110 z-10"
          >
            <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.max(1, portfolioItems.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-sage w-8' 
                    : 'bg-sage/30 hover:bg-sage/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
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
            className="btn-primary text-lg px-8 py-4"
          >
            Start Planning Your Dream Wedding
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <h3 className="heading-serif heading-4 mb-2">{selectedItem.caption}</h3>
              <p className="body-medium text-muted-grey">{selectedItem.alt}</p>
            </div>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white 
                       rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}