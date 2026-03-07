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
  { value: "48hrs", label: "Avg. Delivery Time", icon: Clock },
  { value: "250+", label: "Enterprise Clients", icon: Zap },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-0 lg:pt-40 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-[#eef2ff] to-[#e8f0fe]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[-120px] right-[10%] w-[600px] h-[600px] bg-primary-400/[0.12] rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-[10%] left-[-80px] w-[500px] h-[500px] bg-primary-600/[0.08] rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      <div className="absolute top-[40%] right-[-50px] w-[300px] h-[300px] bg-accent-400/[0.06] rounded-full blur-[80px] animate-float-slow" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Tech network illustration - right side */}
      <div className="absolute right-0 top-[10%] w-[55%] h-[90%] overflow-hidden opacity-[0.06] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 800 700" fill="none" className="w-full h-full">
          {/* Concentric circles */}
          <circle cx="400" cy="350" r="300" stroke="#2563eb" strokeWidth="0.8" strokeDasharray="8 8" />
          <circle cx="400" cy="350" r="220" stroke="#2563eb" strokeWidth="0.6" strokeDasharray="4 6" />
          <circle cx="400" cy="350" r="140" stroke="#2563eb" strokeWidth="1" />
          <circle cx="400" cy="350" r="60" stroke="#2563eb" strokeWidth="1.2" />

          {/* Network nodes and connections */}
          <line x1="180" y1="120" x2="400" y2="350" stroke="#2563eb" strokeWidth="0.8" />
          <line x1="620" y1="120" x2="400" y2="350" stroke="#2563eb" strokeWidth="0.8" />
          <line x1="680" y1="350" x2="400" y2="350" stroke="#2563eb" strokeWidth="0.8" />
          <line x1="620" y1="580" x2="400" y2="350" stroke="#2563eb" strokeWidth="0.8" />
          <line x1="180" y1="580" x2="400" y2="350" stroke="#2563eb" strokeWidth="0.8" />
          <line x1="120" y1="350" x2="400" y2="350" stroke="#2563eb" strokeWidth="0.8" />
          <line x1="300" y1="150" x2="500" y2="150" stroke="#2563eb" strokeWidth="0.5" />
          <line x1="300" y1="550" x2="500" y2="550" stroke="#2563eb" strokeWidth="0.5" />

          {/* Node dots */}
          <circle cx="400" cy="350" r="10" fill="#2563eb" />
          <circle cx="180" cy="120" r="7" fill="#2563eb" />
          <circle cx="620" cy="120" r="7" fill="#2563eb" />
          <circle cx="680" cy="350" r="7" fill="#2563eb" />
          <circle cx="620" cy="580" r="7" fill="#2563eb" />
          <circle cx="180" cy="580" r="7" fill="#2563eb" />
          <circle cx="120" cy="350" r="7" fill="#2563eb" />
          <circle cx="300" cy="150" r="5" fill="#2563eb" />
          <circle cx="500" cy="150" r="5" fill="#2563eb" />
          <circle cx="300" cy="550" r="5" fill="#2563eb" />
          <circle cx="500" cy="550" r="5" fill="#2563eb" />
          <circle cx="400" cy="50" r="4" fill="#2563eb" />
          <circle cx="400" cy="650" r="4" fill="#2563eb" />

          {/* Diagonal connections */}
          <line x1="300" y1="150" x2="180" y2="120" stroke="#2563eb" strokeWidth="0.4" />
          <line x1="500" y1="150" x2="620" y2="120" stroke="#2563eb" strokeWidth="0.4" />
          <line x1="300" y1="550" x2="180" y2="580" stroke="#2563eb" strokeWidth="0.4" />
          <line x1="500" y1="550" x2="620" y2="580" stroke="#2563eb" strokeWidth="0.4" />

          {/* Small accent dots */}
          <circle cx="290" cy="250" r="3" fill="#2563eb" />
          <circle cx="510" cy="250" r="3" fill="#2563eb" />
          <circle cx="290" cy="450" r="3" fill="#2563eb" />
          <circle cx="510" cy="450" r="3" fill="#2563eb" />
        </svg>
      </div>

      <Container className="relative">
        {/* Main content area */}
        <div className="max-w-4xl lg:max-w-[58%] text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-primary-200/60 rounded-full px-5 py-2.5 mb-8 shadow-[0_2px_12px_rgba(37,99,235,0.08)]">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500" />
            </span>
            <span className="text-[13px] font-semibold text-primary-700 tracking-wide">
              #1 Rated IT Staffing Partner — 250+ Enterprise Clients
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[42px] sm:text-[54px] lg:text-[68px] font-extrabold text-navy-900 leading-[1.05] tracking-[-0.04em] mb-7">
            Build Elite Engineering
            <br className="hidden sm:block" />
            Teams{" "}
            <span className="gradient-text">Without the</span>
            <br className="hidden sm:block" />
            <span className="gradient-text">Hiring Bottleneck</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[18px] sm:text-[20px] text-slate-500 leading-[1.7] max-w-xl mb-10">
            We connect world-class engineers with innovative companies through a
            hiring process built for{" "}
            <strong className="text-navy-900 font-semibold">speed</strong>,{" "}
            <strong className="text-navy-900 font-semibold">quality</strong>,
            and{" "}
            <strong className="text-navy-900 font-semibold">scale</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
            <Button href="/contact" size="lg">
              Hire Top Talent Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              See How We Work
            </Button>
          </div>

          {/* Trust points - inline with icons */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] text-slate-500">
            {[
              "48-hour candidate delivery",
              "98% client retention rate",
              "Pre-vetted senior talent only",
            ].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics bar */}
        <div className="mt-20 -mx-4 sm:mx-0">
          <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] p-2">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className={`flex items-center gap-4 px-6 py-5 ${
                      i < metrics.length - 1
                        ? "border-b lg:border-b-0 lg:border-r border-slate-200/60"
                        : ""
                    } ${i === 1 ? "border-r-0 sm:border-r border-slate-200/60" : ""}`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-[22px] font-bold text-navy-900 tracking-[-0.02em] leading-none">
                        {metric.value}
                      </p>
                      <p className="text-[12px] text-slate-400 mt-1 font-medium">
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
        <div className="py-14 lg:py-16">
          <p className="text-[11.5px] font-semibold text-slate-400 uppercase tracking-[0.2em] mb-7 text-center">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="text-[16px] font-bold text-slate-300 tracking-[-0.01em] select-none hover:text-slate-400 transition-colors duration-300"
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
