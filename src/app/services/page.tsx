import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { staffingServices, technologyServices } from "@/data/services";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The nation's top-rated IT staffing and technology services — elite contract staffing, direct hire, managed teams, software development, and cloud solutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-[-100px] right-[-50px] w-[500px] h-[500px] bg-primary-400/[0.06] rounded-full blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-primary-600 mb-4">
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
              Our Services
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
            </span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-navy-900 mb-6 leading-[1.1] tracking-[-0.03em]">
              Enterprise-Grade Staffing & Technology Solutions
            </h1>
            <p className="text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Trusted by Fortune 500 companies and high-growth startups alike.
              From placing a single elite engineer to building an entire managed
              team — we deliver top-tier talent in 48 hours, not weeks.
            </p>
          </div>
        </Container>
      </section>

      {/* Staffing Services Detail */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader
            label="Staffing Solutions"
            title="Elite Talent, Delivered Fast"
            description="3,000+ placements and counting. Our staffing solutions combine unmatched speed with the highest quality bar in the industry."
          />

          <div className="space-y-24">
            {staffingServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-[26px] font-bold text-navy-900 mb-4 tracking-[-0.02em]">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed mb-7">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle className="w-[18px] h-[18px] text-accent-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[14px] text-slate-600">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-surface to-primary-50 rounded-2xl border border-border h-72 flex items-center justify-center relative overflow-hidden">
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

      {/* Technology Services Detail */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <Container className="relative">
          <SectionHeader
            label="Technology Services"
            title="End-to-End Technology Delivery"
            description="Beyond staffing, we deliver enterprise-grade technology solutions — trusted by industry leaders for custom development, cloud transformation, and digital acceleration."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {technologyServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="group bg-white rounded-2xl border border-border p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-primary-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-[20px] font-bold text-navy-900 mb-3 tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[13.5px] text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Button href="/contact" size="lg">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
