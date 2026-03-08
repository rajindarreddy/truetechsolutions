import { ArrowRight, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-primary-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="hidden md:block absolute top-[-100px] right-[-80px] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />
      <div className="hidden md:block absolute bottom-[-100px] left-[-80px] w-[400px] h-[400px] bg-primary-500/[0.06] rounded-full blur-[100px]" />

      <Container className="relative text-center">
        <p className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-5">
          Ready to outperform?
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white mb-5 lg:mb-6 max-w-3xl mx-auto leading-tight tracking-tight">
          Stop Settling for{" "}
          <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
            Average Talent
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Build a world-class engineering team today. Top companies choose us
          because we deliver elite tech talent in 48 hours with a 98% retention rate.
        </p>

        {/* Trust points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 lg:mb-10">
          {["48-hour delivery", "98% retention", "3,000+ placements"].map(
            (point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <CheckCircle className="w-4 h-4 text-primary-400 shrink-0" />
                <span>{point}</span>
              </div>
            )
          )}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-base font-bold bg-white text-navy-900 rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] active:shadow-none transition-all"
          >
            Start Hiring
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-base font-bold text-white border-2 border-white/20 rounded-xl hover:bg-white/[0.06] active:bg-white/[0.1] transition-all"
          >
            Explore Services
          </a>
        </div>
      </Container>
    </section>
  );
}
