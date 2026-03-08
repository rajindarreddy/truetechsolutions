"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { technologies, roles } from "@/data/technologies";
import { CheckCircle } from "lucide-react";

const categories = ["All", ...new Set(technologies.map((t) => t.category))];

export default function Technologies() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? technologies
      : technologies.filter((t) => t.category === active);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <SectionHeader
          label="Technology Expertise"
          title="Talent Across the Full Stack"
          description="We source professionals across every major technology, platform, and framework."
        />

        {/* Category pills - horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap sm:justify-center mb-10 lg:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                active === cat
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 active:bg-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 mb-14 lg:mb-16">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="bg-white border border-slate-200/80 rounded-xl p-3 sm:p-4 text-center shadow-sm transition-all duration-200 hover:border-primary-200 hover:shadow-md"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-xs sm:text-sm font-bold text-slate-400">
                  {tech.name.slice(0, 2)}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-navy-900 block truncate">
                {tech.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 block">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="bg-gradient-to-br from-surface to-primary-50/30 rounded-xl border border-slate-200/80 p-5 sm:p-8 lg:p-10">
          <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-1 text-center">
            Roles We Fill
          </h3>
          <p className="text-sm text-slate-500 text-center mb-6">
            From individual contributors to technical leadership
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {roles.map((role) => (
              <div
                key={role}
                className="flex items-center gap-2 text-sm text-slate-600 bg-white rounded-lg px-3 py-2.5 border border-slate-100 shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="truncate">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
