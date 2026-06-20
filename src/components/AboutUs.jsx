import React from "react";
import { motion } from "framer-motion";
import {
  FiZap,
  FiTool,
  FiShield,
  FiClock,
  FiMapPin,
  FiCrosshair,
  FiAward
} from "react-icons/fi";
import Banner500 from "../assets/Banner-500.webp";
import Banner768 from "../assets/Banner-768.webp";
import Banner1024 from "../assets/Banner-1024.webp";

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Mohammad Khan Car Replacement",
  description: "24/7 on-site car battery replacement and jump-start services in Abu Dhabi.",
  image: "https://mkcarbatteries.com/banner.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mussafah",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  openingHours: "Mo-Su 00:00-23:59",
  telephone: "+971543457768",
  url: "https://mkcarbatteries.com",
};

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-base-100" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="max-w-2xl">
            <motion.h2 
              id="about-heading" 
              variants={cardVariants}
              className="text-4xl sm:text-5xl font-bold text-base-content mb-6 tracking-tight leading-tight"
            >
              We Bring the Garage <br className="hidden sm:block" />
              <span className="text-primary">Directly to You.</span>
            </motion.h2>
            <motion.p variants={cardVariants} className="text-lg text-base-content/80 leading-relaxed">
              If your car battery dies in Abu Dhabi, skip the tow truck. Our mobile technicians dispatch immediately to test, jump-start, or replace your dead battery exactly where you are parked.
            </motion.p>
          </div>
          
          <motion.div variants={cardVariants} className="flex items-center gap-2 text-base-content/70 pb-2">
            <FiMapPin className="w-5 h-5 text-accent" />
            <span className="font-medium">Operating all over Abu Dhabi</span>
          </motion.div>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Main Image Banner (Spans 8 columns) */}
          <motion.figure 
            variants={cardVariants}
            className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[350px] md:min-h-[450px] border border-base-300 shadow-sm"
          >
            <img
              srcSet={`
                ${Banner500} 500w,
                ${Banner768} 768w,
                ${Banner1024} 1024w
              `}
              sizes="(max-width: 768px) 100vw, 66vw"
              src={Banner1024}
              alt="Technician replacing a car battery on-site in Abu Dhabi"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-neutral/20 to-transparent" />
            
            <figcaption className="absolute bottom-0 left-0 p-8">
              <span className="inline-block px-4 py-1.5 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-full mb-3">
                Since 1999
              </span>
              <p className="text-white text-xl sm:text-2xl font-medium max-w-md leading-snug">
                Supplying drivers with genuine, heavy-duty batteries built for the UAE climate.
              </p>
            </figcaption>
          </motion.figure>

          {/* Stats Stack (Spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Experience Card */}
            <motion.div variants={cardVariants} className="flex-1 bg-primary text-primary-content rounded-3xl p-8 flex flex-col justify-center items-start shadow-sm">
              <FiAward className="w-10 h-10 mb-4 opacity-80" />
              <strong className="text-5xl font-bold tracking-tighter mb-2">25+</strong>
              <span className="text-lg font-medium opacity-90">Years of Experience</span>
            </motion.div>

            {/* Availability Card */}
            <motion.div variants={cardVariants} className="flex-1 bg-base-200 text-base-content rounded-3xl p-8 flex flex-col justify-center items-start border border-base-300 shadow-sm">
              <FiClock className="w-10 h-10 mb-4 text-accent" />
              <strong className="text-4xl font-bold tracking-tighter mb-2">24/7</strong>
              <span className="text-lg font-medium text-base-content/80">Emergency Dispatch</span>
            </motion.div>
            
          </div>
        </motion.div>

        {/* Core Services Grid */}
        <motion.ul 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.li variants={cardVariants} className="bg-base-200/50 rounded-2xl p-6 border border-base-300 hover:bg-base-200 transition-colors">
            <FiZap className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-base-content mb-2">Mobile Installation</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">We deliver and install your new battery exactly where your car is parked.</p>
          </motion.li>

          <motion.li variants={cardVariants} className="bg-base-200/50 rounded-2xl p-6 border border-base-300 hover:bg-base-200 transition-colors">
            <FiTool className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-base-content mb-2">Instant Jump-Starts</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">Not a dead battery? We provide rapid jump-starts to get your engine turning.</p>
          </motion.li>

          <motion.li variants={cardVariants} className="bg-base-200/50 rounded-2xl p-6 border border-base-300 hover:bg-base-200 transition-colors">
            <FiCrosshair className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-base-content mb-2">Free Diagnostics</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">We test your alternator and starter to ensure you actually need a replacement.</p>
          </motion.li>

          <motion.li variants={cardVariants} className="bg-base-200/50 rounded-2xl p-6 border border-base-300 hover:bg-base-200 transition-colors">
            <FiShield className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-base-content mb-2">Full Warranty</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">Drive safe with a 12 to 18-month official manufacturer warranty on top brands.</p>
          </motion.li>
        </motion.ul>

      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default AboutUs;