import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Server, Layers } from 'lucide-react';

const Portfolio:React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Digital Ecosystem Platform',
      description: 'Advanced React-based web application with microservices architecture',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: '#',
      tags: ['Frontend', 'Full-Stack', 'React']
    },
    {
      title: 'E-Commerce Innovation',
      description: 'Mobile-first platform with advanced state management and PWA capabilities',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&h=300&fit=crop',
      link: '#',
      tags: ['Mobile', 'E-Commerce', 'Backend']
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Data visualization platform with WebSocket-powered live updates',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: '#',
      tags: ['Frontend', 'Data', 'Visualization']
    },
    {
      title: 'AI-Powered Recommendation Engine',
      description: 'Machine learning system for personalized content suggestion',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop',
      link: '#',
      tags: ['AI', 'Backend', 'Machine Learning']
    },
    {
      title: 'Cloud Infrastructure Toolkit',
      description: 'Serverless microservices framework with multi-cloud deployment',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
      link: '#',
      tags: ['Backend', 'Cloud', 'DevOps']
    },
    {
      title: 'Interactive Design System',
      description: 'Comprehensive UI component library with dynamic theming',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
      link: '#',
      tags: ['Frontend', 'Design', 'UI/UX']
    }
  ];

  const filterOptions = [
    { label: 'All', icon: <Layers size={20} /> },
    { label: 'Frontend', icon: <Code size={20} /> },
    { label: 'Backend', icon: <Server size={20} /> }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedFilter));

  return (
    <section 
      id="portfolio" 
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 
      relative overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              opacity: [0, 0.2, 0],
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-white sm:text-5xl tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed tracking-wide">
            Innovative solutions that showcase the intersection of creativity, 
            technology, and strategic problem-solving.
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center space-x-4 mt-12 mb-12"
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.label}
              onClick={() => setSelectedFilter(option.label)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium 
                transition-all duration-300 
                ${selectedFilter === option.label 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'}
              `}
            >
              {option.icon}
              <span>{option.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
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
              className="group"
            >
              <div className="relative w-full h-64 bg-white/10 backdrop-blur-lg 
                rounded-2xl overflow-hidden border border-white/20 
                hover:border-white/40 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-white hover:text-blue-400"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                    <p className="text-gray-200 text-base mb-3">{project.description}</p>
                    <div className="flex space-x-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;