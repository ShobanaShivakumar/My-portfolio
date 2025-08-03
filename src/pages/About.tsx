import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, BookOpen, Coffee } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const achievements = [
    { icon: Code, title: "10+ Projects", description: "Built using React, Node.js, etc." },
    { icon: BookOpen, title: "B.Tech IT Student", description: "Madras Institute of Technology,Anna University" },
    { icon: Award, title: "Naan Mudhalvan Learner", description: "Skilled in Full-Stack Tools" },

  ];
   
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <ParticleBackground />

      {/* Animated gradient blurs */}
      <div className="absolute top-40 right-20 w-96 h-96 gradient-blur opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 gradient-blur opacity-30"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer & tech enthusiast, eager to build impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text Card */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-4 text-gradient">Hi, I'm Shobana</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm currently pursuing my B.Tech in Information Technology at Madras Institute of Technology.
                I build responsive websites, sleek UIs, and interactive web apps using React, Node.js, and other modern tools.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I’m passionate about learning, exploring new technologies, and crafting user-focused digital solutions.
                I'm also actively enhancing my skills through real-time projects and tech programs like Naan Mudhalvan.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-xl"
            />
            <div className="relative glass-effect p-8 rounded-2xl text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src="/Shobana image.jpg"
                  alt="Shobana"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Tech Enthusiast & Creative Developer</h3>
              <p className="text-gray-400">Exploring code, design, and innovation</p>

              {/* Resume Button */}
              <a
                href="/Shobana_S_Resume.pdf"
                download
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 glow-effect"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 "
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="center glass-effect p-6 rounded-xl text-center group hover:glow-effect transition-all duration-300 "
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4"
                >
                  <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
                </motion.div>
                <h4 className="text-lg font-bold mb-2 text-white group-hover:text-gradient">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
