"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  const textVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
      <motion.div 
        className="relative w-full h-[600px] flex gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <img alt="Interior setup" className="w-2/3 h-full object-cover rounded-xl shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHj8WzzvK2dqnQzjGN_thC2n2wf16EytS5mHVQnmYZjnCr-tRzfzffXhPD_wG7yNyKpWAnWG9KaojpSQC29UDCdLkqDktT8W1RHgYulXMqjGZVzvQobj93RZZg4tnBu1pHWjnaFVs-oV7L8kFi-w5cpef2987OSFJDm3Ks_6vBfLynCxwe3-g8hVWEQuhYsWt3N3ynVRTzSzgeYSt5YE2dmdGva9Itf_CrLGLhCUuapz_RM8-98kugwQNIhqP0ectfxPV1Ive7yk3A"/>
        <div className="w-1/3 flex flex-col gap-4 pt-16">
          <img alt="Interior setup" className="w-full h-1/2 object-cover rounded-xl shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk3zzp2cj7ubqlVfhgvUwm-TBSB_pidV4cPJglzfIULnlWKGmzgeY9yOJXJRGmDXSW6m3uxaVJx7W_PoOgNP0nYR_LmMEnXDG7qSM80IO3PnLp1g0DSNnARCQCP6sf3zTU6QcFyAGRHZUVBMGsStUydT03rm99Vy98F8sHlRedQunmPP4t34FuVtdXrIufkMWa6hipRU1V7AXVAa1X4fqq3uFDNLtRvvKdVjzKgGFTZy11DDNeJGIZ9k6qsbRW6CCxbqirSeiI0eVu"/>
          <img alt="Interior setup" className="w-full h-1/2 object-cover rounded-xl shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAle5FkCLbzEw3Gy_KMBwVLLf5XXvVgKKMKZ-p6vb2GPWkAbAtJGbi9bnyOt8EhZmwUDZX2TeCu-YLJWvRklabG4byzkV89KKY_kuC8dLooGpxp-WtTlojpcas44wUsdbbydfnrFWcowp2f8QrF9jKWh9epTjxlSL5pfuPgVi8X1bst4pWfkt2_vmIFClt9RccjGu1XM89ngpCo9K182NBLRzNhay1Rz65I7NepQ4-HZR9aXi72ohWnSaJRW5ayvONyezW82pxqjFMB"/>
        </div>
      </motion.div>
      <motion.div 
        className="flex flex-col items-start gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <h2 className="text-headline-md font-headline-md text-primary">About Us</h2>
        <div className="space-y-4 text-body-md font-body-md text-on-surface-variant">
          <p>Welcome to Cozy Furniture Website where we believe that every piece of furniture tells a unique story. At our online store, we curate a diverse collection of modern and timeless pieces that blend form, function, and style to transform your living spaces.</p>
          <p>Our passion for quality craftsmanship and innovative design fuels our commitment to bringing you a carefully selected range of furniture that suits.</p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-4 w-full">
          <div>
            <h3 className="text-headline-sm font-headline-sm text-primary font-bold">1K+</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Furniture</p>
          </div>
          <div>
            <h3 className="text-headline-sm font-headline-sm text-primary font-bold">100K+</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Happy Customer</p>
          </div>
          <div>
            <h3 className="text-headline-sm font-headline-sm text-primary font-bold">1K+</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Award winning</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
