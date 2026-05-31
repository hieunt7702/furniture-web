"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function PartnershipSection() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const logoVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const brands = [
    { name: "MINOTTI", font: "font-serif tracking-widest" },
    { name: "POLIFORM", font: "font-sans tracking-widest" },
    { name: "B&B ITALIA", font: "font-serif tracking-[0.2em]" },
    { name: "ROCHE BOBOIS", font: "font-sans tracking-[0.15em]" },
    { name: "BOCONCEPT", font: "font-sans tracking-wider" },
    { name: "KARTELL", font: "font-serif tracking-widest" },
  ];

  return (
    <motion.section
      className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 variants={logoVariants} className="text-headline-sm font-headline-sm text-primary mb-2 font-bold">Our Affiliated Brands</motion.h2>
      <motion.p variants={logoVariants} className="text-body-md font-body-md text-on-surface-variant mb-12">Discover collections from the world's most prestigious furniture makers.</motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            variants={logoVariants}
            whileHover={{ scale: 1.05, borderColor: "rgba(116, 120, 120, 0.6)" }}
          >
            <Link
              href={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="bg-surface-container-lowest rounded-xl px-8 w-48 h-24 flex items-center justify-center border border-outline-variant/30 shadow-sm transition-colors cursor-pointer group"
            >
              <span className={`text-on-surface-variant group-hover:text-primary transition-colors text-lg ${brand.font}`}>
                {brand.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
