import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { Menu, X, Home, User, Wrench, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Shrink navbar when scrolling down
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home', icon: <Home className="h-5 w-5" /> },
    { name: 'About', href: 'about', icon: <User className="h-5 w-5" /> },
    { name: 'Skills', href: 'skills', icon: <Wrench className="h-5 w-5" /> },
    {
      name: 'Projects',
      href: 'projects',
      icon: <Briefcase className="h-5 w-5" />,
    },
    { name: 'Contact', href: 'contact', icon: <Mail className="h-5 w-5" /> },
  ];

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'h-12 bg-white shadow-md' : 'h-16 bg-white/80 shadow-lg'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex ${
          isScrolled ? 'h-12' : 'h-16'
        } items-center justify-between px-4 lg:px-0`}
      >
        {/* Logo */}
        <a
          onClick={() => handleScrollToSection('home')}
          className="flex items-center cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            className={`transition-all duration-300 ${
              isScrolled ? 'w-20 md:w-28' : 'w-28 md:w-36'
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollToSection(link.href)}
              className="transition duration-300 hover:text-red-600 text-gray-700 px-3 py-2 rounded-md flex items-center gap-2 hover:bg-red-100"
            >
              {link.icon}
              {link.name}
            </button>
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
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollToSection(link.href)}
                className="block text-base font-medium text-gray-700 hover:bg-red-100 hover:text-red-600 px-3 py-2 rounded-md flex items-center gap-2 transition duration-300"
              >
                {link.icon}
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
