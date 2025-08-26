import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setMenuOpen(false); // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full z-50"
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold font-sans-serif text-fuchsia-800">
          Little Accord Public School
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-gray-700">
          <li className="hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Home</li>
          <li className="hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">About</li>
          <li className="hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Programs</li>
          <li className="hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Gallery</li>
          <li className="hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Contact</li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-xl hover:text-fuchsia-800 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.ul
          className="md:hidden bg-white text-gray-700 flex flex-col px-6 pb-4 space-y-2 border-t border-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <li className="py-2 hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Home</li>
          <li className="py-2 hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">About</li>
          <li className="py-2 hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Programs</li>
          <li className="py-2 hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Gallery</li>
          <li className="py-2 hover:text-fuchsia-800 cursor-pointer transition-colors duration-200">Contact</li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;