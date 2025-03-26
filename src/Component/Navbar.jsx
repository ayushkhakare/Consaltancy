import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Menu Toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md py-1 sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo & Branding */}
        <NavLink to="/" className="flex items-center space-x-3 cursor-pointer">
          <img src="/logo.png" alt="Logo" className="h-14 w-14 shadow-sm" />
          <div>
            <span className="text-sm sm:text-xl md:text-xl lg:text-xl font-bold text-[#0D0D46] tracking-wide hover:text-gray-600 transition">
              Thanosphere Solutions
            </span>
            <br />
            <span className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-600">
              DESIGN • OPTIMIZE • TRANSFORM
            </span>
          </div>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-[#0D0D46] focus:outline-none"
        >
          <FiMenu />
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li>
            <NavLink to="/" className="hover:text-[#0D0D46] transition duration-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutdetails" className="hover:text-[#0D0D46] transition duration-300">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className="hover:text-[#0D0D46] transition duration-300">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-[#0D0D46] transition duration-300">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-2xl text-[#0D0D46] focus:outline-none"
        >
          <FiX />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-start px-8 pt-20 space-y-6 text-lg font-semibold">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-[#0D0D46] transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-[#0D0D46] transition duration-300"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-[#0D0D46] transition duration-300"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutdetails"
              onClick={() => setIsOpen(false)}
              className="block py-2 hover:text-[#0D0D46] transition duration-300"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
