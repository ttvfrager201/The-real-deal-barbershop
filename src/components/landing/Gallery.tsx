import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
      alt: 'Luxury barber chair',
      caption: 'Premium Seating',
    },
    {
      url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
      alt: 'Barber tools',
      caption: 'Professional Tools',
    },
    {
      url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
      alt: 'Shop interior',
      caption: 'Refined Atmosphere',
    },
  ];

  return (
    <section id="gallery" className="relative py-24 bg-[#1a1a1a]">
      <div className="noise-texture absolute inset-0" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-white mb-4">
            The TRD Experience
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6" />
          <p className="font-['Space_Grotesk'] text-[#f5f1e8] text-lg max-w-2xl mx-auto">
            Step into a world of classic barbering and modern luxury
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              {/* Image with warm color overlay */}
              <div className="absolute inset-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: 'sepia(0.2) contrast(1.1)' }}
                />
                
                {/* Vignette overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
                  }}
                />
                
                {/* Gold tint overlay */}
                <div className="absolute inset-0 bg-[#d4af37] opacity-[0.08] mix-blend-multiply" />
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-['Playfair_Display'] font-bold text-2xl text-white">
                  {image.caption}
                </p>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="font-['Space_Grotesk'] text-[#f5f1e8] mb-6">
            Follow us on social media for more updates
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
