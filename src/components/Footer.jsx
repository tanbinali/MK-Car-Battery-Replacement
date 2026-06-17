import React from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-neutral-content/10 pb-10">
          
          {/* Brand & About */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Mohammad Khan Car Battery Replacement Logo" 
                className="w-10 h-10 object-contain bg-white rounded-lg p-1" 
                loading="lazy" 
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Mohammad Khan Car Battery Replacement
              </span>
            </div>
            <p className="text-neutral-content/70 text-sm leading-relaxed max-w-xs">
              Delivering reliable 24/7 on-site car battery replacement, delivery, and jump-start services across Abu Dhabi.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <address className="not-italic flex flex-col gap-4 text-sm text-neutral-content/80">
              <a 
                href="tel:+971543457768" 
                className="flex items-center gap-2 hover:text-primary transition-colors" 
                aria-label="Call 24/7 dispatch"
              >
                <FiPhone className="w-5 h-5 shrink-0" />
                +971 54 345 7768
              </a>
              <a 
                href="https://wa.me/+971543457768" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-success transition-colors" 
                aria-label="Message us on WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 shrink-0" />
                Message on WhatsApp
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center sm:text-left text-sm text-neutral-content/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            Copyright © {currentYear} Mohammad Khan Car Battery Replacement. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;