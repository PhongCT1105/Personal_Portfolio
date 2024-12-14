import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-md px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-28 md:w-36" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <a
            className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            href="#about"
          >
            About
          </a>
          <a
            className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md focus:outline-none"
          onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <a
              className="block text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 px-3 py-2 rounded-md transition duration-300"
              href="#about"
              onClick={() => setmMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              className="block text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 px-3 py-2 rounded-md transition duration-300"
              href="#skills"
              onClick={() => setmMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              className="block text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 px-3 py-2 rounded-md transition duration-300"
              href="#projects"
              onClick={() => setmMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              className="block text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 px-3 py-2 rounded-md transition duration-300"
              href="#contact"
              onClick={() => setmMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
