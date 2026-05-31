"use client";

import { motion } from "framer-motion";

export function BlogSection() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-section-gap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="text-center mb-12">
        <motion.h2 variants={itemVariants} className="text-headline-md font-headline-md text-primary mb-4">Our Blog and News</motion.h2>
        <motion.p variants={itemVariants} className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus lectus</motion.p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
        {/* Blog 1 */}
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 group shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden h-64">
            <img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLJZ44D4Y8LFTKzquEKf1y9VfEv0bxTZO8rM63LWmF8U7zSEMIg-iS62g7qWw1Cteeg9LsR2SlypTPhU5Jc79jsPvmYdqYIQuXHkOqZNlZ3eW-fHdkyEhcxVcMKjM_YflF4Okd2AACXsafiz-KfKZ5bwPlc31ada_LAUEzDudi2K-8nhH0Jj02Vz5N1CyudbbFG_BkuI1lPxIOKF5meLyOvZy0_5pFTyMY1cNka6t8wRgB1NwcZOAmQ8P6NfGhWmbxy68_CxPwhzyd"/>
          </div>
          <div className="p-8 text-center flex flex-col items-center">
            <h3 className="text-headline-sm font-headline-sm text-primary font-bold mb-2">Best Way to find best Furniture</h3>
            <p className="text-label-sm font-label-sm text-outline mb-4">Admin April 9, 2026</p>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6 line-clamp-3">Lorem ipsum dolor sit amet consectetur. Enim a diam urna sed. Leo in habitasse purus sed feugiat bibendum lacus odio diam. Tellus fermentum id ut vitae amet.</p>
            <button className="bg-tertiary text-on-tertiary rounded-full px-8 py-2 text-label-sm font-label-sm hover:opacity-90 transition-opacity">Read More</button>
          </div>
        </motion.div>
        
        {/* Blog 2 */}
        <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 group shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="overflow-hidden h-64">
            <img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHnCWW-UAjwzWmqMd6N2kqrlkD_H9I-bhh0hUU46gJYbJq6TlluMScPIDPHjR3pbTQXwRShhUHl4m5LCl2LZfGWawYVK6CXcbZ3o-FnAeX9yqpxVAzxasjoVhLTojh5pboTfdC70X2_rpauUTyOA4UoC7wTL_RN604pCt-p_Mr3P7WBPtXg2T0GBx6L2Aa0nGscC8ieJLu_NV0acdBKv2K6V6PTSoiOaEWXFY2xpr9u2skiwTPoJlgPR6mpj0zc3Bj3JpeTIhMDqgh"/>
          </div>
          <div className="p-8 text-center flex flex-col items-center">
            <h3 className="text-headline-sm font-headline-sm text-primary font-bold mb-2">Best Way to find best Furniture</h3>
            <p className="text-label-sm font-label-sm text-outline mb-4">Admin April 9, 2026</p>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6 line-clamp-3">Lorem ipsum dolor sit amet consectetur. Enim a diam urna sed. Leo in habitasse purus sed feugiat bibendum lacus odio diam. Tellus fermentum id ut vitae amet.</p>
            <button className="bg-tertiary text-on-tertiary rounded-full px-8 py-2 text-label-sm font-label-sm hover:opacity-90 transition-opacity">Read More</button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
