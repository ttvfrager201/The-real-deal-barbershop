import { motion } from 'framer-motion';
import { Scissors, Sparkles, Users, Baby } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scissors,
      name: 'Signature Cuts',
      description: 'Precision haircuts tailored to your style and face shape',
      price: '$35 - $45',
    },
    {
      icon: Sparkles,
      name: 'Traditional Shaves',
      description: 'Hot towel shaves with premium products for the smoothest finish',
      price: '$40 - $50',
    },
    {
      icon: Users,
      name: 'Beard Grooming',
      description: 'Expert beard trims, shaping, and conditioning treatments',
      price: '$25 - $35',
    },
    {
      icon: Baby,
      name: "Kids' Cuts",
      description: 'Patient, friendly service for our youngest clients',
      price: '$25',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
      <div className="noise-texture absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Cormorant_Garamond'] font-bold text-4xl md:text-5xl text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6" />
          <p className="font-['Montserrat'] text-[#f5f1e8] text-lg max-w-2xl mx-auto font-light">
            Premium grooming services delivered with precision and care
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-[#1a1a1a] rounded-lg p-8 border-t-2 border-[#d4af37] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] cursor-pointer"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#d4af37] rounded-lg opacity-0 group-hover:opacity-30"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-[#d4af37]/10 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-[#d4af37]" />
                  </motion.div>
                  
                  <h3 className="font-['Cormorant_Garamond'] font-bold text-2xl text-white mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="font-['Montserrat'] text-[#f5f1e8] mb-4 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="font-['Montserrat'] font-semibold text-xl text-[#d4af37]">
                    {service.price}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="font-['Montserrat'] text-[#f5f1e8]/80 text-sm font-light">
            All services include a complimentary consultation and styling
          </p>
        </motion.div>
      </div>
    </section>
  );
}
