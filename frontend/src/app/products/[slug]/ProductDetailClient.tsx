"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  slug: string;
  name: string;
  brand: string;
  price: string;
  description: string;
  images: string[];
  dimensions: string;
  materials: string;
  delivery: string;
}

export function ProductDetailClient({ product }: { product: Product }) {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-24">
      {/* Breadcrumbs */}
      <motion.nav 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-label-sm font-label-sm text-outline mb-8"
      >
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
        <span className="mx-2">/</span>
        <Link href={`/products?brand=${encodeURIComponent(product.brand)}`} className="hover:text-primary transition-colors">{product.brand}</Link>
        <span className="mx-2">/</span>
        <span className="text-primary">{product.name}</span>
      </motion.nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {product.images.map((img, idx) => (
            <div key={idx} className="bg-surface-container-low rounded-2xl overflow-hidden aspect-square md:aspect-[4/3]">
              <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Right: Product Info (Sticky) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:sticky lg:top-32 h-fit flex flex-col gap-8"
        >
          <div>
            <span className="text-label-caps font-label-caps text-outline uppercase tracking-widest block mb-2">{product.brand}</span>
            <h1 className="text-display-lg-mobile md:text-headline-md font-headline-md text-primary mb-4">{product.name}</h1>
            <p className="text-headline-sm font-headline-sm text-on-surface-variant">{product.price}</p>
          </div>

          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button className="flex-1 bg-tertiary text-on-tertiary py-4 rounded-full text-label-sm font-label-sm hover:opacity-90 transition-opacity">
              Add to Cart
            </button>
            <button className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
              <span className="material-symbols-outlined" data-icon="favorite_border">favorite_border</span>
            </button>
          </div>

          <div className="border-t border-outline-variant/30 pt-8 mt-4 flex flex-col gap-6">
            <div>
              <h3 className="text-body-lg font-body-lg text-primary font-medium mb-2">Dimensions</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">{product.dimensions}</p>
            </div>
            <div>
              <h3 className="text-body-lg font-body-lg text-primary font-medium mb-2">Materials</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">{product.materials}</p>
            </div>
            <div>
              <h3 className="text-body-lg font-body-lg text-primary font-medium mb-2">Delivery & Returns</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">{product.delivery}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
