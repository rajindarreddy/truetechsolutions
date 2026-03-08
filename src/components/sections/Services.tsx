import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { staffingServices, technologyServices } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const iconColors = [
  { bg: "from-blue-50 to-blue-100", text: "text-blue-600" },
  { bg: "from-violet-50 to-violet-100", text: "text-violet-600" },
  { bg: "from-sky-50 to-sky-100", text: "text-sky-600" },
  { bg: "from-indigo-50 to-indigo-100", text: "text-indigo-600" },
  { bg: "from-cyan-50 to-cyan-100", text: "text-cyan-600" },
];

const techIconColors = [
  { bg: "from-emerald-50 to-emerald-100", text: "text-emerald-600" },
  { bg: "from-orange-50 to-orange-100", text: "text-orange-600" },
  { bg: "from-rose-50 to-rose-100", text: "text-rose-600" },
  { bg: "from-amber-50 to-amber-100", text: "text-amber-600" },
  { bg: "from-teal-50 to-teal-100", text: "text-teal-600" },
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-white relative" id="services">
      <Container>
        <SectionHeader
          label="What We Offer"
          title="Staffing & Technology Solutions"
          description="Comprehensive talent solutions and technology services to help you build, scale, and optimize your teams."
        />

        {/* Staffing Services */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="w-8 h-0.5 bg-primary-300 rounded-full" />
            <p className="text-xs font-bold text-primary-600 uppercase tracking-widest">
              Staffing Solutions
            </p>
            <span className="w-8 h-0.5 bg-primary-300 rounded-full" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
            {staffingServices.map((service, index) => {
              const Icon = service.icon;
              const colors = iconColors[index];
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary-200/80 hover:-translate-y-1"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors pt-3 border-t border-slate-100"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Services */}
        <div className="mb-12">
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="w-8 h-0.5 bg-accent-300 rounded-full" />
            <p className="text-xs font-bold text-accent-600 uppercase tracking-widest">
              Technology Services
            </p>
            <span className="w-8 h-0.5 bg-accent-300 rounded-full" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
            {technologyServices.map((service, index) => {
              const Icon = service.icon;
              const colors = techIconColors[index];
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-200/80 hover:-translate-y-1"
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors pt-3 border-t border-slate-100"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 active:bg-primary-200 rounded-xl transition-colors border border-primary-100 hover:border-primary-200"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
