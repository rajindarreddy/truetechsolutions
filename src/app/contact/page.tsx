"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const inputClasses =
  "w-full px-4 py-3 bg-white border border-border rounded-xl text-sm text-navy-900 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all placeholder:text-slate-400";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="pt-24 pb-12 lg:pt-36 lg:pb-16 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
              Contact Us
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 mb-4 lg:mb-6 leading-tight tracking-tight">
              Let&apos;s Build Your Team Together
            </h1>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Whether you need a single specialist or an entire
              engineering team, we&apos;re ready to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">
                Reach out directly or fill out the form. Our team
                typically responds within one business day.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-sm font-medium text-navy-900 group-hover:text-primary-600 transition-colors">
                      {companyInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="text-sm font-medium text-navy-900 group-hover:text-primary-600 transition-colors">
                      {companyInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Headquarters</p>
                    <p className="text-sm font-medium text-navy-900">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Our Offices
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {companyInfo.offices.map((office) => (
                    <div
                      key={office}
                      className="flex items-center gap-2 text-sm text-slate-500 py-1"
                    >
                      <MapPin className="w-3 h-3 text-primary-400 shrink-0" />
                      {office}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-xl border border-border p-5 sm:p-7 lg:p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-5">
                      We&apos;ve received your message and will get back to you
                      within one business day.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-lg font-bold text-navy-900 mb-5">
                      Tell Us About Your Needs
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-medium text-navy-900 mb-1.5">
                          First Name
                        </label>
                        <input id="firstName" type="text" required className={inputClasses} placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-medium text-navy-900 mb-1.5">
                          Last Name
                        </label>
                        <input id="lastName" type="text" required className={inputClasses} placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-navy-900 mb-1.5">
                          Work Email
                        </label>
                        <input id="email" type="email" required className={inputClasses} placeholder="john@company.com" />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-medium text-navy-900 mb-1.5">
                          Company
                        </label>
                        <input id="company" type="text" className={inputClasses} placeholder="Acme Corp" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="interest" className="block text-xs font-medium text-navy-900 mb-1.5">
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

                    <div className="mb-5">
                      <label htmlFor="message" className="block text-xs font-medium text-navy-900 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your talent needs..."
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
