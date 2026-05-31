"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function TopNavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      className={`w-full z-50 sticky top-0 transition-colors duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-surface-container" : "bg-background border-b border-surface-container"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20">
        {/* Brand */}
        <Link className="text-headline-sm font-headline-sm font-bold text-primary" href="#">Cozy</Link>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link className="text-primary font-bold border-b-2 border-primary pb-1 text-label-sm font-label-sm" href="/">Home</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-sm font-label-sm" href="/products">Products</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-sm font-label-sm" href="/#categories">Categories</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-sm font-label-sm" href="/#about">About us</Link>
          </li>
          <li>
            <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-label-sm font-label-sm" href="/#blog">Blog</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-primary transition-colors duration-200 text-on-surface-variant"
          >
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-primary transition-colors duration-200 text-on-surface-variant"
          >
            <span className="material-symbols-outlined" data-icon="person">person</span>
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
