import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, UserCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSent(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 
      relative overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 100 }, (_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              opacity: [0, 0.2, 0],
              x: Array(3)
                .fill(null)
                .map(() => Math.random() * window.innerWidth),
              y: Array(3)
                .fill(null)
                .map(() => Math.random() * window.innerHeight)
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="text-center"
        >
          <h2 className="text-4xl font-black text-white sm:text-5xl tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed tracking-wide">
            Got a project in mind? Drop me a message and let's turn ideas into reality.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 
            hover:border-white/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white font-medium">sarojbudhathoki321@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400" size={24} />
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white font-medium">Lalitpur, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <UserCircle
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                    size={20}
                  />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-label="Name"
                    className="block w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg 
                    border border-white/20 rounded-lg text-white 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 
                    placeholder-gray-500 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg 
                    border border-white/20 rounded-lg text-white 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 
                    placeholder-gray-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-blue-400" size={20} />
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg 
                    border border-white/20 rounded-lg text-white 
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 
                    placeholder-gray-500 transition-all duration-300 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex justify-center items-center space-x-3 py-3 
                bg-blue-600 text-white font-bold rounded-lg 
                hover:bg-blue-700 transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <Send size={20} />
                <span>{isSent ? 'Message Sent!' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
