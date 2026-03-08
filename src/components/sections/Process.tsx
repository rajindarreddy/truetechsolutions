import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";

const stepColors = [
  { bg: "from-blue-50 to-blue-100", icon: "text-blue-600", number: "bg-blue-600" },
  { bg: "from-violet-50 to-violet-100", icon: "text-violet-600", number: "bg-violet-600" },
  { bg: "from-emerald-50 to-emerald-100", icon: "text-emerald-600", number: "bg-emerald-600" },
  { bg: "from-orange-50 to-orange-100", icon: "text-orange-600", number: "bg-orange-600" },
  { bg: "from-cyan-50 to-cyan-100", icon: "text-cyan-600", number: "bg-cyan-600" },
];

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern hidden md:block" />

      <Container className="relative">
        <SectionHeader
          label="Our Process"
          title="How We Deliver Results"
          description="A proven, streamlined process that connects you with the right talent in record time."
        />

        {/* Steps - vertical on mobile, grid on desktop */}
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-4 lg:gap-5">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            const colors = stepColors[i];
            return (
              <div key={step.step} className="group">
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Icon with step number */}
                  <div className="relative inline-block mb-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.icon}`} />
                    </div>
                    <div className={`absolute -top-1.5 -right-1.5 w-6 h-6 ${colors.number} rounded-full flex items-center justify-center shadow-md`}>
                      <span className="text-[10px] font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-navy-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
