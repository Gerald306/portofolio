import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={scrollToTop}>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">LG</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a onClick={scrollToTop} className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">About</a>
            <a href="#tech-posts" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">Tech Posts</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">Projects</a>
            <a href="#contact" className="px-4 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-200">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">About</a>
              <a href="#tech-posts" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Tech Posts</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-primary-500 hover:text-primary-600">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
