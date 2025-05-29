import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={process.env.PUBLIC_URL + '/assets/profile-picture,jpg.png'}
              alt="Leku Gerald"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-gray-600 mb-2">I</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0099ff]">
                Hello, I'm Leku Gerald
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Full Stack Developer & Tech Enthusiast crafting modern web experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-block bg-[#0099ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0088ee] transition-colors"
                >
                  Get In Touch
                </a>
                <a
                  href="#portfolio"
                  className="inline-block bg-white text-[#0099ff] px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors border border-[#0099ff]"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;