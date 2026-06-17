import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall, FiMessageSquare, FiX } from "react-icons/fi";

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFab = () => setIsOpen((prev) => !prev);

  // Animation variants for the action buttons
  const actionVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 15, scale: 0.8 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
            }}
          >
            {/* WhatsApp Action */}
            <motion.a
              variants={actionVariants}
              href="https://wa.me/+971543457768"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-success text-white shadow-lg hover:scale-110 transition-transform"
              aria-label="Message on WhatsApp"
            >
              <FaWhatsapp className="w-7 h-7" />
            </motion.a>

            {/* Call Action */}
            <motion.a
              variants={actionVariants}
              href="tel:+971543457768"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-primary-content shadow-lg hover:scale-110 transition-transform"
              aria-label="Call for emergency battery replacement"
            >
              <FiPhoneCall className="w-6 h-6" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button
        onClick={toggleFab}
        className="w-16 h-16 flex items-center justify-center rounded-full bg-neutral text-neutral-content shadow-2xl hover:scale-105 transition-transform"
        aria-label="Toggle contact menu"
        aria-expanded={isOpen}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isOpen ? (
            <FiX className="w-8 h-8" />
          ) : (
            <FiMessageSquare className="w-7 h-7" />
          )}
        </motion.div>
      </button>
    </div>
  );
};

export default FAB;