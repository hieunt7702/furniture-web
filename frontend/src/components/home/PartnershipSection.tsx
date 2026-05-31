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
    { name: "Herman Miller", src: "/logos/herman-miller.svg" },
    { name: "IKEA", src: "/logos/ikea.svg" },
    { name: "Kartell", src: "/logos/kartell.svg" },
    { name: "Knoll", src: "/logos/knoll.svg" },
    { name: "Vitra", src: "/logos/vitra.svg" }
  ];

  // Duplicate for seamless marquee effect
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full py-16 border-y border-surface-container-high bg-surface-container-lowest overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-label-caps text-on-surface-variant uppercase tracking-widest">
          Trusted by the World's Finest Brands
        </span>
      </div>
      <div className="relative flex w-full">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {marqueeLogos.map((brand, index) => (
            <div key={index} className="flex-none w-32 md:w-40 mx-4 md:mx-6 h-10 md:h-12 relative flex items-center justify-center group cursor-pointer">
              <img 
                src={brand.src} 
                alt={brand.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
