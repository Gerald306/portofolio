import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-subheading-mobile md:text-subheading-tablet lg:text-subheading-desktop font-bold mb-4">Leku Gerald</h3>
            <p className="text-body-mobile md:text-body-tablet lg:text-body-desktop text-gray-400 mb-4">
              Full Stack Developer specializing in modern web applications.
            </p>
            <p className="text-body-mobile md:text-body-tablet lg:text-body-desktop text-gray-400">
              Email: lekugerald@yahoo.com
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Projects</h4>
              <ul className="space-y-2">
                <li><a href="https://klots.vercel.app" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Klots</a></li>
                {/* Add more projects here */}
              </ul>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white mb-2"
              />
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-6 items-center justify-center md:justify-start">
              <a 
                href="https://github.com/your-github" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/leku-gerald-72391a338" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://twitter.com/your-twitter" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2024 Leku Gerald. All rights reserved.</p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
