import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Regular Client',
      rating: 5,
      text: 'Best barbershop in Rocky Point! The attention to detail and the traditional shave experience is unmatched. I\'ve been coming here for over a year and wouldn\'t go anywhere else.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'David Martinez',
      role: 'Local Business Owner',
      rating: 5,
      text: 'Professional service and a welcoming atmosphere. The barbers really know their craft. My beard has never looked better!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'James Wilson',
      role: 'Long-time Customer',
      rating: 5,
      text: 'The Real Deal lives up to its name. Premium quality cuts every time. The walk-in policy is perfect for my schedule.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Robert Taylor',
      role: 'New Client',
      rating: 5,
      text: 'First time here and I\'m already planning my next visit. Great conversation, excellent service, and a cut that exceeded my expectations.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] overflow-hidden">
      <div className="noise-texture absolute inset-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#d4af37]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" />
            <h2 className="font-['Cormorant_Garamond'] font-bold text-4xl md:text-5xl text-white">
              What Our Clients Say
            </h2>
            <Star className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" />
          </div>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6" />
          <p className="font-['Montserrat'] text-[#f5f1e8] text-lg max-w-2xl mx-auto font-light">
            Real reviews from real customers who trust us with their style
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[350px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                  scale: index === currentIndex ? 1 : 0.9,
                  zIndex: index === currentIndex ? 10 : 1,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-[#d4af37]/20 shadow-2xl h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-[#d4af37]/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#d4af37] fill-[#d4af37]"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="font-['Montserrat'] text-[#f5f1e8] text-lg md:text-xl leading-relaxed mb-8 flex-grow font-light italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37]/30"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <h4 className="font-['Cormorant_Garamond'] font-bold text-xl text-white">
                        {testimonial.name}
                      </h4>
                      <p className="font-['Montserrat'] text-[#d4af37] text-sm font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#d4af37] w-8' : 'bg-[#d4af37]/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#d4af37]/30 text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Auto-rotate indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-[#f5f1e8]/60 font-['Montserrat'] font-light">
            Swipe or click to see more reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
