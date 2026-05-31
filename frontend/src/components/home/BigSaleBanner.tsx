"use client";

import { motion } from "framer-motion";

export function BigSaleBanner() {
  return (
    <motion.section 
      className="relative w-full h-[400px] bg-surface-container-highest flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img 
        alt="Sale Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-60" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ASV7or8R_oAZHhH1mmA-evQa7PoK4PO8oOdFrPPPSSlPsN3okd8TddDi7Rf5YovM0hJ2oSqzCZM9NnVnItxzFBtji4cDE-BeBWdwvnhrUpjmg5e9ZqWBq9HG5U7AG1gzhwysAosfse4RVAO2sBcmQBmF3HC1OSlVxcwqZ9fZZIo9i_aEU13JkZQaquQxXe9Y4ZxTUBM2QfL05hSjvUH1xF37n69FreTcq-yWI8rnPJRD3vwsUFhSYylNnbB5vyIDsxyKWGfReA-B"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="relative z-10 text-center max-w-2xl px-margin-mobile"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-label-caps font-label-caps text-primary uppercase tracking-widest block mb-4">BIG SALE</span>
        <h2 className="text-headline-md font-headline-md text-primary mb-8">Savings That Spark Joy: Up to 30% Off Chic Bedroom Furniture</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-tertiary text-on-tertiary rounded-full px-8 py-3 text-label-sm font-label-sm hover:opacity-90 transition-opacity"
        >
          Buy Now
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
