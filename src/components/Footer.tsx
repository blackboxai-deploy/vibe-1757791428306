"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--sage)' }}>
      <div className="container-custom py-16">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-sage font-bold text-lg">EM</span>
              </div>
              <span className="heading-serif text-2xl text-white font-semibold">
                Eternal Moments
              </span>
            </div>
            
            <p className="body-large text-white/90 mb-8 max-w-md leading-relaxed">
              Creating unforgettable wedding experiences in Moscow since 2016. 
              We believe every love story deserves a perfect beginning.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/eternalmoments"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center
                         transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-white group-hover:text-white/90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.929.013 6.71.072 5.493.131 4.73.333 4.058.63c-.68.3-1.267.703-1.85 1.286C1.625 2.499 1.222 3.086.922 3.766c-.297.672-.499 1.435-.558 2.652C.305 7.617.293 8.084.293 11.705c0 3.621.012 4.088.071 5.307.059 1.217.261 1.98.558 2.652.3.68.703 1.267 1.286 1.85.583.583 1.17.986 1.85 1.286.672.297 1.435.499 2.652.558 1.219.059 1.686.071 5.307.071 3.621 0 4.088-.012 5.307-.071 1.217-.059 1.98-.261 2.652-.558.68-.3 1.267-.703 1.85-1.286.583-.583.986-1.17 1.286-1.85.297-.672.499-1.435.558-2.652.059-1.219.071-1.686.071-5.307 0-3.621-.012-4.088-.071-5.307-.059-1.217-.261-1.98-.558-2.652-.3-.68-.703-1.267-1.286-1.85C16.742.986 16.155.583 15.475.283 14.803-.014 14.04-.216 12.823-.275 11.604-.334 11.137-.346 7.516-.346H12.017zM11.075 2.178c.361-.004.766-.004 1.245-.004 3.499 0 3.91.013 5.291.072 1.276.058 1.968.27 2.428.447.61.237 1.045.52 1.502.977.457.457.74.892.977 1.502.177.46.389 1.152.447 2.428.059 1.381.072 1.792.072 5.291s-.013 3.91-.072 5.291c-.058 1.276-.27 1.968-.447 2.428-.237.61-.52 1.045-.977 1.502-.457.457-.892.74-1.502.977-.46.177-1.152.389-2.428.447-1.381.059-1.792.072-5.291.072s-3.91-.013-5.291-.072c-1.276-.058-1.968-.27-2.428-.447-.61-.237-1.045-.52-1.502-.977-.457-.457-.74-.892-.977-1.502-.177-.46-.389-1.152-.447-2.428-.059-1.381-.072-1.792-.072-5.291s.013-3.91.072-5.291c.058-1.276.27-1.968.447-2.428.237-.61.52-1.045.977-1.502.457-.457.892-.74 1.502-.977.46-.177 1.152-.389 2.428-.447 1.208-.055 1.677-.067 4.069-.07v.003zM16.908 5.334c0 .724-.59 1.311-1.314 1.311-.725 0-1.314-.587-1.314-1.311 0-.725.589-1.314 1.314-1.314.725 0 1.314.589 1.314 1.314zM5.834 12.017c0-3.412 2.764-6.177 6.176-6.177s6.177 2.765 6.177 6.177-2.765 6.177-6.177 6.177-6.176-2.765-6.176-6.177zM8.014 12.017c0 2.208 1.791 3.999 3.999 3.999s3.999-1.791 3.999-3.999-1.791-3.999-3.999-3.999-3.999 1.791-3.999 3.999z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/74951234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center
                         transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-5 h-5 text-white group-hover:text-white/90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
              </a>

              <a
                href="https://t.me/eternalmoments"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center
                         transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Contact us on Telegram"
              >
                <svg className="w-5 h-5 text-white group-hover:text-white/90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-serif heading-4 text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-white/80 hover:text-white hover:translate-x-1 
                         transition-all duration-300 body-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-white/80 hover:text-white hover:translate-x-1 
                         transition-all duration-300 body-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block text-white/80 hover:text-white hover:translate-x-1 
                         transition-all duration-300 body-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-white/80 hover:text-white hover:translate-x-1 
                         transition-all duration-300 body-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-white/80 hover:text-white hover:translate-x-1 
                         transition-all duration-300 body-medium"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-serif heading-4 text-white mb-6">Services</h4>
            <nav className="space-y-3">
              <span className="block text-white/80 body-medium">
                Full Wedding Planning
              </span>
              <span className="block text-white/80 body-medium">
                Day-of Coordination
              </span>
              <span className="block text-white/80 body-medium">
                Venue Selection
              </span>
              <span className="block text-white/80 body-medium">
                Vendor Management
              </span>
              <span className="block text-white/80 body-medium">
                Floral Design
              </span>
              <span className="block text-white/80 body-medium">
                Destination Weddings
              </span>
            </nav>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h5 className="body-medium font-semibold text-white mb-2">Call Us</h5>
              <a 
                href="tel:+74951234567" 
                className="body-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                +7 (495) 123-45-67
              </a>
            </div>
            <div>
              <h5 className="body-medium font-semibold text-white mb-2">Email Us</h5>
              <a 
                href="mailto:info@eternalmoments.ru" 
                className="body-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                info@eternalmoments.ru
              </a>
            </div>
            <div>
              <h5 className="body-medium font-semibold text-white mb-2">Office Hours</h5>
              <span className="body-medium text-white/80">
                Mon-Fri: 9AM-7PM<br />
                Sat-Sun: By appointment
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="body-medium text-white/80">
              © {currentYear} Eternal Moments. All rights reserved.
            </p>
            <p className="body-small text-white/60 mt-1">
              Licensed Wedding Planning Service in Moscow, Russia
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="body-small text-white/60 hover:text-white/80 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="body-small text-white/60 hover:text-white/80 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center
                       transition-all duration-300 hover:scale-110 group"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 text-white group-hover:text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
    </footer>
  );
}