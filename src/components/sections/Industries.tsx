import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { industries } from "@/data/industries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const industryColors: Record<string, { bg: string; text: string }> = {
  healthcare: { bg: "from-rose-50 to-pink-50", text: "text-rose-500" },
  "banking-financial": { bg: "from-blue-50 to-indigo-50", text: "text-blue-500" },
  insurance: { bg: "from-emerald-50 to-teal-50", text: "text-emerald-500" },
  "retail-ecommerce": { bg: "from-orange-50 to-amber-50", text: "text-orange-500" },
  manufacturing: { bg: "from-slate-50 to-zinc-100", text: "text-slate-500" },
  telecom: { bg: "from-violet-50 to-purple-50", text: "text-violet-500" },
  energy: { bg: "from-yellow-50 to-lime-50", text: "text-yellow-600" },
  technology: { bg: "from-cyan-50 to-sky-50", text: "text-cyan-500" },
};

export default function Industries() {
  return (
    <section className="py-16 lg:py-24 bg-surface relative overflow-hidden" id="industries">
      <div className="absolute inset-0 dot-pattern hidden md:block" />

      <Container className="relative">
        <SectionHeader
          label="Industries We Serve"
          title="Deep Domain Expertise Across Sectors"
          description="Our specialized recruiters understand the unique technology challenges, compliance requirements, and talent needs of each industry."
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const colors = industryColors[industry.id] || { bg: "from-primary-50 to-primary-100", text: "text-primary-500" };
            return (
              <Link
                href={`/industries#${industry.id}`}
                key={industry.id}
                className="group bg-white rounded-xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary-200/80 hover:-translate-y-1 block overflow-hidden"
              >
                {/* Color band */}
                <div className={`h-24 sm:h-28 lg:h-32 bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.text} opacity-60`} />
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 lg:p-5">
                  <h4 className="text-sm sm:text-base font-bold text-navy-900 mb-1 sm:mb-2 leading-snug">
                    {industry.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 line-clamp-2">
                    {industry.description.slice(0, 80)}...
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10 lg:mt-14">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 active:bg-primary-200 rounded-xl transition-colors border border-primary-100 hover:border-primary-200"
          >
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
