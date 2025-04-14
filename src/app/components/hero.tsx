"use client";
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "NEHA FAHIM";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBeforeDelete = 2000;
  const delayBeforeRestart = 1000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text !== fullText) {
      timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBeforeDelete);
    } else if (isDeleting && text !== '') {
      timeout = setTimeout(() => {
        setText(text.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, delayBeforeRestart);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  const developerText = "Frontend Developer".split("");

  // Pre-calculate particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${(i * 5.5) % 100}%`,
    left: `${(i * 7.3) % 100}%`,
    duration: 3 + (i * 0.2),
    delay: i * 0.1
  }));

  return (
    <div className="relative min-h-[100dvh] bg-[#0B0F1A] overflow-hidden flex items-center justify-center px-4 py-24 sm:py-32">
    {/* Background elements remain unchanged */}
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-rose-900/20 animate-gradient-slow" />
        
        {/* Animated circles */}
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #ffffff03 0.5px, transparent 0.5px),
              linear-gradient(#2C3E50 1px, transparent 1px), 
              linear-gradient(to right, #2C3E50 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
      <div className="space-y-6 sm:space-y-8">
        {/* Name Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold relative min-h-[60px] sm:min-h-[80px] md:min-h-[100px] flex items-center justify-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {text}
            <span className="animate-blink">|</span>
          </span>
        </h1>

       
        {/* Frontend Developer Text */}
        
          <motion.h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center">
            {developerText.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.05,
                  ease: "easeOut"
                }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed text-center py-6"
        >
          Creating exceptional digital experiences with modern web technologies.
          Transforming ideas into elegant, responsive applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center py-4"
        >
          <Link href="/projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 group hover:opacity-90 transition-all text-sm sm:text-base"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-white rounded-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-all text-sm sm:text-base"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex items-center justify-center gap-4 sm:gap-6 pt-4"
        >
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/NehaFahim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/nehafahim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://x.com/FahimNeha33515"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FiTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>
      </div>
    

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 bg-white/30 rounded-full"
            style={{
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Hero;




















