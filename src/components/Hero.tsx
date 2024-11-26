import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Linkedin, Github, Code } from 'lucide-react';
import { Link } from 'react-scroll';
import Profile from "../Images/sajo.jpg"

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 
        relative overflow-hidden"
    >
      {/* Advanced Particle-like Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              x: [
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth, 
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Advanced Profile Image with 3D Hover Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              damping: 12, 
              stiffness: 150 
            }}
            className="relative w-48 h-48 mx-auto mb-12 perspective-1000"
          >
            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-blob"></div>
            <motion.img
              src={Profile}
              alt="Saroj Budhathoki"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 255, 0.25)"
              }}
              className="relative z-10 rounded-full w-full h-full object-cover 
                border-4 border-white/20 shadow-2xl transition-all 
                transform-style-3d backface-hidden"
            />
          </motion.div>

          {/* Advanced Typography with Gradient and Depth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <h1 className="text-4xl tracking-tight font-black text-white 
              sm:text-5xl md:text-6xl mb-4 leading-tight">
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="block"
              >
                Hi, I'm 
                <span className="text-transparent bg-clip-text bg-gradient-to-r 
                  from-cyan-400 via-blue-500 to-purple-600 ml-3 drop-shadow-lg">
                  Saroj Budhathoki
                </span>
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="block text-2xl sm:text-4xl md:text-5xl text-gray-300 mt-2"
              >
                Creative Developer
              </motion.span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 max-w-2xl mx-auto text-base text-gray-400 
              sm:text-lg md:text-xl leading-relaxed tracking-wide"
          >
            Transforming complex ideas into elegant digital solutions through 
            innovative design, robust architecture, and pixel-perfect execution.
          </motion.p>

          {/* Advanced Action Buttons with Sophisticated Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {/* Portfolio Link with Glowing Effect */}
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl overflow-hidden"
              >
                <div className="w-full px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 
                  text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 
                  transition-all text-center tracking-wider uppercase text-sm">
                  Explore Portfolio
                </div>
              </motion.div>
            </Link>

            {/* Social Links with Advanced Hover */}
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/in/your-profile", color: "text-blue-500" },
                { Icon: Github, href: "https://github.com/your-username", color: "text-gray-200" },
                { Icon: Download, href: "/resume.pdf", color: "text-green-500" },
                { Icon: Code, href: "https://codepen.com/your-profile", color: "text-purple-500" }
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: index % 2 === 0 ? 15 : -15,
                    color: color
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-500 hover:text-white transition-all"
                >
                  <Icon size={28} strokeWidth={2} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Advanced Scroll Indicator with Neon Glow */}
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
              className="cursor-pointer group"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex flex-col items-center"
              >
                <ArrowDown 
                  className="text-gray-400 group-hover:text-cyan-400 
                  transition-colors duration-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                  size={32} 
                  strokeWidth={2}
                />
                <span className="text-xs text-gray-500 mt-2 group-hover:text-cyan-400 transition-colors">
                  Scroll Down
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;