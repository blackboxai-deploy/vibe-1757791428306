"use client";

import { useEffect, useState, useRef } from 'react';

export default function BookingForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
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

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!formData.date.trim()) {
      errors.date = 'Wedding date is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus('submitting');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <section 
        id="contact"
        className="section-spacing"
        style={{ backgroundColor: 'var(--warm-linen)' }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-16 text-center shadow-lg">
              <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="heading-serif heading-2 mb-6">Thank You!</h2>
              <p className="body-large mb-8">
                We've received your wedding planning request. Our team will contact you within 24 hours 
                to discuss your dream wedding and schedule your complimentary consultation.
              </p>
              
              <div className="space-y-4 text-left max-w-md mx-auto mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span className="body-medium">Personal consultation within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span className="body-medium">Custom wedding proposal creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span className="body-medium">Venue and vendor recommendations</span>
                </div>
              </div>

              <button
                onClick={() => setFormStatus('idle')}
                className="btn-primary"
              >
                Plan Another Event
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="contact"
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
            Book Your Dream Wedding
          </h2>
          <p 
            className={`body-large max-w-2xl mx-auto transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Ready to start planning your perfect day? Tell us about your vision and 
            we'll create a personalized wedding experience just for you.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Romantic Image */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[500px]">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae3aaa85-25f3-406a-a167-e5fdad859864.png"
                alt="Romantic couple portrait in wedding attire with soft golden hour lighting, intimate moment"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = 'var(--sage)';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                  target.style.color = 'white';
                  target.style.fontSize = '1.2rem';
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Floating Quote */}
              <div className="absolute bottom-8 left-8 right-8">
                <blockquote className="text-white">
                  <p className="body-large italic mb-4">
                    "The best love story is when you fall in love with the most unexpected person at the most unexpected time."
                  </p>
                  <footer className="body-medium">— Your Journey Starts Here —</footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div 
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div className={`transform transition-all duration-600 delay-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <label htmlFor="name" className="block body-medium font-semibold text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${formErrors.name ? 'border-red-400' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 body-small mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className={`transform transition-all duration-600 delay-800 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <label htmlFor="email" className="block body-medium font-semibold text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.email ? 'border-red-400' : ''}`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 body-small mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div className={`transform transition-all duration-600 delay-900 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <label htmlFor="phone" className="block body-medium font-semibold text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.phone ? 'border-red-400' : ''}`}
                      placeholder="+7 (XXX) XXX-XX-XX"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 body-small mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Wedding Date */}
                <div className={`transform transition-all duration-600 delay-1000 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <label htmlFor="date" className="block body-medium font-semibold text-charcoal mb-2">
                    Preferred Wedding Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`form-input ${formErrors.date ? 'border-red-400' : ''}`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {formErrors.date && (
                    <p className="text-red-500 body-small mt-1">{formErrors.date}</p>
                  )}
                </div>

                {/* Message */}
                <div className={`transform transition-all duration-600 delay-1100 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <label htmlFor="message" className="block body-medium font-semibold text-charcoal mb-2">
                    Tell Us About Your Dream Wedding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Share your wedding vision, guest count, venue preferences, budget range, or any special requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className={`pt-4 transform transition-all duration-600 delay-1200 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-sage text-white py-4 px-8 rounded-xl font-semibold text-lg 
                             hover:bg-sage/90 hover:scale-105 hover:shadow-xl
                             disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                             transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Wedding Request</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Form Footer */}
                <div className="text-center pt-4">
                  <p className="body-small text-muted-grey">
                    By submitting this form, you agree to our privacy policy. 
                    We'll contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div 
          className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="heading-serif heading-4 mb-8">Get in Touch</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="body-medium font-semibold mb-2">Phone</h4>
                <p className="body-medium text-sage">+7 (495) 123-45-67</p>
                <p className="body-small text-muted-grey">Mon-Fri 9AM-7PM</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="body-medium font-semibold mb-2">Email</h4>
                <p className="body-medium text-sage">info@eternalmoments.ru</p>
                <p className="body-small text-muted-grey">24/7 Response</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="body-medium font-semibold mb-2">Office</h4>
                <p className="body-medium text-sage">Moscow City Center</p>
                <p className="body-small text-muted-grey">By appointment only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}