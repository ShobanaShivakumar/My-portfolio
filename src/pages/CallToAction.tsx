
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      {/* Animated gradient blurs */}
      <div className="absolute top-20 left-20 w-96 h-96 gradient-blur opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 gradient-blur opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-blur opacity-20"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-20 px-6 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-purple-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl font-bold mb-8 text-gradient leading-tight"
        >
          Ready to Start
          <br />
          Something Amazing?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Let's collaborate and bring your vision to life with cutting-edge technology, 
          innovative design, and exceptional user experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full font-bold text-xl glow-effect overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ opacity: 0.3 }}
              />
              <span className="relative flex items-center gap-3">
                Hire Me Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>
          </Link>
          
          <Link to="/contact">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                backgroundColor: "rgba(147, 51, 234, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 glass-effect rounded-full font-bold text-xl border-2 border-purple-400 hover:border-purple-300 transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Star, title: "Premium Quality", desc: "High-end solutions" },
            { icon: Sparkles, title: "Fast Delivery", desc: "Quick turnaround" },
            { icon: ArrowRight, title: "Ongoing Support", desc: "Continuous maintenance" }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center group hover:glow-effect transition-all duration-300"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="inline-block mb-4"
                >
                  <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-gradient">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
