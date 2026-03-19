import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../utils/data';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer text-gradient">
            CS.
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  activeClass="text-indigo-500 font-semibold"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer hover:text-indigo-500 transition-colors font-medium text-sm uppercase tracking-wide opacity-80 hover:opacity-100"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FiSun className="text-yellow-400 w-5 h-5" /> : <FiMoon className="text-indigo-900 w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 focus:outline-none">
            {isDarkMode ? <FiSun className="text-yellow-400 w-5 h-5" /> : <FiMoon className="text-indigo-900 w-5 h-5" />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 transform origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <ul className="flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                activeClass="text-indigo-500 font-semibold"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block cursor-pointer hover:text-indigo-500 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
