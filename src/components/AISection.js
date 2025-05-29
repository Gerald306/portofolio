import React from 'react';
import { motion } from 'framer-motion';

const AISection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background-light to-primary-50 dark:from-background-dark dark:to-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-center mb-12">
          AI-Powered Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Project Analysis */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Project Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI-driven insights about the Klots project architecture and performance metrics.
            </p>
            <a href="https://klots.vercel.app" className="text-primary-500 hover:text-primary-600 mt-4 inline-block">
              Learn More →
            </a>
          </motion.div>

          {/* AI Tech Trends */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Tech Trends</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI-curated insights about the latest developments in web development and technology.
            </p>
            <a href="#" className="text-primary-500 hover:text-primary-600 mt-4 inline-block">
              Explore Trends →
            </a>
          </motion.div>

          {/* AI Career Path */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Career Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI-generated insights about my professional growth and future directions in tech.
            </p>
            <a href="#" className="text-primary-500 hover:text-primary-600 mt-4 inline-block">
              View Journey →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { AISection };

const TechPosts = () => {
  return (
    <section id="tech-posts" className="py-16 bg-gradient-to-b from-background-light to-primary-50 dark:from-background-dark dark:to-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-center mb-12 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 text-transparent bg-clip-text">
          My Tech Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tech Blog */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Tech Trends</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Explore the latest developments in web development and technology.
            </p>
            <a 
              href="https://lekugerald.blogspot.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 mt-4 inline-block"
            >
              Read More →
            </a>
          </motion.div>

          {/* Career Journey */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Career Journey</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Follow my professional growth and experiences in tech.
            </p>
            <a 
              href="https://www.linkedin.com/in/leku-gerald-72391a338" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 mt-4 inline-block"
            >
              Connect →
            </a>
          </motion.div>

          {/* Projects Showcase */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Latest Project</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Check out my latest project - Klots Finance Tracker.
            </p>
            <a 
              href="https://klots-finances-tracker-pro.vercel.app/auth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 mt-4 inline-block"
            >
              View Project →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechPosts;