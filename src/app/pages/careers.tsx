import { motion } from 'motion/react';
import {
  TrendingUp,
  Heart,
  Users,
  Zap,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router';

export default function Careers() {
  const perks = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths with quarterly reviews and mentorship programs.',
      color: 'from-[#2563eb] to-[#1d4ed8]'
    },
    {
      icon: Heart,
      title: 'Comprehensive Benefits',
      description: 'Health, dental, vision, 401(k) matching, and unlimited PTO.',
      color: 'from-[#22c55e] to-emerald-600'
    },
    {
      icon: Users,
      title: 'Inclusive Culture',
      description: 'Diverse team with ERGs, DEI initiatives, and flexible work arrangements.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Work-Life Balance',
      description: 'Remote-first policy with flexible hours and wellness programs.',
      color: 'from-orange-500 to-amber-600'
    }
  ];

  const jobs = [
    {
      title: 'Senior Technical Recruiter',
      location: 'Austin, TX',
      type: 'Full-time',
      department: 'Recruitment',
      description: 'Lead end-to-end recruitment for senior engineering roles at Fortune 500 clients. 5+ years of technical recruiting experience required.'
    },
    {
      title: 'Account Executive',
      location: 'Remote',
      type: 'Full-time',
      department: 'Sales',
      description: 'Drive new business development and manage client relationships. SaaS or staffing sales experience preferred.'
    },
    {
      title: 'Talent Sourcer',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Recruitment',
      description: 'Build talent pipelines through creative sourcing strategies. Experience with LinkedIn Recruiter and Boolean search required.'
    },
    {
      title: 'Client Success Manager',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Client Services',
      description: 'Ensure client satisfaction and retention through proactive relationship management. 3+ years in customer success.'
    },
    {
      title: 'Marketing Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Lead demand generation, content marketing, and brand awareness initiatives. B2B marketing experience required.'
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
            Join Our <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Help us connect exceptional talent with amazing companies. Build your career at the nation's #1 IT staffing firm.
          </motion.p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Why Work at TrueTech
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto">
              We invest in our team's success and well-being
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${perk.color} flex items-center justify-center mx-auto mb-4`}>
                  <perk.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-[#0B1F3A] mb-2">{perk.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Open Positions
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto">
              Find your next opportunity with us
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-[#e2e8f0] rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-[#0B1F3A] mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[#64748b]">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 whitespace-nowrap min-h-[44px] lg:min-h-0">
                    Apply Now
                  </button>
                </div>
                <p className="text-[#64748b] leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B1F3A] to-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-extrabold text-white tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Don't See Your Role?
            </h2>
            <p className="text-[#94a3b8] text-base md:text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and we'll reach out when relevant positions open up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-[#0B1F3A] rounded-lg font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
              >
                Submit General Application
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
