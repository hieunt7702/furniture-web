"use client";

import { motion } from "framer-motion";

export function CategorySection() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const products = [
    {
      name: "Freeman Seating System",
      brand: "MINOTTI",
      price: "$8,500",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mondrian Sofa",
      brand: "POLIFORM",
      price: "$9,200",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Camaleonda Modular Sofa",
      brand: "B&B ITALIA",
      price: "$12,000",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mah Jong Sofa",
      brand: "ROCHE BOBOIS",
      price: "$15,500",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20d592e?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <motion.section
      className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <motion.h2 variants={itemVariants} className="text-headline-md font-headline-md text-primary mb-4">Categories</motion.h2>
        <motion.p variants={itemVariants} className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lectus lorem tellus vestibulum, in quis. Tristique quis congue fermentum ut facilisis sit elit.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="bg-tertiary text-on-tertiary rounded-full px-6 py-2 text-label-sm font-label-sm">All</button>
        <button className="bg-transparent text-primary border border-outline-variant rounded-full px-6 py-2 text-label-sm font-label-sm hover:border-primary transition-colors">Chair</button>
        <button className="bg-transparent text-primary border border-outline-variant rounded-full px-6 py-2 text-label-sm font-label-sm hover:border-primary transition-colors">Table</button>
        <button className="bg-transparent text-primary border border-outline-variant rounded-full px-6 py-2 text-label-sm font-label-sm hover:border-primary transition-colors">Lamp</button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {products.map((product, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group cursor-pointer flex flex-col gap-4"
          >
            <div className="h-[400px] overflow-hidden relative rounded-sm bg-surface-container-lowest">
              <img 
                alt={product.name} 
                className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-700 ease-out" 
                src={product.image} 
              />
              <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-bold text-on-surface bg-surface/80 px-3 py-1 backdrop-blur-sm">
                {product.brand}
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-body-lg font-headline-sm text-primary group-hover:text-tertiary transition-colors">{product.name}</h4>
              <p className="text-body-md font-body-md text-on-surface-variant mt-1">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
