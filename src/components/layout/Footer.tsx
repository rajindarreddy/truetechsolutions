import Link from "next/link";
import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { companyInfo } from "@/data/company";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "IT Staffing", href: "/services#it-staffing" },
    { label: "Contract Staffing", href: "/services#contract-staffing" },
    { label: "Direct Hire", href: "/services#direct-hire" },
    { label: "Managed Teams", href: "/services#managed-teams" },
    { label: "Software Development", href: "/services#software-development" },
    { label: "Cloud & DevOps", href: "/services#cloud-devops" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Financial Services", href: "/industries#banking-financial" },
    { label: "Retail & E-Commerce", href: "/industries#retail-ecommerce" },
    { label: "Technology", href: "/industries#technology" },
    { label: "Manufacturing", href: "/industries#manufacturing" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <Container className="relative">
        {/* Newsletter strip */}
        <div className="py-12 border-b border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white tracking-[-0.01em]">
                Stay ahead of the talent market
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Get weekly insights on staffing trends and hiring strategies.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 md:w-72 px-4 py-2.5 bg-white/[0.06] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.08] transition-all"
              />
              <button className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer">
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center">
                <Briefcase className="w-[18px] h-[18px] text-white" />
              </div>
              <span className="text-[20px] font-bold tracking-[-0.02em]">
                <span className="text-white">TrueTech</span>
                <span className="text-primary-400">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              The nation&apos;s #1 IT staffing firm. Placing elite engineers and
              technology leaders at the world&apos;s most ambitious companies since 2012.
            </p>
            <div className="space-y-3 text-[13px]">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-500" />
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-500" />
                {companyInfo.phone}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-slate-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-slate-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-widest mb-5">
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-slate-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-slate-600">
            &copy; {new Date().getFullYear()} True Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
