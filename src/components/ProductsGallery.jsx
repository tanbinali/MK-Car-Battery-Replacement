import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn, FiX } from "react-icons/fi";

// Image Imports
import amaron from "../assets/Batteries/Amaron-din661.webp";
import fiamm from "../assets/Batteries/FIAMM-Titanium-Pro-L2X-64P_enl.webp";
import platinum from "../assets/Batteries/PLATINUM 55530.webp";
import sebang from "../assets/Batteries/SEBANG.webp";
import tuflong from "../assets/Batteries/tuflong-battery-_1_.webp";
import vartaAGM from "../assets/Batteries/VARTA AGM.webp";
import vartaBlue from "../assets/Batteries/VARTA Blue.webp";
import vartaDynamic from "../assets/Batteries/VARTA Dynamic SLI.webp";

// Enhanced alt text for better SEO indexing
const productImages = [
  { src: amaron, alt: "Amaron DIN661 car battery replacement", caption: "Amaron DIN661" },
  { src: fiamm, alt: "FIAMM Titanium Pro L2X-64P automotive battery", caption: "FIAMM Titanium Pro" },
  { src: platinum, alt: "Platinum 55530 heavy duty car battery", caption: "Platinum 55530" },
  { src: sebang, alt: "Sebang car battery installation Abu Dhabi", caption: "Sebang Battery" },
  { src: tuflong, alt: "Tuflong reliable car battery", caption: "Tuflong Battery" },
  { src: vartaAGM, alt: "VARTA AGM high performance car battery", caption: "VARTA AGM" },
  { src: vartaBlue, alt: "VARTA Blue dynamic car battery", caption: "VARTA Blue" },
  { src: vartaDynamic, alt: "VARTA Dynamic SLI standard car battery", caption: "VARTA Dynamic SLI" },
];

const ProductsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Clean stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="products"
      className="py-20 bg-base-100"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
          >
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-6 tracking-tight"
            >
              Top-Brand Batteries We Install
            </h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              We stock and install genuine, high-performance batteries from the world's most trusted brands. Every battery includes an official manufacturer warranty.
            </p>
          </motion.div>
        </div>

        {/* Semantic Masonry Gallery */}
        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {productImages.map((img, index) => (
            <motion.figure
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedImage(img)}
              className="break-inside-avoid relative rounded-xl overflow-hidden bg-base-200 border border-base-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              {/* Product Image */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FiZoomIn className="w-8 h-8 text-white drop-shadow-md" />
              </div>

              {/* Visible Caption */}
              <figcaption className="absolute bottom-3 left-3 bg-base-100/90 backdrop-blur-sm text-base-content text-sm font-medium px-3 py-1.5 rounded-lg border border-base-300 shadow-sm">
                {img.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral/90 backdrop-blur-sm p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              
              <button
                className="absolute -top-12 right-0 sm:-right-12 text-white/80 hover:text-white bg-neutral p-2 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                <FiX className="w-6 h-6" />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                loading="lazy"
                className="w-auto max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl bg-base-100"
              />
              
              <div className="mt-4 text-white text-lg font-medium tracking-wide drop-shadow-md">
                {selectedImage.caption}
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsGallery;