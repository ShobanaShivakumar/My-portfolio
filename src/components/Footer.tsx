import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Name & Year */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">Shobana.S</span>. All rights reserved.
          </p>
        </div>

        {/* Right: Socials */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:sshobana2108@gmail.com"
            className="hover:text-purple-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
