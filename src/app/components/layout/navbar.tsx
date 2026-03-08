import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Briefcase, Sparkles, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/blog', label: 'Blog' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050510]/80 backdrop-blur-2xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo - Futuristic */}
          <Link to="/" className="flex items-center gap-3 group relative">
            {/* Holographic glow */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-[#2563eb] via-[#22c55e] to-[#2563eb] rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            />
            
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform">
                {/* Animated shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10" />
              </div>
            </div>
            
            <div className="flex flex-col leading-none relative">
              <span className="font-black text-white text-xl md:text-2xl tracking-tighter">TrueTech</span>
              <motion.span 
                className="text-xs md:text-sm font-bold text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #60a5fa, #22c55e, #a78bfa, #60a5fa)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Solutions
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation - Futuristic */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 group"
              >
                <span className={`relative z-10 text-sm font-bold transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-white/50 group-hover:text-white'
                }`}>
                  {link.label}
                </span>
                
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 relative px-6 py-3 overflow-hidden rounded-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]"></div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#22c55e] to-[#2563eb]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative flex items-center gap-2 text-white font-bold text-sm">
                <Brain className="w-4 h-4" />
                Get Started
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Futuristic Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-20 bg-black/60 backdrop-blur-xl z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel - Slides from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-20 bottom-0 w-full sm:w-96 z-50 lg:hidden"
            >
              <div className="h-full bg-gradient-to-br from-[#0a0a1a] to-[#050510] border-l border-white/10 overflow-y-auto">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
                      backgroundSize: '40px 40px',
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '40px 40px'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Navigation Links */}
                <div className="relative p-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl text-base font-bold transition-all overflow-hidden group ${
                          location.pathname === link.path
                            ? 'bg-white/10 border border-white/20 text-white'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {location.pathname === link.path && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/20 to-[#22c55e]/20"
                            animate={{
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                            style={{
                              backgroundSize: '200% 200%',
                            }}
                          />
                        )}
                        
                        <span className="relative">{link.label}</span>
                        
                        {location.pathname === link.path && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 bg-gradient-to-r from-[#2563eb] to-[#22c55e] rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Section */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                  className="relative p-6"
                >
                  <Link
                    to="/contact"
                    className="relative block w-full px-6 py-5 overflow-hidden rounded-2xl group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]"></div>
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#22c55e] to-[#2563eb]"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                    
                    <span className="relative flex items-center justify-center gap-2 text-white font-black text-lg">
                      <Brain className="w-5 h-5" />
                      Start Neural Match
                    </span>
                  </Link>
                </motion.div>

                {/* Feature Highlights */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: (navLinks.length + 1) * 0.05, duration: 0.3 }}
                  className="relative p-6"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center gap-2 text-white/80 text-sm font-bold mb-4">
                      <Sparkles className="w-4 h-4 text-[#22c55e]" />
                      <span>Why Choose Us</span>
                    </div>
                    
                    {[
                      { label: 'Success Rate', metric: '98%' },
                      { label: 'Avg. Placement', metric: '48hrs' },
                      { label: 'Client Satisfaction', metric: '5.0★' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">{item.label}</span>
                        <span className="text-white font-bold text-sm">{item.metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}