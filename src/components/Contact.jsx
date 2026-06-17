import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall, FiClock, FiMapPin } from "react-icons/fi";

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Mohammad Khan Car Battery Replacement",
  description: "24/7 on-site car battery replacement and jump-start services in Abu Dhabi.",
  serviceType: "On-Site Car Battery Replacement",
  areaServed: "Abu Dhabi, UAE",
  telephone: "+971543457768",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971543457768",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
  },
  url: "https://mohammadkhanautoparts.com",
};

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-base-200"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context & Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="max-w-lg"
          >
            <motion.h2
              id="contact-heading"
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-6 tracking-tight"
            >
              Need a Battery Now? <br />
              <span className="text-primary">We Are Ready.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-base-content/80 mb-8 leading-relaxed">
              Contact our dispatch team for immediate roadside assistance anywhere in Abu Dhabi. We arrive quickly with the exact battery your vehicle requires.
            </motion.p>

            <motion.address variants={itemVariants} className="not-italic flex flex-col gap-5 text-base-content/80">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-base-100 rounded-lg shadow-sm text-primary shrink-0">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-base-content font-semibold text-lg">24/7 Dispatch</strong>
                  <span>We answer calls and messages around the clock.</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-base-100 rounded-lg shadow-sm text-primary shrink-0">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-base-content font-semibold text-lg">Coverage Area</strong>
                  <span>Serving all of Abu Dhabi city.</span>
                </div>
              </div>
            </motion.address>
          </motion.div>

          {/* Right Column: Action Tiles */}
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Call Action Tile */}
            <motion.a
              variants={itemVariants}
              href="tel:+971543457768"
              className="group flex items-center p-6 sm:p-8 bg-base-100 rounded-2xl border border-base-300 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              aria-label="Call our 24/7 dispatch"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300 shrink-0">
                <FiPhoneCall className="w-8 h-8" />
              </div>
              <div className="ml-6">
                <span className="block text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-1">
                  Call Direct
                </span>
                <strong className="block text-2xl sm:text-3xl font-bold text-base-content group-hover:text-primary transition-colors">
                  +971 54 345 7768
                </strong>
                <span className="block text-sm text-base-content/70 mt-1">
                  Tap to speak with a technician immediately.
                </span>
              </div>
            </motion.a>

            {/* WhatsApp Action Tile */}
            <motion.a
              variants={itemVariants}
              href="https://wa.me/+971543457768"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-6 sm:p-8 bg-base-100 rounded-2xl border border-base-300 shadow-sm hover:shadow-md hover:border-success/30 transition-all duration-300"
              aria-label="Message us on WhatsApp"
            >
              <div className="p-4 rounded-full bg-success/10 text-success group-hover:bg-success group-hover:text-white transition-colors duration-300 shrink-0">
                <FaWhatsapp className="w-8 h-8" />
              </div>
              <div className="ml-6">
                <span className="block text-sm font-semibold text-base-content/60 uppercase tracking-wider mb-1">
                  WhatsApp Support
                </span>
                <strong className="block text-2xl sm:text-3xl font-bold text-base-content group-hover:text-success transition-colors">
                  Send a Message
                </strong>
                <span className="block text-sm text-base-content/70 mt-1">
                  Share your location pin for a fast quote.
                </span>
              </div>
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
};

export default Contact;