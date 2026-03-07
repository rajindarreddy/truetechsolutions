import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { industries } from "@/data/industries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* Each industry gets a unique color and mini SVG illustration */
const industryVisuals: Record<string, { bg: string; color: string; svg: React.ReactNode }> = {
  healthcare: {
    bg: "from-rose-50 to-pink-50",
    color: "text-rose-500",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="25" y="10" width="50" height="80" rx="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M50 30V55M37 42H63" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="72" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
  },
  "banking-financial": {
    bg: "from-blue-50 to-indigo-50",
    color: "text-blue-500",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M50 10L90 30H10L50 10Z" stroke="currentColor" strokeWidth="1.5" />
        <rect x="22" y="35" width="10" height="35" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="45" y="35" width="10" height="35" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="68" y="35" width="10" height="35" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="72" width="70" height="8" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  insurance: {
    bg: "from-emerald-50 to-teal-50",
    color: "text-emerald-500",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M50 10L85 28V55C85 75 65 88 50 95C35 88 15 75 15 55V28L50 10Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M35 52L45 62L65 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  "retail-ecommerce": {
    bg: "from-orange-50 to-amber-50",
    color: "text-orange-500",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M15 25h12l15 45h40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="38" y="32" width="45" height="30" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="45" cy="80" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="72" cy="80" r="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  manufacturing: {
    bg: "from-slate-50 to-zinc-100",
    color: "text-slate-500",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="38" cy="48" r="22" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="48" r="8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="75" cy="60" r="16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="75" cy="60" r="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <rect x="15" y="82" width="70" height="5" rx="2.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  telecom: {
    bg: "from-violet-50 to-purple-50",
    color: "text-violet-500",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="60" r="5" fill="currentColor" opacity="0.4" />
        <path d="M35 48a20 20 0 0130 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 38a35 35 0 0150 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M15 28a50 50 0 0170 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <rect x="45" y="68" width="10" height="22" rx="3" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  energy: {
    bg: "from-yellow-50 to-lime-50",
    color: "text-yellow-600",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <path d="M58 8L38 48h18L42 92L72 45H55L65 8Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  technology: {
    bg: "from-cyan-50 to-sky-50",
    color: "text-cyan-500",
    svg: (
      <svg viewBox="0 0 100 100" fill="none">
        <rect x="15" y="18" width="70" height="48" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 35L42 45L32 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 55H68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="38" y="70" width="24" height="5" rx="2.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <rect x="30" y="76" width="40" height="5" rx="2.5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
};

export default function Industries() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden" id="industries">
      <div className="absolute inset-0 dot-pattern" />

      <Container className="relative">
        <SectionHeader
          label="Industries We Serve"
          title="Deep Domain Expertise Across Sectors"
          description="Our specialized recruiters understand the unique technology challenges, compliance requirements, and talent needs of each industry."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const visual = industryVisuals[industry.id];
            return (
              <Link
                href={`/industries#${industry.id}`}
                key={industry.id}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] hover:border-primary-200/80 hover:-translate-y-2 block overflow-hidden"
              >
                {/* Illustration area */}
                <div className={`w-full h-36 bg-gradient-to-br ${visual?.bg || "from-primary-50 to-primary-100"} flex items-center justify-center relative`}>
                  <div className={`w-20 h-20 ${visual?.color || "text-primary-500"}`}>
                    {visual?.svg}
                  </div>
                  {/* Floating icon badge */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <Icon className={`w-4 h-4 ${visual?.color || "text-primary-500"}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-[17px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">
                    {industry.title}
                  </h4>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed mb-4">
                    {industry.description.slice(0, 95)}...
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-primary-600 group-hover:gap-2.5 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px] font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-xl transition-all duration-300 group border border-primary-100 hover:border-primary-200"
          >
            Explore All Industries
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
