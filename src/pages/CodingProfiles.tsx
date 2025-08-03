import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const CodingProfiles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden bg-black text-white">
      <ParticleBackground />

      {/* Background gradient blurs */}
      <div className="absolute top-40 right-20 w-96 h-96 gradient-blur opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 gradient-blur opacity-30"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12 relative z-10 text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gradient leading-[1.3] pb-4"
        >
          Coding Profiles
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-16"
        >
          Explore my coding platforms and open-source journey.
        </motion.p>

        {/* Profile Cards */}
        <div className="flex justify-center flex-wrap gap-6">
          {/* GitHub Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="min-w-[280px] max-w-sm flex-shrink-0 relative p-[2px] rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500"
          >
            <a
              href="https://github.com/ShobanaShivakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-zinc-800 p-6 rounded-[10px] h-full text-center flex flex-col items-center gap-4">
                <Github className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold">GitHub</h3>
                <p className="text-sm text-gray-400">
                  Explore my open-source projects and code contributions.
                </p>
              </div>
            </a>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="min-w-[280px] max-w-sm flex-shrink-0 relative p-[2px] rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500"
          >
            <a
              href="https://www.linkedin.com/in/shobanasivakumar21"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-zinc-800 p-6 rounded-[10px] h-full text-center flex flex-col items-center gap-4">
                <Linkedin className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold">LinkedIn</h3>
                <p className="text-sm text-gray-400">
                  Connect with me professionally and view my experiences.
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodingProfiles;
