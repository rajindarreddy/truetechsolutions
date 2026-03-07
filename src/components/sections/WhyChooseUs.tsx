import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { strengths } from "@/data/company";

const cardColors = [
  { bg: "from-blue-50 to-blue-100", icon: "text-blue-600", border: "hover:border-blue-200", glow: "group-hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)]" },
  { bg: "from-emerald-50 to-emerald-100", icon: "text-emerald-600", border: "hover:border-emerald-200", glow: "group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]" },
  { bg: "from-violet-50 to-violet-100", icon: "text-violet-600", border: "hover:border-violet-200", glow: "group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.08)]" },
  { bg: "from-orange-50 to-orange-100", icon: "text-orange-600", border: "hover:border-orange-200", glow: "group-hover:shadow-[0_20px_60px_rgba(249,115,22,0.08)]" },
  { bg: "from-rose-50 to-rose-100", icon: "text-rose-600", border: "hover:border-rose-200", glow: "group-hover:shadow-[0_20px_60px_rgba(244,63,94,0.08)]" },
  { bg: "from-cyan-50 to-cyan-100", icon: "text-cyan-600", border: "hover:border-cyan-200", glow: "group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.08)]" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 lg:py-36 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <Container>
        <SectionHeader
          label="Why True Tech Solutions"
          title="The Unfair Advantage"
          description="There's a reason 250+ enterprise clients trust us over every other staffing firm."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {strengths.map((strength, i) => {
            const Icon = strength.icon;
            const colors = cardColors[i % cardColors.length];
            return (
              <div
                key={strength.title}
                className={`group bg-white rounded-2xl border border-slate-200/80 p-8 lg:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 ${colors.border} ${colors.glow}`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h4 className="text-[20px] font-bold text-navy-900 mb-3 tracking-[-0.02em]">
                  {strength.title}
                </h4>
                <p className="text-[14.5px] text-slate-500 leading-[1.7]">
                  {strength.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
