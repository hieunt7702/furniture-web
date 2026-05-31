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

  const logos = [
    { name: "Herman Miller", src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Herman_Miller_logo.svg" },
    { name: "IKEA", src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg" },
    { name: "BoConcept", src: "https://upload.wikimedia.org/wikipedia/commons/9/90/BoConcept_logo.svg" },
    { name: "Kartell", src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Kartell_logo.svg" },
    { name: "Knoll", src: "https://upload.wikimedia.org/wikipedia/commons/1/14/Knoll_logo.svg" },
    { name: "Vitra", src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Vitra_logo.svg" }
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

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {logos.map((brand, index) => (
          <motion.div
            key={index}
            variants={logoVariants}
            whileHover={{ scale: 1.05, borderColor: "rgba(116, 120, 120, 0.6)" }}
          >
            <Link
              href={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="bg-surface-container-lowest rounded-xl px-4 md:px-8 w-28 md:w-48 h-16 md:h-24 flex items-center justify-center border border-outline-variant/30 shadow-sm transition-colors cursor-pointer group"
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
