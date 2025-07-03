import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.stagger-animate');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue-100 via-dark-blue-200 to-dark-blue-50"></div>
      <div className="absolute top-10 left-5 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-5 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="stagger-animate space-y-6">
          <h1 className="text-5xl md:text-7xl modern-title leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">
              Rusiru Devinda
            </span>
          </h1>
          <span className="text-xl md:text-2xl text-gray-300 font-medium block">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'UI/UX Designer', 'Frontend Developer', 'Backend Developer', 'AI/ML Engineer'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </span>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            
          </p>
        </div>

        <div className="stagger-animate flex flex-col sm:flex-row gap-4 justify-center items-center my-10">
          <a href="#projects">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-base font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </a>
        </div>

        <div className="stagger-animate flex justify-center space-x-6 mb-12">
          <a href="https://github.com/RUSIRUDEVINDA" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rusiru-devinda" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="mailto:rusirud49@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
            <Mail size={24} />
          </a>
        </div>

        <div className="stagger-animate">
          <a href="#about" className="inline-block">
            <ArrowDown className="text-blue-400 animate-bounce hover:text-blue-300 transition-colors duration-300" size={32} />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
