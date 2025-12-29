import Hero from './landing/Hero';
import Navigation from './landing/Navigation';
import HoursLocation from './landing/HoursLocation';
import Services from './landing/Services';
import Gallery from './landing/Gallery';
import Footer from './landing/Footer';
import FloatingCallButton from './landing/FloatingCallButton';

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#1a1a1a] overflow-x-hidden">
      <Navigation />
      <Hero />
      <HoursLocation />
      <Services />
      <Gallery />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default Home;
