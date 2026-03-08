import { motion } from 'motion/react';
import {
  Users,
  Award,
  Building2,
  Code,
  Target,
  Cloud,
  Database,
  Smartphone,
  Lock,
  Cpu,
  Check,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Services() {
  const staffingServices = [
    {
      icon: Users,
      title: 'Contract Staffing',
      description: 'Deploy skilled contractors rapidly for short-term projects, seasonal demand, or urgent technical needs. Our flexible engagement model ensures you have the right expertise exactly when you need it.',
      features: [
        'Pre-vetted candidates delivered in 48 hours',
        'Flexible contract terms from 1 month to 12+ months',
        'No placement fees — hourly or project-based rates',
        'Easy scaling up or down based on project needs'
      ],
      image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?w=600'
    },
    {
      icon: Award,
      title: 'Contract-to-Hire',
      description: 'Test the waters before committing. Evaluate candidates on real projects for 3-6 months, then convert to full-time employees if they meet your expectations. Zero risk, maximum flexibility.',
      features: [
        'Try before you hire with extended evaluation period',
        'Conversion to full-time at no additional cost',
        'Full salary transparency during trial phase',
        '90-day performance guarantee after conversion'
      ],
      image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=600'
    },
    {
      icon: Building2,
      title: 'Direct Hire',
      description: 'Find your next full-time engineering leader or team member. We handle the entire recruitment lifecycle — from candidate sourcing to offer negotiation — ensuring cultural and technical fit.',
      features: [
        'Comprehensive technical and behavioral vetting',
        'Cultural fit assessment aligned to your values',
        'Salary benchmarking and offer negotiation support',
        '6-month replacement guarantee'
      ],
      image: 'https://images.unsplash.com/photo-1672385277648-85eddc237a2b?w=600'
    },
    {
      icon: Code,
      title: 'Managed Teams',
      description: 'Get a dedicated offshore or nearshore development team managed end-to-end by TrueTech. From project management to quality assurance, we handle everything while you focus on strategy.',
      features: [
        'Dedicated team aligned to your timezone',
        'Project manager included at no extra cost',
        'Agile/Scrum methodology with sprint planning',
        'Full infrastructure setup and tooling'
      ],
      image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=600'
    },
    {
      icon: Target,
      title: 'Executive Search',
      description: 'Place C-level technology executives and VPs who can transform your organization. Our executive recruiting practice leverages a global network of senior technical leaders.',
      features: [
        'C-suite and VP-level placements (CTO, CIO, VP Engineering)',
        'Confidential search with discretion and privacy',
        'Board presentation and interview coaching',
        'Compensation structuring and equity advice'
      ],
      image: 'https://images.unsplash.com/photo-1758518729240-7162d07427b8?w=600'
    }
  ];

  const techServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Infrastructure',
      description: 'Seamlessly transition your applications to AWS, Azure, or Google Cloud. We design, implement, and optimize cloud architectures for scalability and cost-efficiency.',
      features: [
        'Multi-cloud and hybrid cloud strategies',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Kubernetes and container orchestration',
        'Cost optimization and FinOps consulting'
      ]
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Build robust data pipelines, warehouses, and real-time analytics platforms. Transform raw data into actionable insights with modern data stack implementation.',
      features: [
        'Data pipeline design (ETL/ELT)',
        'Data warehouse setup (Snowflake, Redshift, BigQuery)',
        'Real-time streaming (Kafka, Kinesis)',
        'BI tool integration (Tableau, Looker, Power BI)'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Create beautiful, high-performance native and cross-platform mobile applications. From MVP to enterprise-scale apps, we deliver on iOS and Android.',
      features: [
        'Native iOS (Swift) and Android (Kotlin) development',
        'Cross-platform (React Native, Flutter)',
        'App Store and Google Play deployment',
        'Push notifications and in-app messaging'
      ]
    },
    {
      icon: Lock,
      title: 'Cybersecurity Services',
      description: 'Protect your infrastructure with enterprise-grade security. Penetration testing, security audits, and compliance consulting to meet industry standards.',
      features: [
        'Penetration testing and vulnerability assessments',
        'SOC 2, HIPAA, PCI-DSS compliance',
        'Security Operations Center (SOC) setup',
        'Incident response and forensics'
      ]
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to drive business outcomes. From computer vision to NLP, we build custom ML models and deploy them at scale.',
      features: [
        'Custom ML model development',
        'Computer vision and image recognition',
        'Natural language processing (NLP)',
        'MLOps and model deployment pipelines'
      ]
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
            Our <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            From rapid contract placements to full-service technology consulting, we offer end-to-end solutions 
            to power your most ambitious projects.
          </motion.p>
        </div>
      </section>

      {/* Staffing Solutions - Alternating Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Staffing Solutions
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto">
              Flexible talent acquisition models for every business need
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {staffingServices.map((service, index) => (
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl md:text-3xl text-[#0B1F3A] mb-4">{service.title}</h3>
                  <p className="text-[#64748b] leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#22c55e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#22c55e]" />
                        </div>
                        <span className="text-[#64748b] text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-3 transition-all duration-200"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Services - Grid Layout */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Technology Services
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto">
              End-to-end development and consulting for modern technology challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {techServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[#22c55e]" />
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-[#0B1F3A] mb-3">{service.title}</h3>
                <p className="text-[#64748b] leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] flex-shrink-0 mt-2"></div>
                      <span className="text-[#64748b] text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#22c55e] font-semibold hover:gap-3 transition-all duration-200"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B1F3A] to-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-white tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Discuss Your Project
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg mb-8">
            Let's talk about your technology needs and how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#0B1F3A] rounded-lg font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
            >
              Schedule a Call
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
