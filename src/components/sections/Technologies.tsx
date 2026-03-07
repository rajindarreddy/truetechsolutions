"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { technologies, roles } from "@/data/technologies";
import { CheckCircle } from "lucide-react";

const categories = ["All", ...new Set(technologies.map((t) => t.category))];

const categoryColors: Record<string, string> = {
  Backend: "hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700",
  Frontend: "hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700",
  Cloud: "hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700",
  Platforms: "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
  Data: "hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700",
  QA: "hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700",
};

export default function Technologies() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? technologies
      : technologies.filter((t) => t.category === active);

  return (
    <section className="py-28 lg:py-36 bg-white">
      <Container>
        <SectionHeader
          label="Technology Expertise"
          title="Talent Across the Full Technology Stack"
          description="We source professionals across every major technology, platform, and framework."
        />

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 cursor-pointer ${
                active === cat
                  ? "bg-navy-900 text-white shadow-[0_4px_12px_rgba(11,31,58,0.25)]"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-navy-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-20">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className={`group bg-white border border-slate-200/80 rounded-2xl p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 cursor-default ${categoryColors[tech.category] || "hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"}`}
            >
              {/* Monogram icon */}
              <div className="w-10 h-10 bg-slate-100 group-hover:bg-white rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <span className="text-[14px] font-bold text-slate-400 group-hover:text-inherit transition-colors duration-300">
                  {tech.name.slice(0, 2)}
                </span>
              </div>
              <span className="text-[13.5px] font-semibold text-navy-900 block">
                {tech.name}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="bg-gradient-to-br from-surface to-primary-50/30 rounded-2xl border border-slate-200/80 p-8 lg:p-12">
          <h3 className="text-[22px] font-bold text-navy-900 mb-2 text-center tracking-[-0.02em]">
            Roles We Fill
          </h3>
          <p className="text-[14px] text-slate-500 text-center mb-8">
            From individual contributors to technical leadership
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {roles.map((role) => (
              <div
                key={role}
                className="flex items-center gap-3 text-[14px] text-slate-600 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                {role}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
