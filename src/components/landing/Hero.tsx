import { motion } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1a1a1a]" />
      
      {/* Dynamic gradient orb that follows mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#d4af37] rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Noise texture overlay */}
      <div className="noise-texture absolute inset-0" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm font-['Montserrat'] font-semibold text-[#d4af37]">Premium Barbershop</span>
            </motion.div>

            {/* Staggered entrance animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-tight"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium Grooming
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[#d4af37] relative inline-block"
              >
                Refined Style
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-[#d4af37]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-[#f5f1e8]/90 mb-10 max-w-xl leading-relaxed font-['Montserrat'] font-light"
            >
              Experience luxury barbering in Rocky Point, NC. Walk-ins welcome for precision cuts, traditional shaves, and expert beard grooming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:+19105128744"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#d4af37] text-[#1a1a1a] font-['Montserrat'] font-bold text-base rounded-md overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Call Now</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              
              <motion.button
                onClick={() => scrollToSection('hours')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-['Montserrat'] font-bold text-base rounded-md transition-all duration-300 hover:bg-[#d4af37] hover:text-[#1a1a1a] relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Hours</span>
                <motion.div
                  className="absolute inset-0 bg-[#d4af37]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - Logo with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#d4af37]/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#d4af37]/10"
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              <motion.img
                src="/trd-logo.jpg"
                alt="TRD Barbershop"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain rounded-full relative z-10"
                style={{ 
                  filter: 'drop-shadow(0 0 60px rgba(212, 175, 55, 0.4))',
                }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 0 80px rgba(212, 175, 55, 0.6))',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
}
