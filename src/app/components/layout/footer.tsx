import { Link } from 'react-router';
import { Briefcase, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Brain, Sparkles, Orbit } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#050510] text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563eb]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#22c55e]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section - Futuristic */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full mb-6"
              >
                <Orbit className="w-4 h-4 text-[#22c55e]" />
                <span className="text-xs font-bold text-white">Stay Connected</span>
              </motion.div>
              
              <h3 className="font-black text-3xl md:text-4xl tracking-tight mb-3">
                Join Our <span className="bg-gradient-to-r from-[#60a5fa] to-[#22c55e] bg-clip-text text-transparent">Newsletter</span>
              </h3>
              <p className="text-white/60 text-base md:text-lg">Weekly insights and industry trends delivered to your inbox.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 sm:w-auto w-full"
            >
              <div className="relative flex-1 sm:w-96">
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-white/20 transition-all"
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 0 0 0px rgba(37, 99, 235, 0)',
                      '0 0 0 4px rgba(37, 99, 235, 0.1)',
                      '0 0 0 0px rgba(37, 99, 235, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              
              <button className="relative px-6 py-4 overflow-hidden rounded-2xl group">
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
                
                <span className="relative flex items-center gap-2 text-white font-bold whitespace-nowrap">
                  <Brain className="w-5 h-5" />
                  <span className="hidden sm:inline">Sync</span>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-[#2563eb] via-[#22c55e] to-[#2563eb] rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
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
                
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-xl tracking-tighter">TrueTech</span>
                <motion.span 
                  className="text-sm font-bold text-transparent"
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
            
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium IT staffing solutions. Building exceptional teams since 2012.
            </p>
            
            <div className="flex gap-2">
              {[
                { Icon: Twitter, gradient: 'from-blue-500 to-blue-600' },
                { Icon: Linkedin, gradient: 'from-blue-600 to-blue-700' },
                { Icon: Facebook, gradient: 'from-blue-500 to-indigo-600' },
                { Icon: Instagram, gradient: 'from-pink-500 to-purple-600' },
              ].map(({ Icon, gradient }, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="relative w-11 h-11 rounded-2xl overflow-hidden group"
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            {
              title: 'Company',
              links: [
                { to: '/about', label: 'About Us' },
                { to: '/careers', label: 'Careers' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact' },
              ],
            },
            {
              title: 'Services',
              links: [
                { to: '/services', label: 'IT Staffing' },
                { to: '/services', label: 'Consulting' },
                { to: '/services', label: 'Development' },
                { to: '/services', label: 'Cloud Services' },
              ],
            },
            {
              title: 'Industries',
              links: [
                { to: '/industries', label: 'Healthcare' },
                { to: '/industries', label: 'Finance' },
                { to: '/industries', label: 'E-Commerce' },
                { to: '/industries', label: 'Manufacturing' },
              ],
            },
          ].map((column, colIndex) => (
            <motion.div 
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
            >
              <h4 className="font-bold text-white mb-5 text-base">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to}
                      className="group relative inline-flex items-center text-white/60 hover:text-white text-sm transition-colors"
                    >
                      <motion.span
                        className="absolute -left-4 w-2 h-2 bg-gradient-to-r from-[#2563eb] to-[#22c55e] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info - Futuristic Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-white mb-5 text-base">Get In Touch</h4>
            <div className="space-y-3">
              {[
                { Icon: Mail, label: 'dipa@true-techsolutions.com', type: 'mailto:dipa@true-techsolutions.com', gradient: 'from-blue-500 to-blue-600' },
                { Icon: Phone, label: '+1 (512) 555-0100', type: 'tel:+15125550100', gradient: 'from-emerald-500 to-emerald-600' },
                { Icon: MapPin, label: 'Granite Bay, CA', type: '#', gradient: 'from-violet-500 to-violet-600' },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.type}
                  className="group flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <contact.Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-semibold group-hover:text-white transition-colors">
                    {contact.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="text-white/40 text-sm">
                © 2026 TrueTech Solutions. All rights reserved.
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-[#22c55e] to-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-white/60 text-xs font-bold">Secure Platform</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-white/40 hover:text-white text-sm transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {text}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </footer>
  );
}