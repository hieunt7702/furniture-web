"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export function TopNavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const checkIsActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  const textColorClass = isTransparent ? "text-surface" : "text-primary";
  const textVariantClass = isTransparent ? "text-surface-container" : "text-on-surface-variant";
  const hoverColorClass = isTransparent ? "hover:text-surface" : "hover:text-primary";

  return (
    <>
      <motion.header 
        className={`w-full z-50 fixed top-0 transition-all duration-300 ${
          isScrolled 
            ? "bg-surface/95 backdrop-blur-md shadow-sm py-4 border-b border-surface-container" 
            : isHome 
              ? "bg-transparent py-6 border-b border-transparent" 
              : "bg-surface py-4 border-b border-surface-container"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto h-12">
          {/* Brand */}
          <Link className={`text-title-lg font-title-lg font-bold tracking-tight transition-colors duration-300 ${textColorClass}`} href="/">LUXURY</Link>
          
          {/* Links (Desktop) */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link.href);
              return (
                <li key={link.name}>
                  <Link 
                    className={`pb-1 text-label-sm font-label-sm transition-colors duration-200 ${
                      isActive 
                        ? `${textColorClass} font-bold border-b-2 ${isTransparent ? 'border-surface' : 'border-primary'}` 
                        : `${textVariantClass} ${hoverColorClass}`
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
              className={`transition-colors duration-200 hidden sm:block ${textVariantClass} ${hoverColorClass}`}
            >
              <Search size={22} strokeWidth={1.5} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors duration-200 ${textVariantClass} ${hoverColorClass}`}
            >
              <ShoppingCart size={22} strokeWidth={1.5} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-colors duration-200 hidden sm:block ${textVariantClass} ${hoverColorClass}`}
            >
              <User size={22} strokeWidth={1.5} />
            </motion.button>
            
            {/* Mobile Menu Toggle */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`md:hidden transition-colors ml-2 flex items-center ${textVariantClass} ${hoverColorClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6 flex flex-col md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-6 items-center w-full">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link.href);
                return (
                  <li key={link.name} className="w-full text-center">
                    <Link 
                      className={`block py-2 text-headline-sm font-headline-sm transition-colors duration-200 ${
                        isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
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
            <div className="flex justify-center gap-8 mt-12 w-full pt-8 border-t border-surface-container">
              <button className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-2">
                <Search size={24} strokeWidth={1.5} />
                <span className="text-label-sm">Search</span>
              </button>
              <button className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-2">
                <User size={24} strokeWidth={1.5} />
                <span className="text-label-sm">Profile</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
