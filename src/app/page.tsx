import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import ScenicBreak from '@/components/ScenicBreak';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <PricingSection />
      <ScenicBreak />
      <TestimonialsSection />
      <BookingForm />
      <Footer />
    </main>
  );
}