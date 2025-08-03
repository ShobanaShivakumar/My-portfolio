import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Sparkles } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import ThreeScene from '../components/ThreeScene';

const projects = [
  {
    title: 'Movie Recommendation System',
    description: 'A content-based filtering system using Python, Pandas, Scikit-learn, and Streamlit.',
    link: "https://github.com/ShobanaShivakumar/Movie-Recommendation-System",
  },
  {
    title: 'Indian Election Prediction Dashboard',
    description: 'Sentiment analysis dashboard using Python, BERT, Streamlit, and GNews API.',
    link: "https://github.com/ShobanaShivakumar/INDIAN_ELECTION_PREDICTION",
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio made with React, TailwindCSS, and Framer Motion.',
    link: "https://github.com/ShobanaShivakumar",
  },
];

const Index = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* ✅ Fix 1: Set z-0 and absolute backgrounds inside fixed layer */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
        <ThreeScene />
      </div>

      {/* ✅ Fix 2: Gradient blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 gradient-blur opacity-70 z-0"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 gradient-blur opacity-50 z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 gradient-blur opacity-30 z-0"></div>

      {/* ✅ Main Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6 max-w-4xl mx-auto mt-24 mb-32 relative"
      >
        <motion.div variants={textVariants} transition={{ duration: 0.8 }} className="mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-purple-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={textVariants}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-gradient leading-tight"
        >
          Hi, I'm Shobana
        </motion.h1>

        <motion.h2
          variants={textVariants}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-6"
        >
          Tech Enthusiast & Creative Developer
        </motion.h2>

        <motion.p
          variants={textVariants}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed"
        >
          Crafting digital experiences with cutting-edge technology,
          <br />
          stunning animations, and innovative design solutions.
        </motion.p>

        <motion.div
          variants={textVariants}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg glow-effect hover:shadow-2xl transition-all duration-300"
            >
              View My Work
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full font-semibold text-lg border border-purple-400 hover:bg-purple-400/20 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          variants={textVariants}
          transition={{ duration: 0.8 }}
          animate={{ y: [0, 10, 0] }}
          onClick={() => scrollToSection('projects')}
          className="flex flex-col items-center cursor-pointer"
        >
          <p className="text-gray-400 mb-2">Scroll to explore</p>
          <ArrowDown className="w-6 h-6 text-purple-400 animate-bounce" />
        </motion.div>
      </motion.div>

      <div
        id="projects"
        className="bg-black text-white pt-[192px] pb-24 px-8 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="w-full max-w-7xl overflow-x-auto">
          <div className="flex gap-8 px-2 py-4 min-w-max">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="min-w-[300px] max-w-sm flex-shrink-0 relative p-[2px] rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500"
              >
                <div className="bg-zinc-800 p-6 rounded-[10px] h-full">
                  <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{project.description}</p>
                  <div className="text-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
