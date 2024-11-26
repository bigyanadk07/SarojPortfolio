import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Images/saroj-logo.png';

const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', to: 'home', icon: null },
    { title: 'About', to: 'about', icon: null },
    { title: 'Portfolio', to: 'portfolio', icon: null },
    { title: 'Contact', to: 'contact', icon: null }
  ];

  const socialLinks = [
    { 
      name: 'Github', 
      icon: Github, 
      href: 'https://github.com/yourusername' 
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/yourusername' 
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/yourusername' 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <nav 
      className="fixed w-full bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-blue-900/80 
      backdrop-blur-lg z-50 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between h-20"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <img 
              src={Logo} 
              alt="logo" 
              className='w-24 h-auto transition-transform duration-300 hover:drop-shadow-xl' 
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item) => (
              <motion.div 
                key={item.to}
                variants={itemVariants}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="cursor-pointer text-white/80 hover:text-white 
                  transition-all duration-300 ease-in-out 
                  group relative px-2 py-1 rounded-md"
                >
                  <span className="relative">
                    {item.title}
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 
                      transition-all duration-300 group-hover:w-full"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Social Icons */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4 ml-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/70 hover:text-white transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md 
              text-white/80 hover:text-white hover:bg-white/10 
              focus:outline-none transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transition: { 
                duration: 0.3,
                ease: "easeInOut" 
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                duration: 0.2,
                ease: "easeInOut" 
              }
            }}
            className="md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="block px-3 py-3 text-white/80 hover:text-white 
                  hover:bg-white/10 rounded-md transition-all duration-300 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            
            {/* Mobile Social Links */}
            <div className="px-5 py-4 border-t border-white/10 flex justify-center space-x-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white/70 hover:text-white transition-all duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;