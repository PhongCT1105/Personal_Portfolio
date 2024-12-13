import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-md px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center">
        {/* Logo */}
        <div className="md:mr-4 flex justify-between w-full">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-36" />
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            <a
              href="#about"
              className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            >
              About
            </a>
            <a
              href="#skills"
              className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            >
              Contact
            </a>
          </nav>
        </div>
        {/* Mobile Menu Toggle Button */}
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden focus:outline-none"
          onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 transition duration-300"
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
