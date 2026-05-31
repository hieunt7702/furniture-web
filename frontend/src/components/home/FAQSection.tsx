"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      className="max-w-3xl mx-auto px-margin-mobile md:px-gutter pb-section-gap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <motion.h2 variants={itemVariants} className="text-headline-sm font-headline-sm text-primary mb-4 font-bold">Frequently ask Question</motion.h2>
        <motion.p variants={itemVariants} className="text-body-md font-body-md text-on-surface-variant">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lectus</motion.p>
      </div>
      
      <div className="space-y-4">
        <motion.div variants={itemVariants} className="border border-outline-variant/50 rounded-lg p-4 bg-surface-container-lowest flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
          <span className="text-body-md font-body-md text-primary font-medium">What services do you offer?</span>
          <Plus size={24} className="text-outline" />
        </motion.div>
        <motion.div variants={itemVariants} className="border border-outline-variant/50 rounded-lg p-4 bg-surface-container-lowest flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
          <span className="text-body-md font-body-md text-primary font-medium">How does the design process work?</span>
          <Plus size={24} className="text-outline" />
        </motion.div>
        <motion.div variants={itemVariants} className="border border-outline-variant/50 rounded-lg p-4 bg-surface-container-lowest flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
          <span className="text-body-md font-body-md text-primary font-medium">What is your design style?</span>
          <Plus size={24} className="text-outline" />
        </motion.div>
        <motion.div variants={itemVariants} className="border border-outline-variant/50 rounded-lg p-4 bg-surface-container-lowest">
          <div className="flex justify-between items-center cursor-pointer mb-2">
            <span className="text-body-md font-body-md text-primary font-medium">Do you work with a specific budget range?</span>
            <Minus size={24} className="text-outline" />
          </div>
          <motion.p 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="text-body-md font-body-md text-on-surface-variant mt-4 border-t border-outline-variant/20 pt-4"
          >
            Clarify whether you work with clients of various budget ranges and how you tailor your services to meet different financial considerations.
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants} className="border border-outline-variant/50 rounded-lg p-4 bg-surface-container-lowest flex justify-between items-center cursor-pointer hover:bg-surface-container-low transition-colors">
          <span className="text-body-md font-body-md text-primary font-medium">How much does your interior design service cost?</span>
          <span className="material-symbols-outlined text-outline">add</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
