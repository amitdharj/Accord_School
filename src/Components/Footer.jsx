import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and Address */}
        <div>
          <img src="/images/-logo.png" alt=" Logo" className="w-28 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Zee Learn Limited</h3>
          <p className="text-sm leading-6">
            135, Continental Building, B wing, Worli, <br />
            Mumbai, Maharashtra 400 018.
          </p>
        </div>

        {/* Links Column 1 */}
        <div>
          <ul className="space-y-2 text-sm">
            <li>PlayGroup</li>
            <li>Nursery</li>
            <li>Kindergarten</li>
            <li>Teacher Training Programme</li>
            <li>Privacy Policy</li>
            <li>Elementary School</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <ul className="space-y-2 text-sm">
            <li>DayCare</li>
            <li>Péntemind</li>
            <li>Blog</li>
            <li>In News</li>
            <li>Locate Us</li>
            <li>Our Presence</li>
          </ul>
        </div>

        {/* Contact and Video */}
        <div className="space-y-4">
          {/* YouTube Video */}
          <div className="mb-4">
            <iframe
              width="100%"
              height="150"
              src="https://www.youtube.com/embed/HvZVvPbVtr4"
              title=" Video"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="tel:+919320063100">+91 93200 63100</a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:care@achdj.com">care@bfgh.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FaClock /> 10:00 a.m. to 06:00 p.m., Mon–Fri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
