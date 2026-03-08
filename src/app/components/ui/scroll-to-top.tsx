import { useState, useEffect } from 'react';
import { ArrowUp, Orbit } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ scale: 1.15, rotateZ: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden group cursor-pointer"
          aria-label="Scroll to top"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Holographic glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#22c55e] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl"></div>
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl"
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
          
          {/* Shine effect */}
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
          
          {/* Icon */}
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.div>
          </div>
          
          {/* Orbiting particles */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [
                  Math.cos((angle * Math.PI) / 180) * 25,
                  Math.cos(((angle + 360) * Math.PI) / 180) * 25,
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * 25,
                  Math.sin(((angle + 360) * Math.PI) / 180) * 25,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
