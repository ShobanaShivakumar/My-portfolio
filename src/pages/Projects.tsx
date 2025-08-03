import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const projects = [
  {
    title: 'Movie Recommendation System',
    description: 'A content-based filtering system using Python, Pandas, Scikit-learn, and Streamlit.',
    link: 'https://github.com/ShobanaShivakumar/Movie-Recommendation-System',
  },
  {
    title: 'Indian Election Prediction Dashboard',
    description: 'Sentiment analysis dashboard using Python, BERT, Streamlit, and GNews API.',
    link: 'https://github.com/ShobanaShivakumar/INDIAN_ELECTION_PREDICTION',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio made with React, TailwindCSS, and Framer Motion.',
    link: 'https://github.com/ShobanaShivakumar',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section className="min-h-screen px-8 pt-[192px] pb-12 bg-black text-white flex flex-col items-center relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute top-40 right-20 w-96 h-96 gradient-blur opacity-40" />
      <div className="absolute bottom-20 left-20 w-80 h-80 gradient-blur opacity-30" />
      
      <motion.h2
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-3 gap-8 max-w-6xl w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03,
              y: -8,
              transition: { type: 'spring', stiffness: 400, damping: 25 }
            }}
            whileTap={{ scale: 0.97 }}
            className="relative p-[2px] rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500"
          >
            <motion.div 
              className="bg-zinc-800 p-6 rounded-[10px] h-full"
              whileHover={{ 
                backgroundColor: "rgba(39, 39, 42, 0.9)",
              }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-center">{project.description}</p>
              <div className="text-center">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#f472b6",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;