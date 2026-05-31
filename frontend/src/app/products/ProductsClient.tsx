"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const ALL_PRODUCTS = [
  { slug: "minotti-freeman-sofa", name: "Freeman Seating System", brand: "MINOTTI", price: "$8,500", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
  { slug: "poliform-mondrian-sofa", name: "Mondrian Sofa", brand: "POLIFORM", price: "$9,200", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" },
  { slug: "bb-italia-camaleonda", name: "Camaleonda Modular Sofa", brand: "B&B ITALIA", price: "$12,000", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" },
  { slug: "roche-bobois-mah-jong", name: "Mah Jong Sofa", brand: "ROCHE BOBOIS", price: "$15,500", image: "https://images.unsplash.com/photo-1540574163026-643ea20d592e?auto=format&fit=crop&w=800&q=80" },
  { slug: "boconcept-osaka", name: "Osaka Sofa", brand: "BOCONCEPT", price: "$3,400", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
  { slug: "kartell-lou-ghost", name: "Lou Ghost Chair", brand: "KARTELL", price: "$450", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" },
  { slug: "minotti-torii-chair", name: "Torii Armchair", brand: "MINOTTI", price: "$2,800", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80" },
  { slug: "poliform-concorde", name: "Concorde Table", brand: "POLIFORM", price: "$5,600", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80" },
];

const BRANDS = ["All", "MINOTTI", "POLIFORM", "B&B ITALIA", "ROCHE BOBOIS", "BOCONCEPT", "KARTELL"];

export function ProductsClient({ initialBrand }: { initialBrand: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeBrand, setActiveBrand] = useState(initialBrand);

  useEffect(() => {
    const brandParam = searchParams.get("brand");
    if (brandParam && BRANDS.includes(brandParam)) {
      setActiveBrand(brandParam);
    }
  }, [searchParams]);

  const handleBrandClick = (brand: string) => {
    setActiveBrand(brand);
    if (brand === "All") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?brand=${encodeURIComponent(brand)}`, { scroll: false });
    }
  };

  const filteredProducts = activeBrand === "All"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.brand === activeBrand);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary mb-4"
        >
          Our Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Explore the finest luxury furniture from world-renowned brands, crafted for sophisticated living spaces.
        </motion.p>
      </div>

      {/* Brand Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {BRANDS.map((brand) => (
          <button
            key={brand}
            onClick={() => handleBrandClick(brand)}
            className={`px-6 py-2 rounded-full text-label-sm font-label-sm transition-all duration-300 ${activeBrand === brand
                ? "bg-tertiary text-on-tertiary shadow-md"
                : "bg-transparent text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary"
              }`}
          >
            {brand}
          </button>
        ))}
      </motion.div>

      {/* Product Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-lg">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={product.slug}
              className="group cursor-pointer"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="bg-surface-container-low rounded-2xl overflow-hidden aspect-[4/5] relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-primary">
                    {product.brand}
                  </div>
                </div>
                <div>
                  <h3 className="text-body-lg font-body-lg text-primary font-medium">{product.name}</h3>
                  <p className="text-label-sm font-label-sm text-on-surface-variant mt-1">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-body-lg text-on-surface-variant">No products found for this brand.</p>
        </div>
      )}
    </div>
  );
}
