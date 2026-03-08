import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { 
  Users, 
  Clock, 
  Award, 
  Building2,
  Code,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Cpu,
  ShieldCheck,
  Heart,
  CreditCard,
  Shield,
  ShoppingCart,
  Factory,
  Wifi,
  Zap,
  Monitor,
  TrendingUp,
  Target,
  Rocket,
  MessageSquare,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Brain,
  Waves,
  Orbit,
  Layers,
  Search
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

// Animated Counter
function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [end]);
  
  return <span>{prefix}{count}{suffix}</span>;
}

// Particle Background Component
function ParticleField() {
  const particles = Array.from({ length: 30 });
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-[#2563eb] to-[#22c55e] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// Holographic Text Effect
function HolographicText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#2563eb] via-[#22c55e] to-[#2563eb] opacity-40 animate-pulse"></span>
      <span className="relative bg-gradient-to-r from-[#60a5fa] via-[#22c55e] to-[#a78bfa] bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="overflow-x-hidden bg-[#050510]" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#050510]"></div>
          
          {/* Mesh gradient overlay */}
          <motion.div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          {/* Particle field */}
          <ParticleField />
          
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all">
              {/* Holographic shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="relative"
              >
                <CheckCircle className="w-4 h-4 text-[#22c55e]" />
                <motion.div
                  className="absolute inset-0 bg-[#22c55e] rounded-full blur-md"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
              
              <span className="text-sm font-bold text-white/90">Trusted by Fortune 500 Companies</span>
              
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-3 bg-gradient-to-t from-[#2563eb] to-[#22c55e] rounded-full"
                    animate={{
                      scaleY: [1, 1.8, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 
              className="font-black tracking-tight leading-[1.05] mb-6 md:mb-8"
              style={{ fontSize: 'clamp(40px, 8vw, 120px)', letterSpacing: '-0.04em' }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #fff 0%, #60a5fa 25%, #22c55e 50%, #a78bfa 75%, #fff 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
                className="text-transparent"
              >
                Build Elite Teams
              </motion.div>
              <div className="text-white/50 text-[0.5em] mt-4">
                in <HolographicText>Record Time</HolographicText>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 text-base md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-10 md:mb-12"
            >
              AI-powered talent matching. Lightning-fast delivery. 
              <span className="text-[#22c55e] font-semibold"> Pre-vetted engineers</span> ready in 
              <span className="text-[#2563eb] font-semibold"> 48 hours</span>.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group relative px-8 py-5 overflow-hidden rounded-3xl"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#2563eb] via-[#22c55e] to-[#a78bfa] p-[2px]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8]"></div>
                </div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                
                <span className="relative flex items-center justify-center gap-3 text-white font-bold text-lg">
                  <Rocket className="w-5 h-5" />
                  Get Started Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </Link>

              <Link
                to="/services"
                className="group relative px-8 py-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span className="flex items-center justify-center gap-3 text-white font-bold text-lg">
                  <Search className="w-5 h-5" />
                  Explore Services
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Bento Grid - Stats & Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto"
          >
            {[
              { icon: Users, number: '3,000+', label: 'Experts Placed', gradient: 'from-blue-500 to-cyan-400' },
              { icon: TrendingUp, number: '98%', label: 'Retention Rate', gradient: 'from-emerald-500 to-green-400' },
              { icon: Clock, number: '48hrs', label: 'Avg. Placement', gradient: 'from-violet-500 to-purple-400' },
              { icon: Building2, number: '250+', label: 'Global Clients', gradient: 'from-orange-500 to-amber-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative group cursor-pointer"
              >
                {/* Holographic glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Glass card */}
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 md:p-6 overflow-hidden group-hover:border-white/20 transition-all">
                  {/* Animated mesh */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${stat.gradient.includes('blue') ? 'rgba(37, 99, 235, 0.1)' : stat.gradient.includes('emerald') ? 'rgba(34, 197, 94, 0.1)' : stat.gradient.includes('violet') ? 'rgba(139, 92, 246, 0.1)' : 'rgba(249, 115, 22, 0.1)'} 0%, transparent 70%)`,
                    }}
                  />
                  
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-2xl`}>
                    <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  
                  <div className="font-black text-3xl md:text-4xl text-white mb-1">{stat.number}</div>
                  <div className="text-xs md:text-sm text-white/50 font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 md:mt-20 text-center"
          >
            <p className="text-white/30 text-xs md:text-sm mb-8 uppercase tracking-[0.3em] font-bold">Trusted By Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['Deloitte', 'JPMorgan', 'Salesforce', 'Microsoft', 'Amazon', 'Google'].map((company, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="absolute inset-0 blur-xl bg-gradient-to-r from-[#2563eb] to-[#22c55e] opacity-0 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="relative text-white/40 font-black text-lg md:text-2xl group-hover:text-white transition-colors">
                    {company}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services - Fluid Bento Grid */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0520] to-[#050510]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full mb-6">
              <Orbit className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm font-bold text-white/80">Our Services</span>
            </div>
            
            <h2 className="font-black text-white tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '-0.03em' }}>
              Premium Staffing
              <br />
              <HolographicText>Solutions</HolographicText>
            </h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {/* Large Featured Card - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/30 to-[#1d4ed8]/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden group-hover:border-white/20 transition-all min-h-[300px] md:min-h-[400px]">
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-20"
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
                
                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mb-6 shadow-2xl">
                    <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  <h3 className="font-black text-2xl md:text-4xl text-white mb-4">IT Staffing Solutions</h3>
                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                    From contract to full-time placements, we connect you with top-tier technology talent. 
                    Pre-vetted professionals ready to scale your team instantly.
                  </p>
                  
                  <Link to="/services" className="inline-flex items-center gap-2 text-[#60a5fa] font-bold hover:gap-4 transition-all">
                    Explore Staffing Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Smaller card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/30 to-emerald-500/30 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 overflow-hidden group-hover:border-white/20 transition-all min-h-[300px] md:min-h-[400px] flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#22c55e] to-emerald-600 flex items-center justify-center mb-4 shadow-2xl">
                  <Award className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-black text-xl md:text-2xl text-white mb-3">Premium Screening</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed flex-1">
                  Rigorous technical assessments and cultural fit evaluations ensure perfect matches.
                </p>
                
                <Link to="/services" className="inline-flex items-center gap-2 text-[#22c55e] font-bold text-sm mt-4">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Second Row - 3 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Cloud, title: 'Cloud & DevOps', desc: 'Expert cloud architects and DevOps engineers for modern infrastructure', gradient: 'from-cyan-500 to-cyan-600' },
              { icon: Lock, title: 'Security Specialists', desc: 'Cybersecurity professionals to protect your digital assets', gradient: 'from-violet-500 to-violet-600' },
              { icon: Code, title: 'Software Development', desc: 'Full-stack developers, mobile engineers, and specialists', gradient: 'from-orange-500 to-orange-600' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 overflow-hidden group-hover:border-white/20 transition-all">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-2xl`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-black text-lg md:text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{service.desc}</p>
                  
                  <div className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Learn More <ArrowRight className="w-4 h-4 text-white/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries - Morphing Blobs */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#0B1F3A] to-[#050510]"></div>
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="font-black text-white tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '-0.03em' }}>
              Industries We
              <br />
              <HolographicText>Serve</HolographicText>
            </h2>
          </motion.div>

          {/* Fluid Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Heart, title: 'Healthcare', gradient: 'from-rose-500 to-pink-500' },
              { icon: CreditCard, title: 'Financial Services', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Insurance', gradient: 'from-emerald-500 to-teal-500' },
              { icon: ShoppingCart, title: 'E-Commerce', gradient: 'from-orange-500 to-amber-500' },
              { icon: Factory, title: 'Manufacturing', gradient: 'from-slate-500 to-gray-600' },
              { icon: Wifi, title: 'Telecommunications', gradient: 'from-violet-500 to-purple-500' },
              { icon: Zap, title: 'Energy & Utilities', gradient: 'from-yellow-500 to-orange-500' },
              { icon: Monitor, title: 'Media & Tech', gradient: 'from-cyan-500 to-blue-600' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotateZ: 3 }}
                className="relative group cursor-pointer"
              >
                {/* Morphing blob background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity`}
                  animate={{
                    borderRadius: ['2rem', '3rem', '2rem'],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 overflow-hidden group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                  <motion.div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 shadow-2xl`}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <industry.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="font-black text-base md:text-lg text-white">{industry.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Timeline with 3D Elements */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] to-[#0a0a1a]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-black text-white tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '-0.03em' }}>
              Our <HolographicText>Process</HolographicText>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 md:gap-6">
            {[
              { number: 1, title: 'Discover', desc: 'We analyze your requirements', icon: Search, gradient: 'from-blue-500 to-blue-600' },
              { number: 2, title: 'Match', desc: 'AI-powered talent matching', icon: Target, gradient: 'from-violet-500 to-violet-600' },
              { number: 3, title: 'Screen', desc: 'Technical & cultural assessment', icon: CheckCircle, gradient: 'from-emerald-500 to-emerald-600' },
              { number: 4, title: 'Deploy', desc: 'Seamless onboarding process', icon: Rocket, gradient: 'from-orange-500 to-orange-600' },
              { number: 5, title: 'Support', desc: 'Continuous optimization', icon: Sparkles, gradient: 'from-rose-500 to-rose-600' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative group"
              >
                {/* Connection line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-white/20 to-transparent z-0"></div>
                )}

                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 overflow-hidden group-hover:border-white/20 transition-all">
                  {/* Step number with holographic effect */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-2xl relative overflow-hidden`}
                    whileHover={{ rotateZ: 360 }}
                    transition={{ duration: 0.6 }}
                  >
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
                    <step.icon className="w-7 h-7 text-white relative z-10" />
                  </motion.div>
                  
                  <h3 className="font-black text-lg md:text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  
                  {/* Subtle step indicator */}
                  <div className="mt-4 text-white/20 text-xs font-bold">STEP {step.number}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] to-[#050510]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-black text-white tracking-tight leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 80px)', letterSpacing: '-0.03em' }}>
              <HolographicText>Client Success</HolographicText>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: 'TrueTech delivered 10 senior engineers in under a week. Each hire has been exceptional and perfectly aligned with our needs.',
                name: 'Sarah Chen',
                title: 'VP of Engineering',
                company: 'TechCorp',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                quote: 'The quality of candidates and speed of delivery is unmatched. We scaled from 5 to 50 engineers seamlessly.',
                name: 'Marcus Williams',
                title: 'CTO',
                company: 'InnovateLabs',
                gradient: 'from-emerald-500 to-emerald-600',
              },
              {
                quote: 'Outstanding service with a 100% retention rate. TrueTech understands our culture and technical requirements perfectly.',
                name: 'Emily Rodriguez',
                title: 'Head of Talent',
                company: 'DataSystems',
                gradient: 'from-violet-500 to-violet-600',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Holographic glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-8 overflow-hidden group-hover:border-white/20 transition-all">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-white/80 text-base leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-xl`}>
                      <span className="text-white font-black text-sm">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.title}</div>
                      <div className="text-sm text-white/40">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Immersive */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#0B1F3A]"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full mb-8">
              <Layers className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Ready to Transform Your Team?</span>
            </div>

            <h2 className="font-black text-white tracking-tight leading-tight mb-8" style={{ fontSize: 'clamp(40px, 8vw, 100px)', letterSpacing: '-0.04em' }}>
              Let's Build
              <br />
              Your <HolographicText className="text-white">Dream Team</HolographicText>
            </h2>

            <p className="text-white/80 text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Top-tier candidates in 48 hours. No commitment required. Free consultation included.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative px-10 py-6 overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 bg-white rounded-3xl"></div>
                
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
                
                <span className="relative flex items-center justify-center gap-3 text-[#0B1F3A] font-black text-xl">
                  <Rocket className="w-6 h-6" />
                  Start Your Search
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}