import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { useToast } from '@/hooks/use-toast';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsDownloading(true);

    const link = document.createElement('a');
    link.href = '/SHOBANA_RESUME.pdf';
    link.download = 'Shobana_S_Resume.pdf';
    link.click();

    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: 'Resume Downloaded!',
        description: 'Thank you for your interest. Check your downloads folder.',
        duration: 3000,
      });
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      <ParticleBackground />

      {/* Gradient Blur */}
      <div className="absolute top-40 left-20 w-96 h-96 gradient-blur opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 gradient-blur opacity-30"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 py-12 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">My Resume</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Download my resume to explore my education, skills, and academic projects.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="glass-effect p-6 md:p-8 rounded-2xl text-center relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-3 right-3 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-lg"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-20 blur-lg"
            />

            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block mb-4"
            >
              <FileText className="w-14 h-14 text-purple-400 glow-effect" />
            </motion.div>

            <h2 className="text-2xl font-bold mb-2 text-gradient">Shobana S</h2>

            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              I am a student developer passionate about full-stack development. My resume highlights my academic background, hands-on technical skills, and key project work.
            </p>

            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: '0 10px 25px rgba(147, 51, 234, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-sm md:text-base glow-effect disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
            >
              {isDownloading && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  style={{ opacity: 0.3 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </span>
            </motion.button>

            <p className="text-xs text-gray-400 mt-2">PDF Format • ~2 MB</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8 }}
            className="mt-4 text-center"
          >
            <motion.a
              href="/SHOBANA_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              View Resume in Browser
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
