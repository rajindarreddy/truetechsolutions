import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Building2, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    { city: 'Austin', address: '123 Congress Ave, Suite 500, Austin, TX 78701' },
    { city: 'San Francisco', address: '456 Market St, Floor 12, San Francisco, CA 94102' },
    { city: 'New York', address: '789 Broadway, Suite 800, New York, NY 10003' },
    { city: 'Chicago', address: '321 Wacker Dr, Floor 15, Chicago, IL 60606' }
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
            Get in <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Ready to build your elite engineering team? Let's discuss your hiring needs and how we can help.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-bold text-2xl text-[#0B1F3A] mb-6">Contact Information</h2>
                
                {/* Contact Methods */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1F3A] mb-1">Email</div>
                      <a href="mailto:contact@truetech.com" className="text-[#64748b] hover:text-[#2563eb] transition-colors duration-200">
                        contact@truetech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1F3A] mb-1">Phone</div>
                      <a href="tel:+15125550123" className="text-[#64748b] hover:text-[#2563eb] transition-colors duration-200">
                        +1 (512) 555-0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1F3A] mb-1">Headquarters</div>
                      <p className="text-[#64748b]">
                        123 Congress Ave<br />
                        Suite 500<br />
                        Austin, TX 78701
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-[#2563eb]" />
                    <h3 className="font-bold text-[#0B1F3A]">Our Offices</h3>
                  </div>
                  <div className="space-y-3">
                    {offices.map((office, index) => (
                      <div key={index} className="pb-3 border-b border-[#e2e8f0] last:border-b-0 last:pb-0">
                        <div className="font-semibold text-[#0B1F3A] text-sm mb-1">{office.city}</div>
                        <div className="text-[#64748b] text-xs">{office.address}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 md:p-8"
              >
                <h2 className="font-bold text-2xl text-[#0B1F3A] mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First Name & Last Name */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block font-medium text-[#0B1F3A] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg text-[#0B1F3A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block font-medium text-[#0B1F3A] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg text-[#0B1F3A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-medium text-[#0B1F3A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg text-[#0B1F3A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-200"
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block font-medium text-[#0B1F3A] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg text-[#0B1F3A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-200"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  {/* Interest Dropdown */}
                  <div>
                    <label htmlFor="interest" className="block font-medium text-[#0B1F3A] mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg text-[#0B1F3A] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select an option</option>
                      <option value="contract-staffing">Contract Staffing</option>
                      <option value="contract-to-hire">Contract-to-Hire</option>
                      <option value="direct-hire">Direct Hire</option>
                      <option value="managed-teams">Managed Teams</option>
                      <option value="executive-search">Executive Search</option>
                      <option value="technology-services">Technology Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-medium text-[#0B1F3A] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-[#e2e8f0] rounded-lg text-[#0B1F3A] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your hiring needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-lg font-semibold text-base transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-[#94a3b8] text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-extrabold text-[#0B1F3A] tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}>
              Quick Response Guarantee
            </h2>
            <p className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto mb-8">
              We respond to all inquiries within 2 business hours. For urgent staffing needs, call us directly at +1 (512) 555-0123.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[#64748b]">
              <div>
                <div className="font-bold text-[#0B1F3A] text-lg mb-1">Monday - Friday</div>
                <div>8:00 AM - 6:00 PM CST</div>
              </div>
              <div>
                <div className="font-bold text-[#0B1F3A] text-lg mb-1">Saturday</div>
                <div>9:00 AM - 2:00 PM CST</div>
              </div>
              <div>
                <div className="font-bold text-[#0B1F3A] text-lg mb-1">Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
