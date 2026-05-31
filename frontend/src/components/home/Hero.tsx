"use client";

import { motion } from "framer-motion";

export function Hero() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=3840&q=100" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          variants={itemVariants} 
          className="text-label-caps font-label-caps text-surface uppercase tracking-[0.2em] mb-6 drop-shadow-md"
        >
          2024 Exclusive Collection
        </motion.span>
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-display-lg text-surface leading-tight mb-8 drop-shadow-lg"
        >
          Artistry in Every Detail
        </motion.h1>
        <motion.p 
          variants={itemVariants} 
          className="text-body-lg font-body-lg text-surface-container max-w-2xl mx-auto mb-10 drop-shadow-md"
        >
          Discover a curated selection of modern and timeless luxury furniture pieces designed to elevate your living spaces.
        </motion.p>
        <motion.button 
          variants={itemVariants} 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }} 
          whileTap={{ scale: 0.95 }} 
          className="bg-surface text-primary rounded-full px-10 py-4 text-label-sm font-label-sm hover:opacity-90 transition-all shadow-xl font-medium tracking-wide uppercase"
        >
          Explore Collection
        </motion.button>
      </motion.div>
    </section>
  );
}
