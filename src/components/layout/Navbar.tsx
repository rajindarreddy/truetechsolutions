"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Briefcase, ArrowRight } from "lucide-react";
import { navLinks } from "@/data/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "glass border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-primary-700 to-primary-500 rounded-lg lg:rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(37,99,235,0.3)]">
              <Briefcase className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-white" />
            </div>
            <span className="text-lg lg:text-xl font-bold tracking-tight">
              <span className="text-navy-900">TrueTech</span>
              <span className="gradient-text">Solutions</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-primary-700"
                    : "text-slate-500 hover:text-navy-900"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-700 to-primary-600 rounded-xl shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)] transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile toggle - min 44px touch target */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen overlay */}
      {isOpen && (
        <div className="lg:hidden mobile-menu-enter border-t border-slate-100 bg-white/95 backdrop-blur-lg max-h-[calc(100dvh-64px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                  pathname === link.href
                    ? "text-primary-700 bg-primary-50"
                    : "text-slate-700 active:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-700 to-primary-600 rounded-xl active:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
