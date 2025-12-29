import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-lg border-b border-[#d4af37]/20 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img 
                src="/trd-logo.jpg" 
                alt="TRD" 
                className="w-12 h-12 object-cover rounded-full"
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))'
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div className="flex flex-col items-start">
                <span className="font-['Montserrat'] text-lg md:text-xl font-extrabold text-white uppercase tracking-tight leading-tight group-hover:text-[#d4af37] transition-colors">
                  The Real Deal
                </span>
                <span className="font-['Montserrat'] text-xs md:text-sm font-light text-[#d4af37]/80 uppercase tracking-wider ml-1">
                  Barbershop
                </span>
              </div>
            </motion.button>

            <div className="hidden md:flex gap-8 items-center">
              <motion.button
                onClick={() => scrollToSection('hours')}
                className="text-sm font-['Montserrat'] font-semibold text-[#f5f1e8] hover:text-[#d4af37] transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                Hours
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('services')}
                className="text-sm font-['Montserrat'] font-semibold text-[#f5f1e8] hover:text-[#d4af37] transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('gallery')}
                className="text-sm font-['Montserrat'] font-semibold text-[#f5f1e8] hover:text-[#d4af37] transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('testimonials')}
                className="text-sm font-['Montserrat'] font-semibold text-[#f5f1e8] hover:text-[#d4af37] transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                Reviews
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </motion.button>
              <motion.a
                href="tel:+19105128744"
                className="px-5 py-2 bg-[#d4af37] text-[#1a1a1a] text-sm font-['Montserrat'] font-bold rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Call Now</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#d4af37] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-[#1a1a1a] z-50 shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-6">
                  <motion.button
                    onClick={() => scrollToSection('hours')}
                    className="text-left text-lg font-medium text-[#f5f1e8] hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20"
                    whileHover={{ x: 10 }}
                  >
                    Hours & Location
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection('services')}
                    className="text-left text-lg font-medium text-[#f5f1e8] hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20"
                    whileHover={{ x: 10 }}
                  >
                    Services
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection('gallery')}
                    className="text-left text-lg font-medium text-[#f5f1e8] hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20"
                    whileHover={{ x: 10 }}
                  >
                    Gallery
                  </motion.button>
                  <motion.button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-left text-lg font-medium text-[#f5f1e8] hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20"
                    whileHover={{ x: 10 }}
                  >
                    Reviews
                  </motion.button>
                  <motion.a
                    href="tel:+19105128744"
                    className="mt-4 px-6 py-3 bg-[#d4af37] text-[#1a1a1a] font-semibold rounded-md text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Call Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
