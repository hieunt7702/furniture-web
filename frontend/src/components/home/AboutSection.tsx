"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const textVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        className="lg:col-span-5 flex flex-col items-start gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.span variants={textVariants} className="text-label-caps text-on-surface-variant uppercase tracking-widest">Our Heritage</motion.span>
        <motion.h2 variants={textVariants} className="text-display-lg-mobile md:text-5xl font-display-lg text-primary leading-tight">
          A Legacy of <br/><span className="italic text-tertiary">Craftsmanship</span>
        </motion.h2>
        <motion.div variants={textVariants} className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <p>Since 1985, our commitment has been to blend timeless design with unparalleled quality. Every piece tells a unique story, transforming raw materials into sophisticated masterpieces.</p>
          <p>Our passion for innovation fuels our spaces. We don't just furnish homes; we curate lifestyles.</p>
        </motion.div>
        
        <motion.div variants={textVariants} className="grid grid-cols-3 gap-8 mt-8 border-t border-surface-container-high pt-8 w-full">
          <div>
            <h3 className="text-headline-md font-headline-md text-primary">30+</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mt-2">Years</p>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md text-primary">2.5k</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mt-2">Pieces</p>
          </div>
          <div>
            <h3 className="text-headline-md font-headline-md text-primary">50</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mt-2">Awards</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="lg:col-span-7 relative h-[600px] md:h-[800px] w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={imageVariants}
      >
        <img 
          alt="Interior setup main" 
          className="absolute right-0 top-0 w-3/4 h-[80%] object-cover object-center rounded-sm" 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
        />
        <motion.img 
          initial={{ y: 50 }}
          whileInView={{ y: -50 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          alt="Interior setup detail" 
          className="absolute left-0 bottom-0 w-1/2 h-[50%] object-cover object-center shadow-2xl rounded-sm border-8 border-surface" 
          src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
        />
      </motion.div>
    </section>
  );
}
