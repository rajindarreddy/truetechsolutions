import { ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const trustLogos = [
  "Deloitte",
  "JPMorgan",
  "Salesforce",
  "UnitedHealth",
  "Accenture",
  "Cisco",
];

const metrics = [
  { value: "3,000+", label: "Elite Placements", icon: CheckCircle },
  { value: "98%", label: "Client Retention", icon: Shield },
  { value: "48hrs", label: "Avg. Delivery", icon: Clock },
  { value: "250+", label: "Enterprise Clients", icon: Zap },
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-0 lg:pt-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-[#eef2ff] to-[#e8f0fe]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-[-80px] right-[10%] w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-[10%] left-[-60px] w-[400px] h-[400px] bg-primary-600/[0.06] rounded-full blur-[100px]" />

      <Container className="relative">
        {/* Main content */}
        <div className="max-w-2xl lg:max-w-[58%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary-200/60 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5 mb-6 lg:mb-8 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary-700">
              #1 Rated IT Staffing Partner
            </span>
          </div>

          {/* Headline - properly scaled for mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-[1.1] tracking-tight mb-5 lg:mb-7">
            Build Elite Engineering Teams{" "}
            <span className="gradient-text">Without the Hiring Bottleneck</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mb-8 lg:mb-10">
            We connect world-class engineers with innovative companies through a
            hiring process built for{" "}
            <strong className="text-navy-900 font-semibold">speed</strong>,{" "}
            <strong className="text-navy-900 font-semibold">quality</strong>,
            and{" "}
            <strong className="text-navy-900 font-semibold">scale</strong>.
          </p>

          {/* CTAs - full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 lg:mb-12">
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
              Hire Top Talent Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
              See How We Work
            </Button>
          </div>

          {/* Trust points */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-5 sm:gap-y-2 text-sm text-slate-500">
            {[
              "48-hour candidate delivery",
              "98% client retention rate",
              "Pre-vetted senior talent",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics bar */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-xl lg:rounded-2xl shadow-sm p-1.5 sm:p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className={`flex items-center gap-3 px-3 py-3.5 sm:px-5 sm:py-4 ${
                      i < 2 ? "border-b lg:border-b-0" : ""
                    } ${
                      i % 2 === 0 ? "border-r" : ""
                    } ${
                      i < 3 ? "lg:border-r" : "lg:border-r-0"
                    } border-slate-200/60`}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg sm:text-xl font-bold text-navy-900 leading-none">
                        {metric.value}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 font-medium truncate">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="py-10 lg:py-14">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-5 text-center">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="text-sm sm:text-base font-bold text-slate-300 select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
