import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Profile from "../Images/sajo.jpg"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 mx-auto mb-8"
          >
            <img
              src={Profile}
              alt="Saroj Budhathoki"
              className="rounded-full w-full h-full object-cover shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Hi, I'm Saroj Budhathoki</span>
            <span className="block text-blue-600">Creative Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Crafting digital experiences that bring ideas to life through clean code and creative design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md shadow"
              >
                <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  View My Work
                </div>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowDown className="mx-auto text-gray-400" size={24} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;