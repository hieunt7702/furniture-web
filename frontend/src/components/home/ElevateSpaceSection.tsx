"use client";

import { motion } from "framer-motion";

export function ElevateSpaceSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-surface-container-lowest">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%]"
        initial={{ y: "-10%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 1.5, ease: "linear" }}
        viewport={{ once: false, amount: 0 }}
      >
        <img 
          alt="Elevate Space Background" 
          className="w-full h-full object-cover brightness-50" 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80"
        />
      </motion.div>
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-center min-h-[500px]">
        <motion.div 
          className="bg-surface/90 backdrop-blur-md p-10 md:p-16 max-w-2xl text-center rounded-sm shadow-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest block mb-4">
            Exclusive Collection
          </span>
          <h2 className="text-headline-md font-headline-md text-primary mb-6 leading-tight">
            Elevate Your Space with <span className="italic text-tertiary">Exquisite</span> Designs
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant mb-10 px-4">
            Transform your home into a sanctuary of elegance. Our curated pieces blend unparalleled comfort with visionary aesthetics.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-surface rounded-full px-10 py-4 text-label-sm font-label-sm hover:bg-tertiary transition-colors uppercase tracking-wider"
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
