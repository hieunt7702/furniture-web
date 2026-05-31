"use client";

import { motion } from "framer-motion";

export function ElevateSpaceSection() {
  return (
    <motion.section 
      className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-section-gap"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden flex items-center justify-center">
        <motion.img 
          alt="Elevate Space Background" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMj7NLUTKpluec3lLNKAGGrTnL_C0PyEyBiBDTIWr7aVhFzD0qstFqRlMGvZuISPtm-ECGVufhRUvp3U0PNIAXos7gd7J2cxDZ-yaPbsUxSWf0AssIzmlv8vpeqHgPGMi565fOYyeJ_8j1nXa8qNJIQg8-fyGA28HhTkv4qABREIweVXk_RlhC-Us88PO0gnMCYAd6cNAGLXf9JDVknBognczVajBOcQxCjskAmvl35TnuiZ2irkfjJKSy7N1LhRJOt9pMvc2VfvtY"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm md:w-1/2 md:right-0 md:bg-surface-container-low/90"></div>
        <div className="relative z-10 w-full flex justify-center text-center">
          <motion.div 
            className="w-full md:w-1/2 p-8 md:p-16"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest block mb-4">BIG SALE</span>
            <h2 className="text-headline-md font-headline-md text-primary mb-8">Elevate Your Space: Unveil Stylish Living with Our Exquisite Furniture Designs</h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-tertiary text-on-tertiary rounded-full px-8 py-3 text-label-sm font-label-sm hover:opacity-90 transition-opacity"
            >
              Buy Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
