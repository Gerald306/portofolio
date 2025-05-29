import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaTools } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: <FaCode className="w-8 h-8 text-primary-400" />, items: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'] },
    { name: 'Backend', icon: <FaServer className="w-8 h-8 text-primary-400" />, items: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB'] },
    { name: 'Mobile', icon: <FaMobile className="w-8 h-8 text-primary-400" />, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { name: 'Tools', icon: <FaTools className="w-8 h-8 text-primary-400" />, items: ['Git', 'Docker', 'AWS', 'Figma', 'Jira'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 text-transparent bg-clip-text">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm a passionate software developer with expertise in building exceptional digital experiences. 
            With a strong foundation in both frontend and backend development, I create efficient, scalable, 
            and user-friendly applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
