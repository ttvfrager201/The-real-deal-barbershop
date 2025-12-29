import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a1a1a] to-[#0d0d0d]" />
      
      {/* Noise texture overlay */}
      <div className="noise-texture absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Staggered entrance animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight"
            >
              Premium Grooming
              <br />
              <span className="text-[#d4af37]">Refined Style</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg lg:text-xl text-[#f5f1e8]/90 mb-10 max-w-xl leading-relaxed"
            >
              Experience luxury barbering in Rocky Point, NC. Walk-ins welcome for precision cuts, traditional shaves, and expert beard grooming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+19105555555"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] font-semibold text-base rounded-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              
              <button
                onClick={() => scrollToSection('hours')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-semibold text-base rounded-md transition-all duration-300 hover:bg-[#d4af37] hover:text-[#1a1a1a]"
              >
                View Hours
              </button>
            </motion.div>
          </div>

          {/* Right side - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src="/trd-logo.jpg"
                alt="TRD Barbershop"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-full"
                style={{ 
                  filter: 'drop-shadow(0 0 60px rgba(212, 175, 55, 0.4))',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-[#d4af37] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
