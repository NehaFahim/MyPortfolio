"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const handleResumeClick = () => {
    window.open('/myCV.pdf', '_blank');
  };

 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" }
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed w-full z-50 transition-all duration-300 overflow-hidden ${
      isScrolled 
        ? 'py-2 sm:py-3 bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'py-3 sm:py-4 bg-transparent'
    }`}
  >
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-base sm:text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
            PORTFOLIO
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {item.title}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </motion.div>
            ))}
            <motion.button
      onClick={handleResumeClick}  // <- Add this
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
    >
      Resume 
    </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden fixed top-[60px] left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="block text-sm text-gray-300 hover:text-white transition-colors duration-300 py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                    
                    <motion.button
      onClick={handleResumeClick}  // <- Add this
      className="w-full px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
    >
      Resume
    </motion.button> 
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;