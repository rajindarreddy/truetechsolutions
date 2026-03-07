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
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute bottom-[-100px] left-[-50px] w-[500px] h-[500px] bg-primary-400/[0.06] rounded-full blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-primary-600 mb-4">
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
              Industries
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
            </span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-navy-900 mb-6 leading-[1.1] tracking-[-0.03em]">
              Dominant in Every Sector We Serve
            </h1>
            <p className="text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
              250+ enterprise clients across 8 industries trust us with their
              most critical hires. Our domain-specialist recruiters understand
              the compliance, technology, and talent landscapes that define your sector.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Detail */}
      <section className="py-24 bg-white">
        <Container>
          <div className="space-y-28">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className={`flex flex-col lg:flex-row gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h2 className="text-[26px] font-bold text-navy-900 mb-4 tracking-[-0.02em]">
                      {industry.title}
                    </h2>
                    <p className="text-[15px] text-slate-500 leading-relaxed mb-7">
                      {industry.description}
                    </p>
                    <p className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-4">
                      Key Focus Areas
                    </p>
                    <ul className="space-y-3">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-3">
                          <CheckCircle className="w-[18px] h-[18px] text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[14px] text-slate-600">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="mt-7"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-surface to-primary-50 rounded-2xl border border-border h-64 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 dot-pattern" />
                      <Icon className="w-20 h-20 text-primary-200 relative" />
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
