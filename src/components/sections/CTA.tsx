import { ArrowRight, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-navy-950 via-navy-900 to-primary-950 relative overflow-hidden">
      {/* Rich background layers */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-[-150px] right-[-100px] w-[700px] h-[700px] bg-primary-600/[0.12] rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-primary-500/[0.08] rounded-full blur-[130px] animate-pulse-glow delay-1000" />
      <div className="absolute top-[20%] left-[60%] w-[300px] h-[300px] bg-accent-500/[0.04] rounded-full blur-[100px]" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/[0.02] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-white/[0.03] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.04] rounded-full" />

      <Container className="relative text-center">
        <p className="text-[13px] font-bold text-primary-400 uppercase tracking-[0.2em] mb-6">
          Ready to outperform?
        </p>
        <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold text-white mb-8 max-w-4xl mx-auto leading-[1.05] tracking-[-0.04em]">
          Stop Settling for
          <br />
          <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent">
            Average Talent
          </span>
        </h2>
        <p className="text-[18px] sm:text-[20px] text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build a world-class engineering team today. Top companies choose us
          because we deliver what others can&apos;t — elite tech talent, in 48
          hours, with a 98% retention rate.
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {["48-hour delivery", "98% retention", "3,000+ placements"].map(
            (point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-[13.5px] text-slate-400"
              >
                <CheckCircle className="w-4 h-4 text-primary-400" />
                <span>{point}</span>
              </div>
            )
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 px-9 py-4.5 text-[16px] font-bold bg-white text-navy-900 rounded-2xl shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-1"
          >
            Start Hiring
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2.5 px-9 py-4.5 text-[16px] font-bold text-white border-2 border-white/20 rounded-2xl hover:bg-white/[0.08] hover:border-white/30 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </Container>
    </section>
  );
}
