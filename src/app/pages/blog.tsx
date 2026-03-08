import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  const featuredPost = {
    title: 'The Future of IT Staffing: AI-Powered Talent Matching in 2026',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way companies find and hire technical talent, reducing time-to-hire by 70% while improving quality of matches.',
    category: 'Industry Insights',
    author: 'Sarah Chen',
    readTime: '8 min read',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1646153114001-495dfb56506d?w=800'
  };

  const posts = [
    {
      title: '5 Signs Your Engineering Team Needs to Scale',
      excerpt: 'Learn the key indicators that signal time to expand your development team and how to do it strategically.',
      category: 'Hiring Tips',
      author: 'Michael Rodriguez',
      readTime: '5 min read',
      date: 'March 1, 2026',
      image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=400'
    },
    {
      title: 'Contract-to-Hire vs Direct Hire: Which Is Right for You?',
      excerpt: 'A comprehensive guide to choosing the right hiring model for your technical roles.',
      category: 'Recruitment Strategy',
      author: 'Jennifer Park',
      readTime: '6 min read',
      date: 'February 28, 2026',
      image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=400'
    },
    {
      title: 'Remote vs Hybrid: What Top Tech Talent Expects in 2026',
      excerpt: 'Survey results from 2,000 engineers reveal their workplace preferences and deal-breakers.',
      category: 'Talent Trends',
      author: 'David Martinez',
      readTime: '7 min read',
      date: 'February 25, 2026',
      image: 'https://images.unsplash.com/photo-1672385277648-85eddc237a2b?w=400'
    },
    {
      title: 'How to Retain Your Best Engineers: A Data-Driven Approach',
      excerpt: 'Analysis of 500 exits reveals the real reasons engineers leave and how to prevent it.',
      category: 'Employee Retention',
      author: 'Sarah Chen',
      readTime: '9 min read',
      date: 'February 20, 2026',
      image: 'https://images.unsplash.com/photo-1758518729240-7162d07427b8?w=400'
    },
    {
      title: 'Cybersecurity Hiring: Navigating the Talent Shortage',
      excerpt: 'Strategies for attracting and hiring security professionals in a highly competitive market.',
      category: 'Industry Insights',
      author: 'Michael Rodriguez',
      readTime: '6 min read',
      date: 'February 15, 2026',
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?w=400'
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
            Insights & <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Expert perspectives on IT staffing, talent acquisition, and technology trends
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-4">
                  Featured Article
                </div>
                <h2 className="font-extrabold text-white text-2xl md:text-4xl tracking-tight leading-tight mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-white/90 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Link
                  to="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2563eb] rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  Read Article <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Image */}
              <div className="hidden lg:block h-full min-h-[400px]">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}>
              Latest Articles
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-48 bg-gradient-to-br from-[#2563eb]/20 to-[#1d4ed8]/20 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[#2563eb] text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#0B1F3A] mb-2 group-hover:text-[#2563eb] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-[#94a3b8]">
                    <div className="flex items-center gap-2">
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#f8fafc] to-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="font-extrabold text-[#0B1F3A] text-2xl md:text-3xl tracking-tight mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-[#64748b] mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly insights on IT staffing trends, hiring best practices, and technology news.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg text-[#0B1F3A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-[#94a3b8] mt-4">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}