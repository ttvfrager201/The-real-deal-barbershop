import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function HoursLocation() {
  const hours = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
    { day: 'Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ];

  // Check if currently open (simplified - in production, use proper time checking)
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const isOpenToday = today !== 0 && today !== 1; // Closed Sunday (0) and Monday (1)

  return (
    <section id="hours" className="relative py-24 bg-[#1a1a1a]">
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
            Hours & Location
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f5f1e8] rounded-lg p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#d4af37]" />
              <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#1a1a1a]">
                Weekly Schedule
              </h3>
            </div>

            {isOpenToday && (
              <div className="mb-6 px-4 py-2 bg-[#d4af37] rounded-md inline-block">
                <span className="font-['JetBrains_Mono'] font-medium text-[#1a1a1a]">
                  ● Open Now
                </span>
              </div>
            )}

            <div className="space-y-3">
              {hours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center py-2 border-b border-[#1a1a1a]/10 last:border-0"
                >
                  <span className="font-['JetBrains_Mono'] font-medium text-[#1a1a1a]">
                    {schedule.day}
                  </span>
                  <span
                    className={`font-['JetBrains_Mono'] ${
                      schedule.time === 'Closed' ? 'text-[#1a1a1a]/50' : 'text-[#d4af37]'
                    }`}
                  >
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-[#1a1a1a]/70 font-['Space_Grotesk']">
              Walk-ins welcome. No appointments necessary.
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f5f1e8] rounded-lg p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#d4af37]" />
              <h3 className="font-['Playfair_Display'] font-bold text-2xl text-[#1a1a1a]">
                Find Us
              </h3>
            </div>

            <div className="mb-6">
              <p className="font-['JetBrains_Mono'] text-[#1a1a1a] mb-2">
                123 Main Street
              </p>
              <p className="font-['JetBrains_Mono'] text-[#1a1a1a] mb-4">
                Rocky Point, NC 28457
              </p>
              <a
                href="https://maps.google.com/?q=Rocky+Point+NC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-[#1a1a1a] font-['Space_Grotesk'] font-medium rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="w-full h-48 bg-[#1a1a1a]/10 rounded-md overflow-hidden">
              <iframe
                title="TRD Barbershop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.123456789!2d-77.88!3d34.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI1JzEyLjAiTiA3N8KwNTInNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
