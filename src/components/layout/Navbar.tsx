'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wrench } from 'lucide-react';
import { NavItem } from '@/types';
import { QuoteRequestModal } from '@/components/ui';

// Animation variants for navbar
const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1
    }
  }
};

const logoVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15
    }
  }
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24
    }
  }
};

const ctaButtonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: 0.3
    }
  }
};

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div variants={logoVariants}>
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <motion.div 
                className="bg-blue-600 p-2 rounded-lg"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)"
                }}
                transition={{ duration: 0.6 }}
              >
                <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </motion.div>
              <motion.span 
                className="text-lg sm:text-xl font-bold text-gray-800"
                whileHover={{ 
                  scale: 1.05,
                  color: "#2563eb"
                }}
                transition={{ duration: 0.3 }}
              >
                ProPlumber
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            variants={navItemVariants}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ 
                  y: -2,
                  scale: 1.05
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-bold transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: pathname === item.href ? '100%' : 0 
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop CTA Button */}
          <motion.div 
            className="hidden lg:flex items-center"
            variants={ctaButtonVariants}
          >
            <motion.button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Get Quote</span>
            </motion.button>
          </motion.div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <div className="flex items-center space-x-4">
              {navItems.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-colors hover:text-blue-600 ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2 relative"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-bold transition-colors hover:bg-gray-50 hover:text-blue-600 rounded-lg mx-2 ${
                      pathname === item.href 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-2">
                  <button
                    onClick={() => {
                      setIsQuoteModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Quote Request Modal */}
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </motion.header>
  );
}