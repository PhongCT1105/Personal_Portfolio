import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-28 md:w-36" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md hover:bg-red-100"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-transform duration-300">
          <div className="flex flex-col space-y-2 px-4 py-2">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 px-3 py-2 rounded-md transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
