import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/RUSIRUDEVINDA', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/rusiru-devinda', label: 'LinkedIn' },

    { icon: <Mail size={20} />, href: 'mailto:rusirud49@gmail.com', label: 'Email' }
  ];

  return (
    <motion.footer
      className="bg-dark-blue-50 border-t border-dark-blue-400/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl modern-title mb-2">Portfolio</h3>
        <div className="flex space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-dark-blue-300/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-2">© 2024 Rusiru Devinda. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
