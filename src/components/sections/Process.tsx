import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";
import { ArrowRight } from "lucide-react";

const stepColors = [
  { bg: "from-blue-50 to-blue-100", icon: "text-blue-600", number: "bg-blue-600" },
  { bg: "from-violet-50 to-violet-100", icon: "text-violet-600", number: "bg-violet-600" },
  { bg: "from-emerald-50 to-emerald-100", icon: "text-emerald-600", number: "bg-emerald-600" },
  { bg: "from-orange-50 to-orange-100", icon: "text-orange-600", number: "bg-orange-600" },
  { bg: "from-cyan-50 to-cyan-100", icon: "text-cyan-600", number: "bg-cyan-600" },
];

export default function Process() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />

      <Container className="relative">
        <SectionHeader
          label="Our Process"
          title="How We Deliver Results"
          description="A proven, streamlined process that consistently connects you with the right talent in record time."
        />

        {/* Desktop: Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-blue-200 via-violet-200 via-emerald-200 via-orange-200 to-cyan-200 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const colors = stepColors[i];
              return (
                <div key={step.step} className="relative group">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 p-7 text-center shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:border-primary-200/80 hover:-translate-y-2">
                    {/* Icon with number badge */}
                    <div className="relative inline-block mb-5">
                      <div className={`w-[72px] h-[72px] bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      {/* Step number badge */}
                      <div className={`absolute -top-2 -right-2 w-7 h-7 ${colors.number} rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)]`}>
                        <span className="text-[11px] font-bold text-white">{step.step}</span>
                      </div>
                    </div>

                    <h4 className="text-[17px] font-bold text-navy-900 mb-2.5 tracking-[-0.01em]">
                      {step.title}
                    </h4>
                    <p className="text-[13.5px] text-slate-500 leading-relaxed">
                      {step.description.slice(0, 100)}...
                    </p>
                  </div>

                  {/* Arrow connector (desktop, between steps) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-[52px] -right-[18px] z-10">
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
