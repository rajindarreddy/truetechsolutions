import { motion } from 'motion/react';
import {
  Heart,
  CreditCard,
  Shield,
  ShoppingCart,
  Factory,
  Wifi,
  Zap,
  Monitor,
  ArrowRight,
  Check
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Industries() {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'From EHR integration to telemedicine platforms, we understand the unique challenges of healthcare IT. Our HIPAA-compliant developers build secure, scalable solutions that improve patient outcomes while meeting strict regulatory requirements.',
      color: 'from-rose-500 to-pink-500',
      focus: [
        'Electronic Health Records (EHR/EMR) integration',
        'HIPAA compliance and data security',
        'Telemedicine and remote patient monitoring',
        'Healthcare analytics and population health'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600'
    },
    {
      icon: CreditCard,
      title: 'Banking & Financial Services',
      description: 'Secure, compliant fintech solutions from mobile banking to fraud detection. We place engineers experienced in payment processing, core banking systems, and regulatory compliance across SOX, PCI-DSS, and GDPR.',
      color: 'from-blue-500 to-cyan-500',
      focus: [
        'Core banking platform modernization',
        'Payment processing and fraud detection',
        'Regulatory compliance (SOX, PCI-DSS, GDPR)',
        'Digital banking and mobile wallet solutions'
      ],
      image: 'https://images.unsplash.com/photo-1771527253774-34c5c2860fee?w=600'
    },
    {
      icon: Shield,
      title: 'Insurance',
      description: 'Transform underwriting, claims processing, and customer experience with modern insurance technology. Our specialists deliver AI-powered risk assessment, automated claims systems, and omnichannel customer portals.',
      color: 'from-emerald-500 to-teal-500',
      focus: [
        'Claims processing automation',
        'Policy administration systems',
        'Underwriting and risk assessment platforms',
        'Customer self-service portals'
      ],
      image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?w=600'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-Commerce',
      description: 'Build seamless omnichannel experiences that drive conversions. From headless commerce to inventory management, we provide talent that understands modern retail tech stacks including Shopify, Magento, and custom platforms.',
      color: 'from-orange-500 to-amber-500',
      focus: [
        'E-commerce platform development',
        'Omnichannel retail experiences',
        'Inventory and order management systems',
        'Personalization and recommendation engines'
      ],
      image: 'https://images.unsplash.com/photo-1672385277648-85eddc237a2b?w=600'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Drive Industry 4.0 transformation with IoT, automation, and smart factory solutions. Our engineers implement real-time monitoring, predictive maintenance, and supply chain optimization for modern manufacturers.',
      color: 'from-slate-500 to-gray-500',
      focus: [
        'IoT and sensor data integration',
        'Predictive maintenance platforms',
        'Supply chain optimization',
        'Manufacturing execution systems (MES)'
      ],
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?w=600'
    },
    {
      icon: Wifi,
      title: 'Telecommunications',
      description: '5G network engineers, VoIP specialists, and telecommunications infrastructure experts. We place talent that builds and maintains the backbone of modern communication networks, from edge computing to SDN/NFV.',
      color: 'from-violet-500 to-purple-500',
      focus: [
        '5G network architecture and deployment',
        'VoIP and unified communications',
        'Network function virtualization (NFV)',
        'Telecom billing and OSS/BSS systems'
      ],
      image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=600'
    },
    {
      icon: Zap,
      title: 'Energy & Utilities',
      description: 'Smart grid solutions, renewable energy platforms, and energy management systems. Our developers understand SCADA systems, demand response programs, and the complex integrations required in modern energy infrastructure.',
      color: 'from-yellow-500 to-orange-500',
      focus: [
        'Smart grid and AMI (Advanced Metering Infrastructure)',
        'Renewable energy management platforms',
        'SCADA and industrial control systems',
        'Energy trading and market platforms'
      ],
      image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=600'
    },
    {
      icon: Monitor,
      title: 'Technology & SaaS',
      description: 'From developer tools to enterprise SaaS, we speak your language. Our talent pool includes full-stack engineers, DevOps experts, and product leaders who have built and scaled software products at companies like yours.',
      color: 'from-cyan-500 to-blue-500',
      focus: [
        'SaaS product development and scaling',
        'Developer tools and API platforms',
        'Enterprise software and B2B solutions',
        'Platform engineering and infrastructure'
      ],
      image: 'https://images.unsplash.com/photo-1681949215173-fe0d15c790c1?w=600'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-6"
            style={{ fontSize: 'clamp(30px, 5vw, 60px)', letterSpacing: '-0.03em' }}
          >
            Industries <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">We Serve</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Deep domain expertise across the sectors that drive the global economy
          </motion.p>
        </div>
      </section>

      {/* Industries - Alternating Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl md:text-3xl text-[#0B1F3A] mb-4">{industry.title}</h3>
                  <p className="text-[#64748b] leading-relaxed mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-[#0B1F3A] mb-3">Key Focus Areas</h4>
                    <div className="space-y-3">
                      {industry.focus.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#22c55e]" />
                          </div>
                          <span className="text-[#64748b] text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-200"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <ImageWithFallback
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B1F3A] to-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-white tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Ready to Transform Your Industry?
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg mb-8">
            Let's discuss how our industry expertise can accelerate your technology initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#0B1F3A] rounded-lg font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
