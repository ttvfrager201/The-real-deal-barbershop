import Hero from './landing/Hero';
import Navigation from './landing/Navigation';
import HoursLocation from './landing/HoursLocation';
import Services from './landing/Services';
import Gallery from './landing/Gallery';
import Testimonials from './landing/Testimonials';
import Footer from './landing/Footer';
import FloatingCallButton from './landing/FloatingCallButton';
import ScrollProgress from './landing/ScrollProgress';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <HoursLocation />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default Home;
