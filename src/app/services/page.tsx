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
      <section className="pt-24 pb-12 lg:pt-36 lg:pb-16 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
              Our Services
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 mb-4 lg:mb-6 leading-tight tracking-tight">
              Enterprise-Grade Staffing & Technology Solutions
            </h1>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Trusted by Fortune 500 companies and high-growth startups alike.
              We deliver top-tier talent in 48 hours, not weeks.
            </p>
          </div>
        </Container>
      </section>

      {/* Staffing Services Detail */}
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <SectionHeader
            label="Staffing Solutions"
            title="Elite Talent, Delivered Fast"
            description="3,000+ placements and counting. Our staffing solutions combine unmatched speed with the highest quality bar in the industry."
          />

          <div className="space-y-14 lg:space-y-20">
            {staffingServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-14 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="bg-gradient-to-br from-surface to-primary-50 rounded-xl border border-border h-48 sm:h-56 lg:h-64 flex items-center justify-center relative overflow-hidden">
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

      {/* Technology Services Detail */}
      <section className="py-14 lg:py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern hidden md:block" />
        <Container className="relative">
          <SectionHeader
            label="Technology Services"
            title="End-to-End Technology Delivery"
            description="Beyond staffing — enterprise-grade technology solutions for custom development, cloud transformation, and digital acceleration."
          />

          <div className="grid gap-4 md:grid-cols-2 sm:gap-5">
            {technologyServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-xl border border-border p-5 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
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
