"use client";

import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your work email"
        className="flex-1 px-4 py-3 bg-white border border-border rounded-xl text-sm text-navy-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-800 hover:to-primary-700 active:from-primary-900 active:to-primary-800 transition-all text-sm cursor-pointer shadow-[0_2px_8px_rgba(37,99,235,0.25)] flex items-center justify-center gap-2"
      >
        Subscribe
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
