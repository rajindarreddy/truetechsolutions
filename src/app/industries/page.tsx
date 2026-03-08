import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { industries } from "@/data/industries";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The #1 IT staffing partner for regulated and high-growth industries — healthcare, financial services, insurance, retail, manufacturing, telecom, energy, and technology.",
};

export default function IndustriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-24 pb-12 lg:pt-36 lg:pb-16 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
              Industries
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 mb-4 lg:mb-6 leading-tight tracking-tight">
              Dominant in Every Sector We Serve
            </h1>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              250+ enterprise clients across 8 industries trust us with their
              most critical hires. Our domain-specialist recruiters understand your sector.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Detail */}
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <div className="space-y-14 lg:space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-14 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                      {industry.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-5">
                      {industry.description}
                    </p>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                      Key Focus Areas
                    </p>
                    <ul className="space-y-2.5">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="outline" size="sm" className="mt-5">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-gradient-to-br from-surface to-primary-50 rounded-xl border border-border h-44 sm:h-52 lg:h-60 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 dot-pattern" />
                      <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-primary-200 relative" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
