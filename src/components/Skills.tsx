import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  { name: 'React', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
  { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend' },
  { name: 'HTML5', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
  { name: 'CSS3', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
  { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
  { name: 'MongoDB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
  { name: 'MySQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'backend' },
  { name: 'Spring Boot', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'backend' },
  { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' },
  { name: 'GitHub', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
  { name: 'Figma', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tools' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { stiffness: 120, damping: 15, staggerChildren: 0.08 } },
};

const filterVariants = {
  initial: { scale: 1, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' },
  active: { scale: 1.08, boxShadow: '0 4px 24px 0 rgba(56,189,248,0.18)' },
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredSkills = skillsData.filter(skill => 
    activeFilter === 'all' || skill.category === activeFilter
  );
  const filters = ['all', 'frontend', 'backend', 'tools'];

  return (
    <motion.section
      id="skills"
      className="py-16 px-6 md:px-12 lg:px-24 bg-dark-blue-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl modern-title mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.7 }}
          >
            Technology Skills
          </motion.h2>
        </div>

        <motion.div 
          layout 
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`capitalize px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-md backdrop-blur-md bg-white/10 border border-transparent focus:outline-none
                ${activeFilter === filter
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white scale-105 border-2 border-sky-400 animate-pulse'
                  : 'text-sky-300 hover:bg-sky-500/20 hover:text-white hover:scale-105'}
              `}
              style={{ minWidth: '100px' }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {filteredSkills.map((skill, i) => (
              <motion.div 
                key={skill.name}
                variants={cardVariants}
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(0, 255, 255, 0.15)', borderColor: '#38bdf8' }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-transparent transition-all duration-300 flex flex-col items-center p-6 cursor-pointer aspect-square"
              >
                <img src={skill.imageUrl} alt={`${skill.name} logo`} className="w-16 h-16 mb-3" />
                <span className="text-lg font-bold text-white mb-1">{skill.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  skill.category === 'frontend' ? 'bg-sky-900/40 text-sky-300' : skill.category === 'backend' ? 'bg-green-900/40 text-green-300' : 'bg-purple-900/40 text-purple-300'
                }`}>
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Skills;
