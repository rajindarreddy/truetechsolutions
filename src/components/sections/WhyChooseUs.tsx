import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { strengths } from "@/data/company";

const cardColors = [
  { bg: "from-blue-50 to-blue-100", icon: "text-blue-600" },
  { bg: "from-emerald-50 to-emerald-100", icon: "text-emerald-600" },
  { bg: "from-violet-50 to-violet-100", icon: "text-violet-600" },
  { bg: "from-orange-50 to-orange-100", icon: "text-orange-600" },
  { bg: "from-rose-50 to-rose-100", icon: "text-rose-600" },
  { bg: "from-cyan-50 to-cyan-100", icon: "text-cyan-600" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <SectionHeader
          label="Why TrueTech Solutions"
          title="The Unfair Advantage"
          description="There's a reason 250+ enterprise clients trust us over every other staffing firm."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
          {strengths.map((strength, i) => {
            const Icon = strength.icon;
            const colors = cardColors[i % cardColors.length];
            return (
              <div
                key={strength.title}
                className="group bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.icon}`} />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                  {strength.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
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
