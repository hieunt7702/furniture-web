"use client";

import { motion } from "framer-motion";

export function Hero() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
      <motion.div
        className="flex flex-col items-start gap-stack-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span variants={itemVariants} className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-widest">
          BIG SALE PRODUCT
        </motion.span>
        <motion.h1 variants={itemVariants} className="text-display-lg-mobile md:text-display-lg font-display-lg text-primary leading-tight">
          Decorate your Life with Arts
        </motion.h1>
        <motion.p variants={itemVariants} className="text-body-lg font-body-lg text-on-surface-variant max-w-md">
          Our passion for quality craftsmanship and innovative design fuels our commitment to bringing you a curated selection of premium furniture.
        </motion.p>
        <motion.button variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-tertiary text-on-tertiary rounded-full px-8 py-3 text-label-sm font-label-sm hover:opacity-90 transition-opacity">
          Explore
        </motion.button>
      </motion.div>

      <motion.div 
        className="relative w-full h-[450px] md:h-[600px] flex gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar md:justify-center items-center pb-4 md:pb-0 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={imageVariants} className="w-[85%] md:w-1/3 shrink-0 snap-center h-full md:h-3/4 bg-surface rounded-2xl p-4 flex flex-col justify-end relative shadow-sm overflow-hidden md:translate-y-8">
          <img alt="Royal Chair" className="absolute inset-0 w-full h-[80%] md:h-3/4 object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_ieiKGr769rmiWYjwZPDttbc5VPUQTgxewNAZ7pz1cbEiKz7OOQspRosUNgON7Y66JcmoDY6xPWwoPwCuj3YRIYLNgYJ4nqClXAtiQBsvj_4B7khTA4r3tWukLYxV81UpaL3JE95H_PijlzFpzp_BkX4m4ymS_lpz-rzXyGzYU37_x-Dxpm7g3qLuyLpkUWcjeWsZAY6yhGGE2yTGDlJggnJyDdaYBa-5St23hBn-Ux9xIGeLQCHhdPBzoKrF9jDo1L-ERUQF4uy"/>
          <div className="bg-surface/95 backdrop-blur-sm p-4 rounded-xl mt-auto z-10 shadow-sm border border-outline-variant/20">
            <span className="text-label-caps font-label-caps text-on-surface-variant">01</span>
            <h3 className="text-body-lg font-body-lg text-primary font-bold">Royal Chair</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant mt-1 line-clamp-1">Our passion for quality craftsmanship.</p>
          </div>
        </motion.div>
        <motion.div variants={imageVariants} className="w-[85%] md:w-1/3 shrink-0 snap-center h-full md:h-5/6 bg-surface rounded-2xl p-4 flex flex-col justify-end relative shadow-sm overflow-hidden md:-translate-y-8">
          <img alt="Royal Lamp" className="absolute inset-0 w-full h-[80%] md:h-3/4 object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIqBFbRgpgA-ATyD5JiyXxIUCdzhgVsI7S6edIsGYo7pePNUpl-y6LojzKKU-uBhNY48IfJToa2DuD7aY5pXEgurTILPB78_y4DvQgVz7l_f1h_S5fETX_6nQ2jBBK1NyMNsxECqnxz0LVmY7J-77MEsRLmXtkOVBT7EG1dIxMg_A4FP7dgekRYw-Py6qMb1wA3Um2lbt5yOnuHcvmRDy5pG04har53zMof0k7-Dd25JU3LkAAg9aCTC_BEd5CwMzOUBVYvRjskyQ0"/>
          <div className="bg-surface/95 backdrop-blur-sm p-4 rounded-xl mt-auto z-10 shadow-sm border border-outline-variant/20">
            <span className="text-label-caps font-label-caps text-on-surface-variant">02</span>
            <h3 className="text-body-lg font-body-lg text-primary font-bold">Royal Lamp</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant mt-1 line-clamp-1">Innovative design fuels our spaces.</p>
          </div>
        </motion.div>
        <motion.div variants={imageVariants} className="w-[85%] md:w-1/3 shrink-0 snap-center h-full md:h-3/4 bg-surface rounded-2xl p-4 flex flex-col justify-end relative shadow-sm overflow-hidden md:translate-y-4">
          <img alt="Roof Lamp" className="absolute inset-0 w-full h-[80%] md:h-3/4 object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADS37b-xnH5gooa9Dm-L2R7n_uolXC2Kw3xTwgBmp3nCk8MbzgWDSe5LJ8F52aGfGH5mF7rwnVviFi0XvQNltJ6zJkFRph5z_eZfSRoZB3OACDPlK1DHQUjqReJrXJJKreYcajuY2yYTLFUMzkdBWlUR2FZqDuotpuPsjWCqoAmrwAGJinBvCrKrao_TF_OanfLx9WEo4H7drqQvDB6YBAOvoc-EQb_YxoRzCvH-KbwWLR7YhzPrGsQhfMCki03aa22KGjUvUJ0uXk"/>
          <div className="bg-surface/95 backdrop-blur-sm p-4 rounded-xl mt-auto z-10 shadow-sm border border-outline-variant/20">
            <span className="text-label-caps font-label-caps text-on-surface-variant">03</span>
            <h3 className="text-body-lg font-body-lg text-primary font-bold">Roof Lamp</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant mt-1 line-clamp-1">Craftsmanship and innovative aesthetic.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
