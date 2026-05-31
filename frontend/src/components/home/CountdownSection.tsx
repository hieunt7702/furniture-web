"use client";

import { motion } from "framer-motion";

export function CountdownSection() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="bg-tertiary-container text-on-tertiary-fixed py-24 w-full text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-headline-sm font-headline-sm mb-4">Countdown For Our Big Offer Sale</motion.h2>
      <motion.p variants={itemVariants} className="text-label-sm font-label-sm text-on-tertiary-container mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lectus</motion.p>
      
      <motion.div className="flex justify-center gap-6" variants={itemVariants}>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-inverse-surface rounded-xl p-6 w-28 shadow-lg">
          <span className="block text-label-sm font-label-sm text-outline-variant mb-2">Days</span>
          <span className="text-headline-md font-headline-md text-on-tertiary">13</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-inverse-surface rounded-xl p-6 w-28 shadow-lg">
          <span className="block text-label-sm font-label-sm text-outline-variant mb-2">Hours</span>
          <span className="text-headline-md font-headline-md text-on-tertiary">10</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-inverse-surface rounded-xl p-6 w-28 shadow-lg">
          <span className="block text-label-sm font-label-sm text-outline-variant mb-2">Minutes</span>
          <span className="text-headline-md font-headline-md text-on-tertiary">15</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
