import Link from "next/link";
import { Briefcase, Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
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
    { label: "Software Dev", href: "/services#software-development" },
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
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter strip */}
        <div className="py-8 lg:py-12 border-b border-white/[0.06]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h3 className="text-lg lg:text-xl font-semibold text-white">
                Stay ahead of the talent market
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Weekly insights on staffing trends and hiring strategies.
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto shrink-0">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 sm:w-64 min-w-0 px-4 py-3 bg-white/[0.06] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-slate-500 focus:border-primary-500/50 focus:bg-white/[0.08] transition-all"
              />
              <button className="px-4 sm:px-5 py-3 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer shrink-0">
                <span className="hidden sm:inline">Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-10 lg:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column - full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">TrueTech</span>
                <span className="text-primary-400">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              The nation&apos;s #1 IT staffing firm. Placing elite engineers and
              technology leaders since 2012.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors py-1"
              >
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                {companyInfo.email}
              </a>
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                {companyInfo.phone}
              </a>
              <div className="flex items-start gap-2.5 py-1">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} TrueTech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-500 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
