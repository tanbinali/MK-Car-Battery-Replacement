import React from "react";
import { motion } from "framer-motion";
import {
  FiZap,
  FiClock,
  FiTool,
  FiShield,
} from "react-icons/fi";

const Cards = () => {
  const cardData = [
    {
      title: "Install Genuine Batteries",
      description:
        "Choose from trusted brands like VARTA, Bosch, Amaron, and ACDelco. We install factory-fresh batteries built to handle UAE weather.",
      icon: <FiZap className="w-8 h-8" />,
    },
    {
      title: "Arrive in 30 Minutes",
      description:
        "Don't wait around in the heat. Our dispatch team sends a technician to your exact location in Abu Dhabi or Mussafah immediately.",
      icon: <FiClock className="w-8 h-8" />,
    },
    {
      title: "Get Free Diagnostics",
      description:
        "We test your alternator and starter before removing your old battery. You only pay for a replacement if you actually need one.",
      icon: <FiTool className="w-8 h-8" />,
    },
    {
      title: "Secure Your Warranty",
      description:
        "Drive away with a 12 to 18-month replacement warranty. If your battery fails under warranty, we replace it on the spot.",
      icon: <FiShield className="w-8 h-8" />,
    },
  ];

  // Clean, staggered animation variants
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
      id="choose-us"
      className="py-20 bg-base-100"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-6 tracking-tight"
          >
            Reliable Car Battery Services
          </h2>
          <p className="text-lg text-base-content/80 leading-relaxed">
            When your car refuses to start, you need fast help. We deliver top-brand batteries and professional installation directly to your location anywhere in Abu Dhabi.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cardData.map((card, index) => (
            <motion.li key={index} variants={itemVariants}>
              <article className="h-full bg-base-200/50 rounded-2xl p-8 border border-transparent hover:border-primary/20 hover:bg-base-200 transition-colors duration-300 flex flex-col items-start">
                
                <div className="mb-6 p-4 rounded-xl bg-base-100 text-primary shadow-sm">
                  {card.icon}
                </div>

                <h3 className="text-xl font-semibold text-base-content mb-3">
                  {card.title}
                </h3>

                <p className="text-base-content/70 leading-relaxed text-sm sm:text-base">
                  {card.description}
                </p>
                
              </article>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
};

export default Cards;