import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern hidden md:block" />

      <Container className="relative">
        <SectionHeader
          label="Client Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from the companies that rely on us to build and scale their technology teams."
        />

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-5 lg:gap-6 md:overflow-visible">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-start bg-white rounded-xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden flex flex-col"
            >
              {/* Metric banner */}
              {testimonial.metric && (
                <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 px-5 py-2.5 border-b border-primary-100/60">
                  <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                    Result: {testimonial.metric}
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${testimonial.avatar} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <span className="text-xs font-bold text-white">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-navy-900 truncate">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
