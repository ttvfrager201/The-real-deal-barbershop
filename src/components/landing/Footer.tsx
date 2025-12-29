import { motion } from 'framer-motion';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] border-t border-[#d4af37]/20">
      <div className="noise-texture absolute inset-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.img
              src="/trd-logo.jpg"
              alt="TRD Barbershop"
              className="w-32 h-32 object-cover mx-auto md:mx-0 mb-4 rounded-full shadow-2xl border-4 border-[#d4af37]/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))',
              }}
            />
            <p className="font-['Cormorant_Garamond'] text-lg text-[#f5f1e8]">
              Where tradition meets excellence
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-['Cormorant_Garamond'] font-bold text-xl text-white mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <motion.a
                href="tel:+19105128744"
                className="flex items-center gap-3 text-[#f5f1e8] hover:text-[#d4af37] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span className="font-['Montserrat'] font-medium">(910) 512-8744</span>
              </motion.a>
              <motion.a
                href="https://maps.google.com/?q=Rocky+Point+NC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#f5f1e8] hover:text-[#d4af37] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span className="font-['Montserrat'] font-medium">
                  32 Clayton Ln, Rocky Point, NC 28457
                </span>
              </motion.a>
              <motion.a
                href="mailto:info@trdbarbershop.com"
                className="flex items-center gap-3 text-[#f5f1e8] hover:text-[#d4af37] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span className="font-['Montserrat'] font-medium">info@trdbarbershop.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Hours Quick View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-['Cormorant_Garamond'] font-bold text-xl text-white mb-6">
              Hours
            </h4>
            <div className="space-y-2 text-sm">
              <motion.div
                className="flex justify-between text-[#f5f1e8]"
                whileHover={{ x: 5 }}
              >
                <span className="font-['Montserrat'] font-medium">Mon - Thu</span>
                <span className="font-['Montserrat'] font-semibold text-[#d4af37]">9AM - 6PM</span>
              </motion.div>
              <motion.div
                className="flex justify-between text-[#f5f1e8]"
                whileHover={{ x: 5 }}
              >
                <span className="font-['Montserrat'] font-medium">Friday</span>
                <span className="font-['Montserrat'] font-semibold text-[#d4af37]">8AM - 6PM</span>
              </motion.div>
              <motion.div
                className="flex justify-between text-[#f5f1e8]"
                whileHover={{ x: 5 }}
              >
                <span className="font-['Montserrat'] font-medium">Saturday</span>
                <span className="font-['Montserrat'] font-semibold text-[#d4af37]">8AM - 4PM</span>
              </motion.div>
              <motion.div
                className="flex justify-between text-[#f5f1e8]"
                whileHover={{ x: 5 }}
              >
                <span className="font-['Montserrat'] font-medium">Sunday</span>
                <span className="font-['Montserrat'] font-semibold text-[#d4af37]">7AM - 12PM</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#d4af37]/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-['Montserrat'] text-[#f5f1e8]/70 text-sm font-light">
            © {new Date().getFullYear()} TRD Barbershop. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <motion.a
              href="https://www.facebook.com/therealdealbarbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-white transition-all duration-300 relative group"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              <svg
                className="w-8 h-8 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/trdbarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-white transition-all duration-300 relative group"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              <svg
                className="w-8 h-8 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
