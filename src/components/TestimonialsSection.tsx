"use client";

import { useEffect, useState, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  couple: string;
  photo: string;
  quote: string;
  wedding: string;
  date: string;
  featured?: boolean;
}

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Anastasia & Dmitri",
      couple: "Kovalev",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/429895ff-ddb5-46f6-b317-28e5f9155690.png",
      quote: "Eternal Moments transformed our wedding dreams into reality. Every detail was perfectly executed, from the breathtaking floral arrangements to the seamless coordination. Our guests still talk about how magical the evening was. We couldn't have asked for a more perfect wedding day.",
      wedding: "Garden Wedding at Kuskovo Estate",
      date: "June 2023",
      featured: true
    },
    {
      id: 2,
      name: "Maria & Alexander",
      couple: "Petrov",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/957e62ba-767b-4b0f-acfb-63b7bf33ebb4.png",
      quote: "The attention to detail was incredible. They handled everything with such professionalism and grace. Our winter wedding was absolutely stunning, and we felt so relaxed knowing everything was in capable hands.",
      wedding: "Winter Ballroom Celebration",
      date: "December 2023"
    },
    {
      id: 3,
      name: "Ekaterina & Sergei",
      couple: "Volkov",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89b0b758-330f-477a-953b-8b74fd4672e0.png",
      quote: "From our first meeting to the last dance, the team made us feel like royalty. They understood our vision completely and brought it to life beyond our wildest expectations. Truly exceptional service.",
      wedding: "Rooftop Romance with City Views",
      date: "August 2023"
    },
    {
      id: 4,
      name: "Olga & Maxim",
      couple: "Sokolov",
      photo: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e2ce60f1-a535-4a76-8ce4-19ef886152d1.png",
      quote: "Planning a traditional Russian wedding with modern touches seemed impossible until we found Eternal Moments. They balanced our cultural heritage with contemporary elegance perfectly. Our families were amazed.",
      wedding: "Traditional Heritage Celebration",
      date: "September 2023"
    }
  ];

  return (
    <section 
      id="testimonials"
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
            Love Stories & Testimonials
          </h2>
          <p 
            className={`body-large max-w-2xl mx-auto transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Hear from the couples who trusted us to make their special day unforgettable. 
            Their joy is our greatest achievement.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Featured Testimonial - Takes full width */}
          {testimonials.filter(t => t.featured).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="card-soft bg-gradient-to-br from-warm-linen to-white p-8 lg:p-12 text-center">
                
                {/* Photo */}
                <div className="mb-8">
                  <img
                    src={testimonial.photo}
                    alt={`Wedding photo of ${testimonial.name}`}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover mx-auto mb-4 
                             shadow-lg border-4 border-white transition-transform duration-300 
                             hover:scale-105 hover:brightness-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = 'var(--sage)';
                      target.style.display = 'flex';
                      target.style.alignItems = 'center';
                      target.style.justifyContent = 'center';
                      target.style.color = 'white';
                      target.style.fontSize = '2rem';
                    }}
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-5 h-5 text-sage" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative mb-8">
                  <div className="text-sage/20 text-6xl absolute -top-4 -left-4 leading-none">"</div>
                  <p className="body-large italic text-charcoal relative z-10 max-w-4xl mx-auto leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="text-sage/20 text-6xl absolute -bottom-8 -right-4 leading-none">"</div>
                </blockquote>

                {/* Attribution */}
                <div>
                  <h4 className="heading-serif heading-4 text-charcoal mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="body-medium text-sage font-medium mb-1">
                    {testimonial.wedding}
                  </p>
                  <p className="body-small text-muted-grey">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Regular Testimonials */}
          {testimonials.filter(t => !t.featured).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${
                index === 0 ? 'delay-500' : index === 1 ? 'delay-700' : 'delay-900'
              }`}
            >
              <div className="card-soft h-full flex flex-col group">
                
                {/* Photo and Rating */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.photo}
                    alt={`Wedding photo of ${testimonial.name}`}
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-md 
                             transition-transform duration-300 group-hover:scale-105 
                             group-hover:brightness-110 border-2 border-white"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = 'var(--sage)';
                      target.style.display = 'flex';
                      target.style.alignItems = 'center';
                      target.style.justifyContent = 'center';
                      target.style.color = 'white';
                      target.style.fontSize = '1rem';
                    }}
                  />
                  <div>
                    <h4 className="heading-serif heading-4 mb-1">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className="w-4 h-4 text-sage" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="flex-grow mb-6">
                  <p className="body-medium italic text-charcoal leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Wedding Details */}
                <div className="pt-4 border-t border-sage/10">
                  <p className="body-small text-sage font-medium mb-1">
                    {testimonial.wedding}
                  </p>
                  <p className="body-small text-muted-grey">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div 
          className={`text-center transform transition-all duration-1000 delay-1100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-warm-linen rounded-2xl p-8">
            <h3 className="heading-serif heading-4 mb-8">Why Couples Trust Us</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="heading-serif heading-2 text-sage mb-2">4.9/5</div>
                <div className="body-medium font-semibold mb-2">Average Rating</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 text-sage" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <div className="body-small text-muted-grey">Based on 100+ reviews</div>
              </div>

              <div className="text-center">
                <div className="heading-serif heading-2 text-sage mb-2">100%</div>
                <div className="body-medium font-semibold mb-2">Satisfaction Rate</div>
                <div className="body-small text-muted-grey">
                  Every couple has rated their experience as excellent
                </div>
              </div>

              <div className="text-center">
                <div className="heading-serif heading-2 text-sage mb-2">95%</div>
                <div className="body-medium font-semibold mb-2">Referral Rate</div>
                <div className="body-small text-muted-grey">
                  Couples recommend us to their friends and family
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}