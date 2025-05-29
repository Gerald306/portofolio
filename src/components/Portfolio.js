import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Klots Finance Tracker',
      description: 'A comprehensive financial management platform with AI-powered insights, real-time tracking, and smart budgeting features.',
      tags: ['React', 'Node.js', 'AI Integration', 'Financial API'],
      image: process.env.PUBLIC_URL + 'public/assets/klots-preview.jpg',
      category: 'Web App',
      link: 'https://klots.vercel.app'
    },
    {
      id: 2,
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by machine learning, providing personalized responses and task automation.',
      tags: ['Python', 'TensorFlow', 'NLP', 'REST API'],
      image: process.env.PUBLIC_URL + 'public/assets/ai-chat-preview.jpg',
      category: 'AI',
      link: 'https://github.com/Gerald306/ai-chat-assistant'
    },
    {
      id: 3,
      title: 'Smart Home Dashboard',
      description: 'IoT-based home automation system with AI-powered energy optimization and predictive maintenance.',
      tags: ['React', 'IoT', 'Machine Learning', 'WebSocket'],
      image: process.env.PUBLIC_URL + 'public/assets/smart-home-preview.jpg',
      category: 'IoT',
      link: 'https://github.com/Gerald306/smart-home-dashboard'
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0099ff] mb-4">My Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was built to solve specific problems
            and deliver exceptional user experiences.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#0099ff] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
