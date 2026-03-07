import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { staffingServices, technologyServices } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const staffingColors = [
  "from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200",
  "from-violet-50 to-violet-100 group-hover:from-violet-100 group-hover:to-violet-200",
  "from-sky-50 to-sky-100 group-hover:from-sky-100 group-hover:to-sky-200",
  "from-indigo-50 to-indigo-100 group-hover:from-indigo-100 group-hover:to-indigo-200",
  "from-cyan-50 to-cyan-100 group-hover:from-cyan-100 group-hover:to-cyan-200",
];

const staffingIconColors = [
  "text-blue-600",
  "text-violet-600",
  "text-sky-600",
  "text-indigo-600",
  "text-cyan-600",
];

const techColors = [
  "from-emerald-50 to-emerald-100 group-hover:from-emerald-100 group-hover:to-emerald-200",
  "from-orange-50 to-orange-100 group-hover:from-orange-100 group-hover:to-orange-200",
  "from-rose-50 to-rose-100 group-hover:from-rose-100 group-hover:to-rose-200",
  "from-amber-50 to-amber-100 group-hover:from-amber-100 group-hover:to-amber-200",
  "from-teal-50 to-teal-100 group-hover:from-teal-100 group-hover:to-teal-200",
];

const techIconColors = [
  "text-emerald-600",
  "text-orange-600",
  "text-rose-600",
  "text-amber-600",
  "text-teal-600",
];

export default function Services() {
  return (
    <section className="py-28 lg:py-36 bg-white relative" id="services">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200/40 to-transparent" />

      <Container>
        <SectionHeader
          label="What We Offer"
          title="Staffing & Technology Solutions"
          description="Comprehensive talent solutions and technology services designed to help you build, scale, and optimize your teams."
        />

        {/* Staffing Services */}
        <div className="mb-24">
          <div className="flex items-center gap-3 justify-center mb-10">
            <span className="w-10 h-[1.5px] bg-primary-300 rounded-full" />
            <p className="text-[13px] font-bold text-primary-600 uppercase tracking-[0.18em]">
              Staffing Solutions
            </p>
            <span className="w-10 h-[1.5px] bg-primary-300 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {staffingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 lg:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out hover:shadow-[0_20px_60px_rgba(37,99,235,0.08),0_4px_16px_rgba(0,0,0,0.04)] hover:border-primary-200/80 hover:-translate-y-2"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/30 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${staffingColors[index]} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(37,99,235,0.12)]`}
                    >
                      <Icon
                        className={`w-6 h-6 ${staffingIconColors[index]}`}
                      />
                    </div>
                    <h4 className="text-[18px] font-bold text-navy-900 mb-3 tracking-[-0.02em]">
                      {service.title}
                    </h4>
                    <p className="text-[14.5px] text-slate-500 leading-[1.7]">
                      {service.description}
                    </p>
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link"
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 justify-center mb-10">
            <span className="w-10 h-[1.5px] bg-accent-300 rounded-full" />
            <p className="text-[13px] font-bold text-accent-600 uppercase tracking-[0.18em]">
              Technology Services
            </p>
            <span className="w-10 h-[1.5px] bg-accent-300 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {technologyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl border border-slate-200/80 p-8 lg:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out hover:shadow-[0_20px_60px_rgba(34,197,94,0.06),0_4px_16px_rgba(0,0,0,0.04)] hover:border-accent-200/80 hover:-translate-y-2"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-50/0 to-accent-100/0 group-hover:from-accent-50/30 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${techColors[index]} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(34,197,94,0.1)]`}
                    >
                      <Icon className={`w-6 h-6 ${techIconColors[index]}`} />
                    </div>
                    <h4 className="text-[18px] font-bold text-navy-900 mb-3 tracking-[-0.02em]">
                      {service.title}
                    </h4>
                    <p className="text-[14.5px] text-slate-500 leading-[1.7]">
                      {service.description}
                    </p>
                    <div className="mt-5 pt-5 border-t border-slate-100">
                      <Link
                        href={`/services#${service.id}`}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-600 hover:text-accent-700 transition-colors group/link"
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-xl transition-all duration-300 group border border-primary-100 hover:border-primary-200"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
