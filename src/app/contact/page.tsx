"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const inputClasses =
  "w-full px-4 py-3 bg-white border border-border rounded-xl text-[14px] text-navy-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all placeholder:text-slate-400";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-[-100px] right-[20%] w-[500px] h-[500px] bg-primary-400/[0.06] rounded-full blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-primary-600 mb-4">
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
              Contact Us
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
            </span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-navy-900 mb-6 leading-[1.1] tracking-[-0.03em]">
              Let&apos;s Build Your Team Together
            </h1>
            <p className="text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re looking for a single specialist or an entire
              engineering team, we&apos;re ready to help. Tell us about your needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-[24px] font-bold text-navy-900 mb-4 tracking-[-0.02em]">
                Get in Touch
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                Reach out to us directly or fill out the form. Our team
                typically responds within one business day.
              </p>

              <div className="space-y-5">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-primary-100 group-hover:to-primary-200 transition-colors duration-500">
                    <Mail className="w-[18px] h-[18px] text-primary-600" />
                  </div>
                  <div>
                    <p className="text-[12px] text-slate-400 mb-0.5">Email</p>
                    <p className="text-[15px] text-navy-900 font-medium group-hover:text-primary-600 transition-colors">
                      {companyInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-primary-100 group-hover:to-primary-200 transition-colors duration-500">
                    <Phone className="w-[18px] h-[18px] text-primary-600" />
                  </div>
                  <div>
                    <p className="text-[12px] text-slate-400 mb-0.5">Phone</p>
                    <p className="text-[15px] text-navy-900 font-medium group-hover:text-primary-600 transition-colors">
                      {companyInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-[18px] h-[18px] text-primary-600" />
                  </div>
                  <div>
                    <p className="text-[12px] text-slate-400 mb-0.5">Headquarters</p>
                    <p className="text-[15px] text-navy-900 font-medium">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-4">
                  Our Offices
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {companyInfo.offices.map((office) => (
                    <div
                      key={office}
                      className="flex items-center gap-2 text-[13.5px] text-slate-500"
                    >
                      <MapPin className="w-3 h-3 text-primary-400" />
                      {office}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl border border-border p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-[24px] font-bold text-navy-900 mb-3 tracking-[-0.02em]">
                      Thank You!
                    </h3>
                    <p className="text-[15px] text-slate-500 max-w-md mx-auto leading-relaxed">
                      We&apos;ve received your message and will get back to you
                      within one business day. We&apos;re excited to learn more
                      about your needs.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-6"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-[20px] font-bold text-navy-900 mb-7 tracking-[-0.01em]">
                      Tell Us About Your Needs
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="firstName" className="block text-[13px] font-medium text-navy-900 mb-2">
                          First Name
                        </label>
                        <input id="firstName" type="text" required className={inputClasses} placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-[13px] font-medium text-navy-900 mb-2">
                          Last Name
                        </label>
                        <input id="lastName" type="text" required className={inputClasses} placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="email" className="block text-[13px] font-medium text-navy-900 mb-2">
                          Work Email
                        </label>
                        <input id="email" type="email" required className={inputClasses} placeholder="john@company.com" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-[13px] font-medium text-navy-900 mb-2">
                          Company
                        </label>
                        <input id="company" type="text" className={inputClasses} placeholder="Acme Corp" />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label htmlFor="interest" className="block text-[13px] font-medium text-navy-900 mb-2">
                        What are you looking for?
                      </label>
                      <select id="interest" className={inputClasses}>
                        <option value="">Select an option</option>
                        <option>IT Staffing</option>
                        <option>Contract Staffing</option>
                        <option>Direct Hire</option>
                        <option>Managed Teams</option>
                        <option>Software Development</option>
                        <option>Cloud & DevOps</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="mb-7">
                      <label htmlFor="message" className="block text-[13px] font-medium text-navy-900 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your talent needs, project requirements, or how we can help..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
