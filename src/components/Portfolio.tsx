import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A modern web application built with React and TypeScript',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Mobile-first e-commerce platform with seamless UX',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&h=300&fit=crop',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Real-time data visualization dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Check out some of my recent work
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative w-full h-64 bg-white rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-200 text-sm mt-1">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-flex items-center mt-2 text-white hover:text-blue-400"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
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