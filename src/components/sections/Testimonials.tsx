import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />

      <Container className="relative">
        <SectionHeader
          label="Client Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from the companies that rely on us to build and scale their technology teams."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl border border-slate-200/80 relative shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] hover:border-primary-200/80 hover:-translate-y-2 overflow-hidden"
            >
              {/* Key metric highlight */}
              {testimonial.metric && (
                <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 px-8 py-3 border-b border-primary-100/60">
                  <span className="text-[12px] font-bold text-primary-700 uppercase tracking-[0.1em]">
                    Result: {testimonial.metric}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <Quote className="w-9 h-9 text-primary-100 mb-4" />
                <p className="text-[15px] text-slate-600 leading-[1.8] mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatar} rounded-2xl flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)]`}
                  >
                    <span className="text-[14px] font-bold text-white">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[15px] font-bold text-navy-900">
                      {testimonial.author}
                    </p>
                    <p className="text-[12.5px] text-slate-400">
                      {testimonial.title}
                    </p>
                  </div>
                  {/* Company badge */}
                  <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 tracking-wide">
                      {testimonial.companyLogo}
                    </span>
                  </div>
                </div>
                <p className="text-[11.5px] text-slate-400 mt-2 ml-16">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
