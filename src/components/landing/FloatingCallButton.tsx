import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href="tel:+19105128744"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-110"
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-7 h-7 text-[#1a1a1a]" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#d4af37] animate-ping opacity-20" />
    </motion.a>
  );
}
