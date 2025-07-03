import { Button } from '@/components/ui/button';
import { Download, BookOpen, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: <User className="w-4 h-4 mr-2" /> },
    { id: 'education', label: 'Education & Certificates', icon: <BookOpen className="w-4 h-4 mr-2" /> },
  ];

  const AboutContent = () => (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="lg:col-span-1">
          <div className="relative group">
            <motion.img 
              src="/images/profile/profile_image.jpg"
              alt="Profile"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.07, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
            </div>
          </div>
        </div>
        {/* Right Column: Bio and Actions */}
        <div className="lg:col-span-2">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-3 py-1 text-xs font-bold uppercase text-green-300 bg-green-500/10 rounded-full border border-green-500/20 inline-block"
          >
            Who I Am
          </motion.span>
          <motion.div
            className="mt-6 space-y-4 text-gray-300 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25
                }
              }
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <motion.span
                className="modern-title text-lg"
                initial={{ backgroundPosition: '200% 0' }}
                whileInView={{ backgroundPosition: '0% 0' }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Rusiru Devinda
              </motion.span>, a passionate Software Engineering undergraduate with a solid foundation in programming, 
              problem-solving, and full-stack development. Focused on creating clean, user-centered solutions 
              that blend intuitive UI/UX with efficient backend architecture.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              Always learning and adapting to new tools and technologies, with a collaborative mindset and 
              commitment to delivering practical, high-quality work that improves real-world experiences.
            </motion.p>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
              <a href="#contact">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600 transform hover:scale-105 transition-transform duration-300">
                  Get in Touch
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
              <a href="#projects">
                <Button size="lg" variant="outline" className="border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300">
                  View Projects
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const EducationContent = () => (
    <motion.div
      key="education"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="relative border-l-2 border-gray-700 ml-4">
        <div className="space-y-12">
          <div className="pl-8 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-dark-blue-300"></div>
            <p className="text-sm text-gray-400 mb-1">2023 - 2027</p>
            <h3 className="text-xl modern-title">BSc in Software Engineering</h3>
            <p className="text-gray-300">University of Srilanka Institute of Information Technology</p>
          </div>
          <div className="pl-8 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-dark-blue-300"></div>
            <p className="text-sm text-gray-400 mb-1">May 2025</p>
            <h3 className="text-xl modern-title">Fundamentals of DevOps on AWS</h3>
            <p className="text-gray-300">Simplilearn</p>
          </div>
          <div className="pl-8 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-dark-blue-300"></div>
            <p className="text-sm text-gray-400 mb-1">January 2025</p>
            <h3 className="text-xl modern-title">AWS Foundations: Machine Learning Basics </h3>
            <p className="text-gray-300">Simplilearn</p>
          </div>
          <div className="pl-8 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-dark-blue-300"></div>
            <p className="text-sm text-gray-400 mb-1">January 2025</p>
            <h3 className="text-xl modern-title">Python for beginners</h3>
            <p className="text-gray-300">Simplilearn</p>
          </div>
          <div className="pl-8 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-dark-blue-300"></div>
            <p className="text-sm text-gray-400 mb-1">January 2025</p>
            <h3 className="text-xl modern-title">Learning Data Science: Understanding the basics</h3>
            <p className="text-gray-300">LinkedIn Learning</p>
          </div>
          <div className="pl-8 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-dark-blue-300"></div>
            <p className="text-sm text-gray-400 mb-1">January 2025</p>
            <h3 className="text-xl modern-title">MongoDB Fundamentals</h3>
            <p className="text-gray-300">MongoDB University</p>
          </div>
          <div className="pl-8 relative">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-sky-500 rounded-full border-4 border-dark-blue-300"></div>
            <p className="text-sm text-gray-400 mb-1">January 2024</p>
            <h3 className="text-xl modern-title">Introduction to SQL</h3>
            <p className="text-gray-300">Sololearn</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="about"
      className="py-16 px-6 md:px-12 lg:px-24 system-gradient soft-shadow animate-fade-in-up"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl modern-title">About Me</h2>
        </div>

        <div className="flex justify-center border-b border-gray-700 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? 'text-sky-400' : 'text-gray-400 hover:text-white'
              } flex items-center text-lg font-medium px-5 py-3 transition-colors relative`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>

        <div className="p-8 bg-dark-blue-300/20 rounded-3xl border border-sky-500/10 min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === 'about' ? <AboutContent /> : <EducationContent />}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
