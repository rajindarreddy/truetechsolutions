import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { jobPostings } from "@/data/company";
import { MapPin, Clock, Briefcase, ArrowRight, Users, Sparkles, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join TrueTech Solutions and help build the future of IT staffing. Explore open positions in recruiting, sales, operations, and marketing.",
};

const perks = [
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Clear career progression with mentorship and leadership development.",
  },
  {
    icon: Heart,
    title: "Benefits",
    description: "Competitive comp, health insurance, 401(k), and generous PTO.",
  },
  {
    icon: Users,
    title: "Culture",
    description: "Supportive, inclusive team where your ideas and contributions matter.",
  },
  {
    icon: Sparkles,
    title: "Flexibility",
    description: "Hybrid and remote options with tools to do your best work anywhere.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-24 pb-12 lg:pt-36 lg:pb-16 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
              Careers
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 mb-4 lg:mb-6 leading-tight tracking-tight">
              Join the #1 IT Staffing Firm
            </h1>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Join 120+ specialists who are placing elite talent
              at the world&apos;s most ambitious companies. Your career starts here.
            </p>
          </div>
        </Container>
      </section>

      {/* Why work here */}
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <SectionHeader
            label="Why TrueTech"
            title="Why Top Recruiters Choose Us"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-navy-900 mb-1">
                    {perk.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-14 lg:py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern hidden md:block" />
        <Container className="relative">
          <SectionHeader
            label="Open Positions"
            title="Find Your Next Role"
            description="Explore current openings and find the right fit for your skills and career goals."
          />

          <div className="space-y-3 max-w-4xl mx-auto">
            {jobPostings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-border p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-navy-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-1.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        {job.department}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                  <Button href="/contact" variant="outline" size="sm" className="shrink-0 w-full sm:w-auto">
                    Apply
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-slate-500 mb-4">
              Don&apos;t see a role that fits? We&apos;re always looking for talented people.
            </p>
            <Button href="/contact" variant="primary">
              Send Your Resume
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
