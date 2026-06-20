import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FiInfo,
  FiBattery,
  FiMail,
  FiMenu,
  FiX,
  FiPhoneCall
} from "react-icons/fi";

const menuItems = [
  { 
    id: "about", 
    label: "About", 
    icon: <FiInfo className="w-4 h-4 mr-2" /> 
  },
  { 
    id: "products", 
    label: "Batteries", 
    icon: <FiBattery className="w-4 h-4 mr-2" /> 
  },
  { 
    id: "contact", 
    label: "Contact", 
    icon: <FiMail className="w-4 h-4 mr-2" /> 
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [pendingScroll, setPendingScroll] = useState(null); 
  
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const performScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const target = sectionTop - navHeight;

    window.scrollTo({ top: target, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleMobileNav = (id) => {
    setPendingScroll(id);
    setIsOpen(false);
  };

  const navBgClass = isScrolled ? "bg-base-100/95 backdrop-blur-md shadow-sm" : "bg-transparent";
  const textColorClass = isScrolled ? "text-base-content" : "text-white";
  const hoverColorClass = isScrolled ? "hover:text-primary" : "hover:text-primary-content";

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
    >
      <nav 
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <button
          onClick={() => performScroll("hero")}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Scroll to top"
        >
          <div className="bg-white p-1 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
            <img 
              src={logo} 
              alt="Mohammad Khan Auto Parts" 
              className="h-8 w-auto object-contain" 
            />
          </div>
          <span className={`text-xl font-bold hidden sm:block tracking-tight transition-colors duration-300 ${textColorClass}`}>
            Mohammad Khan
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => performScroll(item.id)}
                  className={`flex items-center font-medium transition-colors duration-200 ${textColorClass} ${hoverColorClass}`}
                >
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <a
            href="tel:+971543457768"
            className="btn btn-primary btn-sm h-10 px-6 rounded-full shadow-md hover:scale-105 transition-transform text-white"
            aria-label="Call for emergency battery replacement"
          >
            <FiPhoneCall className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence
        onExitComplete={() => {
          if (pendingScroll) {
            performScroll(pendingScroll);
            setPendingScroll(null);
          }
        }}
      >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-base-100 border-t border-base-200 overflow-hidden shadow-xl absolute w-full"
          >
            <ul className="flex flex-col px-6 py-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMobileNav(item.id)} 
                    className="w-full flex items-center text-base-content/80 hover:text-primary font-medium py-3 border-b border-base-200 last:border-0"
                  >
                    <span className="text-primary mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-4 pb-2">
                <a
                  href="tel:+971543457768"
                  className="btn btn-primary w-full text-white shadow-sm"
                >
                  <FiPhoneCall className="w-5 h-5 mr-2" />
                  Call Dispatch Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;