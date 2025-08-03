import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "Express.js", level: 90 },
        { name: "API Design", level: 93 }
      ]
    },
    {
      icon: Database,
      title: "Programming Skills",
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 87 },
        { name: "Python", level: 80 },
        { name: "SQLite", level: 82 }
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 88 },
        { name: "Responsive Design", level: 95 },
        { name: "Animation", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`
    })
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute top-40 left-20 w-80 h-80 gradient-blur opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 gradient-blur opacity-30"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 py-10 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            My Skills
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to craft smooth and efficient digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.01, y: -4 }}
                className="glass-effect p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 glow-effect mr-3"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h2 className="text-xl font-semibold text-gradient">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.6 
                      }}
                      className="space-y-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm font-medium">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                          className="text-purple-400 font-bold text-sm"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          variants={skillBarVariants}
                          initial="hidden"
                          animate="visible"
                          custom={skill.level}
                          transition={{
                            duration: 1.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.5
                          }}
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-effect p-6 rounded-xl max-w-xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-2 text-gradient">
              Active Learner
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Always on a journey of self-improvement. Currently diving into AI/ML apps, Web3 technologies, and next-gen UI animations.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
