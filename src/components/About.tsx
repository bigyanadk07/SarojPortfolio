import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Zap, Terminal, Layers } from 'lucide-react';

const About:React.FC = () => {
  const skills = [
    {
      icon: <Code size={28} strokeWidth={2} />,
      title: 'Software Development',
      description: 'Architecting robust, scalable applications using cutting-edge technologies and best practices.',
      color: 'from-cyan-500 to-blue-600',
      gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600'
    },
    {
      icon: <Palette size={28} strokeWidth={2} />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive, visually stunning interfaces that balance aesthetic elegance with user-centric functionality.',
      color: 'from-purple-500 to-pink-600',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      icon: <Globe size={28} strokeWidth={2} />,
      title: 'Digital Strategy',
      description: 'Developing comprehensive, forward-thinking solutions that align technology with business objectives.',
      color: 'from-green-500 to-emerald-600',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600'
    },
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 
      relative overflow-hidden"
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
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
              duration: 15 + Math.random() * 15, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-white sm:text-5xl tracking-tight">
            About My Craft
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed tracking-wide">
            Bridging innovation and functionality through meticulous design, strategic thinking, 
            and a relentless pursuit of technological excellence.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)"
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                className="pt-6"
              >
                <div className="h-full bg-white/10 backdrop-blur-lg rounded-2xl 
                  border border-white/20 px-6 pb-8 transition-all duration-300 
                  hover:border-white/40 transform">
                  <div className="-mt-6">
                    <div className="mb-6">
                      <motion.span 
                        className={`inline-flex items-center justify-center p-4 
                          ${skill.gradient} text-white rounded-xl shadow-2xl`}
                        initial={{ rotate: -15 }}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: "mirror" 
                        }}
                      >
                        {skill.icon}
                      </motion.span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                      {skill.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;