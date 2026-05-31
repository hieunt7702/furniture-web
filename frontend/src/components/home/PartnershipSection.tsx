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

  // Duplicate for seamless marquee effect
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-20 bg-surface border-y border-surface-container-high overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center mb-10">
        <h2 className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest">
          Trusted by the World's Finest Brands
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          className="flex gap-16 md:gap-32 items-center w-max pl-16 md:pl-32"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {marqueeLogos.map((brand, index) => (
            <Link
              key={index}
              href={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="w-24 md:w-32 h-12 md:h-16 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="w-full h-full object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
