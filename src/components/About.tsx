import { motion } from 'framer-motion';
import { Code, Palette, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: 'Building robust and scalable applications using modern web technologies.',
    },
    {
      icon: <Palette size={24} />,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Strategy',
      description: 'Developing comprehensive solutions to meet business objectives.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Passionate about creating innovative digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="pt-6"
              >
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <div className="text-white">{skill.icon}</div>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {skill.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{skill.description}</p>
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