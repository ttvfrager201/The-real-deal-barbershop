import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function HoursLocation() {
  const hours = [
    { day: 'Monday', time: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
    { day: 'Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 4:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 12:00 PM' },
  ];

  // Check if currently open (simplified - in production, use proper time checking)
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  
  // Simplified check - assumes open if it's a weekday during typical hours
  let isOpenToday = false;
  if (today >= 1 && today <= 5) { // Monday to Friday
    isOpenToday = currentTime >= 8 * 60 && currentTime < 18 * 60; // 8 AM to 6 PM
  } else if (today === 6) { // Saturday
    isOpenToday = currentTime >= 8 * 60 && currentTime < 16 * 60; // 8 AM to 4 PM
  } else if (today === 0) { // Sunday
    isOpenToday = currentTime >= 7 * 60 && currentTime < 12 * 60; // 7 AM to 12 PM
  }

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
          <h2 className="font-['Cormorant_Garamond'] font-bold text-4xl md:text-5xl text-white mb-4">
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
            whileHover={{ y: -5 }}
            className="bg-[#f5f1e8] rounded-lg p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#d4af37]/20 transition-colors duration-300" />
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#d4af37]" />
              <h3 className="font-['Cormorant_Garamond'] font-bold text-2xl text-[#1a1a1a]">
                Weekly Schedule
              </h3>
            </div>

            {isOpenToday && (
              <div className="mb-6 px-4 py-2 bg-[#d4af37] rounded-md inline-block">
                <span className="font-['Montserrat'] font-semibold text-[#1a1a1a]">
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
                  <span className="font-['Montserrat'] font-semibold text-[#1a1a1a]">
                    {schedule.day}
                  </span>
                  <span className="font-['Montserrat'] text-[#d4af37] font-bold">
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-[#1a1a1a]/70 font-['Montserrat']">
              Walk-ins welcome. No appointments necessary.
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-[#f5f1e8] rounded-lg p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl -ml-16 -mt-16 group-hover:bg-[#d4af37]/20 transition-colors duration-300" />
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#d4af37]" />
              <h3 className="font-['Cormorant_Garamond'] font-bold text-2xl text-[#1a1a1a]">
                Find Us
              </h3>
            </div>

            <div className="mb-6">
              <p className="font-['Montserrat'] font-medium text-[#1a1a1a] mb-2">
                32 Clayton Ln
              </p>
              <p className="font-['Montserrat'] font-medium text-[#1a1a1a] mb-4">
                Rocky Point, NC 28457
              </p>
              <a
                href="https://www.google.com/maps/place/The+Real+Deal+Barber+Shop/@34.44132,-77.8735333,17z/data=!3m1!4b1!4m6!3m5!1s0x89a987cd4364ada7:0xc7eebd14e97cbb62!8m2!3d34.4413201!4d-77.8689199!16s%2Fg%2F11h2g7wly_?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-[#1a1a1a] font-['Montserrat'] font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 bg-[#1a1a1a]/10 rounded-lg overflow-hidden relative group">
              <iframe
                title="TRD Barbershop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.4264911944683!2d-77.8689199!3d34.4413201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a987cd4364ada7%3A0xc7eebd14e97cbb62!2sThe%20Real%20Deal%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1767050280468!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
