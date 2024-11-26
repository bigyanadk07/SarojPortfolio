import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Logo from '../Images/saroj-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Portfolio', to: 'portfolio' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 font-bold text-xl"
          >
            <img src={Logo} alt="logo" className='w-20 h-auto' />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-gray-200 flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-gray-500">
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;