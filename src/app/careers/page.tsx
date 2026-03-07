import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { jobPostings } from "@/data/company";
import { MapPin, Clock, Briefcase, ArrowRight, Users, Sparkles, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join True Tech Solutions and help build the future of IT staffing. Explore open positions in recruiting, sales, operations, and marketing.",
};

const perks = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career progression paths with mentorship and leadership development programs.",
  },
  {
    icon: Heart,
    title: "Comprehensive Benefits",
    description: "Competitive compensation, health insurance, 401(k) matching, and generous PTO.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "A supportive, inclusive team environment where your ideas and contributions matter.",
  },
  {
    icon: Sparkles,
    title: "Flexible Work",
    description: "Hybrid and remote options with the tools and support to do your best work from anywhere.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute bottom-[-50px] right-[10%] w-[400px] h-[400px] bg-primary-400/[0.06] rounded-full blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-primary-600 mb-4">
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
              Careers
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
            </span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-navy-900 mb-6 leading-[1.1] tracking-[-0.03em]">
              Join the #1 IT Staffing Firm in the Nation
            </h1>
            <p className="text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
              We&apos;re not just another staffing company — we&apos;re the
              industry leader. Join 120+ specialists who are placing elite talent
              at the world&apos;s most ambitious companies. Your career starts here.
            </p>
          </div>
        </Container>
      </section>

      {/* Why work here */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader
            label="Why True Tech Solutions"
            title="Why Top Recruiters Choose Us"
            description="We attract the best in the business because we invest in our people, reward performance, and lead the industry."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-[16px] font-semibold text-navy-900 mb-2 tracking-[-0.01em]">
                    {perk.title}
                  </h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <Container className="relative">
          <SectionHeader
            label="Open Positions"
            title="Find Your Next Role"
            description="Explore current openings and find the right fit for your skills and career goals."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobPostings.map((job) => (
              <div
                key={job.id}
                className="group bg-white rounded-2xl border border-border p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-primary-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div>
                    <h3 className="text-[17px] font-semibold text-navy-900 mb-2.5 tracking-[-0.01em]">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-[13px] text-slate-400 mb-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.department}
                      </span>
                    </div>
                    <p className="text-[14px] text-slate-500">
                      {job.description}
                    </p>
                  </div>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="sm"
                    className="flex-shrink-0"
                  >
                    Apply
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-[15px] text-slate-500 mb-5">
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
