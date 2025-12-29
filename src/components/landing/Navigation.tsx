import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-[#d4af37]/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <img 
              src="/trd-logo.jpg" 
              alt="TRD" 
              className="w-10 h-10 object-contain rounded-full"
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))'
              }}
            />
            <span className="font-serif text-lg font-bold text-white tracking-wide">
              TRD Barbershop
            </span>
          </button>

          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('hours')}
              className="text-sm font-medium text-[#f5f1e8] hover:text-[#d4af37] transition-colors duration-200"
            >
              Hours
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-[#f5f1e8] hover:text-[#d4af37] transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium text-[#f5f1e8] hover:text-[#d4af37] transition-colors duration-200"
            >
              Gallery
            </button>
            <a
              href="tel:+19105555555"
              className="px-5 py-2 bg-[#d4af37] text-[#1a1a1a] text-sm font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
