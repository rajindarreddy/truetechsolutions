import { motion } from 'motion/react';
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp,
  Globe,
  MapPin,
  Building2,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router';

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-6"
              style={{ fontSize: 'clamp(30px, 5vw, 60px)', letterSpacing: '-0.03em' }}
            >
              About <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">TrueTech Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#64748b] text-base md:text-lg leading-relaxed"
            >
              Since 2012, we've been connecting exceptional technology talent with companies that need them most. 
              Today, we're the nation's #1 IT staffing firm, trusted by Fortune 500 companies and high-growth startups alike.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Calendar, label: 'Founded', value: '2012' },
              { icon: MapPin, label: 'Headquarters', value: 'Granite Bay, CA' },
              { icon: Building2, label: 'Offices', value: '1 Location' },
              { icon: Users, label: 'Team Size', value: '120+ Members' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-[#64748b] mb-1">{item.label}</div>
                <div className="font-extrabold text-xl text-[#0B1F3A]">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 bg-[#0B1F3A] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '250+', label: 'Enterprise Clients' },
              { number: '3,000+', label: 'Successful Placements' },
              { number: '98%', label: 'Client Retention' },
              { number: '120+', label: 'Team Members' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-extrabold text-4xl md:text-5xl text-white mb-2">{stat.number}</div>
                <div className="text-[#94a3b8] text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#e2e8f0] rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-[#2563eb]" />
              </div>
              <h3 className="font-bold text-2xl text-[#0B1F3A] mb-4">Our Mission</h3>
              <p className="text-[#64748b] leading-relaxed">
                To eliminate the hiring bottleneck for technology companies by providing instant access 
                to pre-vetted, world-class engineering talent. We believe every company deserves to build 
                elite teams without the traditional recruitment headaches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#e2e8f0] rounded-xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-7 h-7 text-[#22c55e]" />
              </div>
              <h3 className="font-bold text-2xl text-[#0B1F3A] mb-4">Our Vision</h3>
              <p className="text-[#64748b] leading-relaxed">
                To become the most trusted global technology talent platform, where companies find their 
                perfect team members in hours, not months. We're building a future where hiring exceptional 
                engineers is as simple as ordering coffee.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Our Core Values
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'We never compromise on quality. Every candidate represents our reputation.' },
              { icon: Heart, title: 'Integrity', desc: 'Honest communication and ethical practices in every client and candidate interaction.' },
              { icon: TrendingUp, title: 'Innovation', desc: 'Constantly improving our processes with technology and data-driven insights.' },
              { icon: Users, title: 'Partnership', desc: "We succeed when our clients succeed. Your goals become our goals." },
              { icon: Shield, title: 'Trust', desc: 'Building long-term relationships through consistent delivery and reliability.' },
              { icon: Globe, title: 'Diversity', desc: 'Championing inclusive hiring and celebrating diverse perspectives in tech.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0B1F3A] mb-2">{value.title}</h4>
                  <p className="text-[#64748b] text-sm leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Our Journey
            </h2>
            <p className="text-[#64748b] text-base md:text-lg">
              From startup to industry leader
            </p>
          </div>

          <div className="space-y-8">
            {[
              { year: '2012', title: 'Founded in Austin', desc: 'Started with a mission to revolutionize IT staffing with a quality-first approach.' },
              { year: '2015', title: 'First 1,000 Placements', desc: 'Reached major milestone and expanded to serve Fortune 500 clients.' },
              { year: '2018', title: 'National Expansion', desc: 'Opened offices in San Francisco, New York, and Chicago.' },
              { year: '2021', title: 'Technology Services Launch', desc: 'Added full-service development and consulting capabilities.' },
              { year: '2023', title: 'Industry Recognition', desc: 'Named #1 IT Staffing Firm by TechCrunch and Forbes.' },
              { year: '2025', title: 'Global Reach', desc: 'Serving 250+ enterprise clients with 120+ team members worldwide.' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  {index < 5 && <div className="w-0.5 flex-1 bg-[#e2e8f0] mt-2"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
                    <div className="text-sm text-[#64748b] mb-1">{milestone.year}</div>
                    <h4 className="font-bold text-lg text-[#0B1F3A] mb-2">{milestone.title}</h4>
                    <p className="text-[#64748b] text-sm leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
              Leadership Team
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto">
              Meet the people driving our vision forward
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'David Martinez', role: 'Founder & CEO', initials: 'DM', color: 'from-[#2563eb] to-[#1d4ed8]' },
              { name: 'Jennifer Park', role: 'Chief Operating Officer', initials: 'JP', color: 'from-[#22c55e] to-emerald-600' },
              { name: 'Michael Chen', role: 'VP of Engineering', initials: 'MC', color: 'from-violet-500 to-purple-600' },
              { name: 'Sarah Williams', role: 'VP of Client Services', initials: 'SW', color: 'from-orange-500 to-amber-600' }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-extrabold text-3xl`}>
                  {member.initials}
                </div>
                <h4 className="font-bold text-lg text-[#0B1F3A] mb-1">{member.name}</h4>
                <p className="text-[#64748b] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B1F3A] to-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-white tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}>
            Ready to Work Together?
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg mb-8">
            Let's build something great together. Start your hiring journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-[#0B1F3A] rounded-lg font-semibold text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
            >
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
