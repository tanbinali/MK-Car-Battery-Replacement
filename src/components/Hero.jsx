import React from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiZap,
  FiShield,
  FiMapPin,
  FiPhone,
  FiCheckCircle
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import videoMp4 from "../assets/hero-video.mp4";
import videoWebm from "../assets/hero-video.webm";
import poster from "../assets/hero-poster.webp";
import mobposter from "../assets/hero-poster-mobile.webp";

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img
          src={mobposter}
          alt="Mechanic replacing a car battery in Abu Dhabi"
          className="w-full h-full object-cover md:hidden"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover hidden md:block"
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>
        {/* Heavy neutral overlay for readable text */}
        <div className="absolute inset-0 bg-neutral/70 backdrop-blur-[2px]" />
      </div>

      {/* Hero Content - Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy & CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="max-w-2xl text-left"
        >
          {/* SEO H1 Tag */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-content leading-tight tracking-tight mb-6">
            Fast Car Battery Replacement <br />
            <span className="text-accent">in Abu Dhabi</span>
          </h1>

          {/* SEO H2 Tag for document structure */}
          <h2 className="text-lg md:text-xl text-neutral-content/90 mb-8 leading-relaxed">
            Is your car refusing to start? We will come to your location. Get 24/7 on-site battery installation, jump-starts, and diagnostics anywhere in Abu Dhabi. 
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://wa.me/+971543457768"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg text-neutral-content w-full sm:w-auto shadow-lg hover:scale-105 transition-transform"
              aria-label="Request battery replacement via WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Message on WhatsApp
            </a>
            <a
              href="tel:+971543457768"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg text-primary-content w-full sm:w-auto shadow-lg hover:scale-105 transition-transform"
              aria-label="Call for immediate roadside assistance"
            >
              <FiPhone className="w-5 h-5 mr-2" />
              Call 24/7 Support
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-content/80 font-medium">
            <FiCheckCircle className="text-success w-4 h-4" />
            <span>Top brands in stock: VARTA, Bosch, Amaron, and ACDelco.</span>
          </div>
        </motion.div>

        {/* Right Column: Trust Badges / Info Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="w-full max-w-md mx-auto lg:ml-auto bg-neutral/40 border border-neutral-content/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          <h3 className="text-xl font-bold text-neutral-content mb-6 border-b border-neutral-content/10 pb-4">
            Why Choose Our Service?
          </h3>
          
          <ul className="space-y-6 text-neutral-content">
            <li className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <FiClock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <strong className="block text-lg font-semibold">Under 30-Minute Arrival</strong>
                <span className="text-sm opacity-80">Fast dispatch to get you back on the road quickly.</span>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <FiZap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <strong className="block text-lg font-semibold">Free Alternator Test</strong>
                <span className="text-sm opacity-80">We check your electrical system before replacing the battery.</span>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <FiShield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <strong className="block text-lg font-semibold">12 to 18-Month Warranty</strong>
                <span className="text-sm opacity-80">100% genuine batteries with guaranteed local warranty.</span>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <FiMapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <strong className="block text-lg font-semibold">Coverage Across Abu Dhabi</strong>
                <span className="text-sm opacity-80">Operating from Mussafah, serving the entire emirate.</span>
              </div>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;