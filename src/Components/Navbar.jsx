import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full z-10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold font0-sans-serif text-fuchsia-800">Little Accord Public School</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-7 text-gray-700">
          <li>Home</li>
          <li>About</li>
          <li>Programs</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.ul
          className="md:hidden bg-white text-gray-700 flex flex-col px-6 pb-4 space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Programs</li>
          <li>Gallery</li>
          <li>Contact</li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
