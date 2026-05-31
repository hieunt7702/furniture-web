"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function TopNavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/#categories" },
    { name: "About us", href: "/#about" },
    { name: "Blog", href: "/#blog" },
  ];

  const checkIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false; // Anchor links don't get active highlighting via pathname
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header 
        className={`w-full z-50 sticky top-0 transition-all duration-300 ${
          isScrolled ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-surface-container" : "bg-background border-b border-surface-container"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-20">
          {/* Brand */}
          <Link className="text-title-lg font-title-lg font-bold text-primary tracking-tight" href="/">LUXURY</Link>
          
          {/* Links (Desktop) */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link.href);
              return (
                <li key={link.name}>
                  <Link 
                    className={`pb-1 text-label-sm font-label-sm transition-colors duration-200 ${
                      isActive 
                        ? "text-primary font-bold border-b-2 border-primary" 
                        : "text-on-surface-variant hover:text-primary"
                    }`} 
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          {/* Actions */}
          <div className="flex gap-4 items-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-primary transition-colors duration-200 text-on-surface-variant hidden sm:block"
            >
              <span className="material-symbols-outlined" data-icon="search">search</span>
            </motion.button>
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
              className="hover:text-primary transition-colors duration-200 text-on-surface-variant hidden sm:block"
            >
              <span className="material-symbols-outlined" data-icon="person">person</span>
            </motion.button>
            
            {/* Mobile Menu Toggle */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-on-surface-variant hover:text-primary transition-colors ml-2 flex items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-title-md">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-md pt-24 px-margin-mobile flex flex-col md:hidden border-b border-outline-variant/30 shadow-lg h-fit pb-8"
          >
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.href);
                return (
                  <li key={link.name}>
                    <Link 
                      className={`text-headline-sm font-headline-sm transition-colors duration-200 block w-full py-2 ${
                        isActive
                          ? "text-primary font-bold bg-surface-container-low rounded-lg" 
                          : "text-on-surface-variant"
                      }`} 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
