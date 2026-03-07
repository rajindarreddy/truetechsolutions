import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { companyInfo, strengths, team } from "@/data/company";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import { Building2, Calendar, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about True Tech Solutions — our mission, leadership team, and commitment to connecting exceptional technology talent with innovative organizations.",
};

const milestones = [
  { year: "2012", event: "Founded in Austin, TX with a team of 5 recruiters" },
  { year: "2015", event: "Expanded to New York and San Francisco offices" },
  { year: "2017", event: "Launched managed team service line" },
  { year: "2019", event: "Reached 100+ enterprise clients milestone" },
  { year: "2021", event: "Added technology services division" },
  { year: "2023", event: "Surpassed 3,000 successful placements" },
  { year: "2025", event: "Opened Chicago office, reached 120+ specialists" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-[-100px] left-[30%] w-[500px] h-[500px] bg-primary-400/[0.06] rounded-full blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-primary-600 mb-4">
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
              About True Tech Solutions
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
            </span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-navy-900 mb-6 leading-[1.1] tracking-[-0.03em]">
              The Nation&apos;s Most Trusted IT Staffing Firm
            </h1>
            <p className="text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
              {companyInfo.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Company snapshot */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, label: "Founded", value: companyInfo.founded },
              { icon: Building2, label: "Headquarters", value: companyInfo.headquarters },
              { icon: MapPin, label: "Offices", value: `${companyInfo.offices.length} Locations` },
              { icon: Users, label: "Team", value: "120+ Specialists" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-[13px] text-slate-400">{item.label}</p>
                    <p className="text-[17px] font-semibold text-navy-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Stats />

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-[12px] font-semibold text-primary-600 uppercase tracking-[0.15em] mb-3">
                  Our Mission
                </p>
                <h2 className="text-[24px] font-bold text-navy-900 mb-4 tracking-[-0.02em]">
                  Setting the Standard for IT Staffing
                </h2>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  To be the undisputed leader in technology talent placement.
                  We believe the right hire can transform an entire organization
                  — and we&apos;ve proven it 3,000+ times. Our mission is to
                  deliver elite talent faster, smarter, and more reliably than
                  any firm in the industry. Period.
                </p>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-primary-600 uppercase tracking-[0.15em] mb-3">
                  Our Vision
                </p>
                <h2 className="text-[24px] font-bold text-navy-900 mb-4 tracking-[-0.02em]">
                  The Gold Standard in Talent
                </h2>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  A world where the best companies have instant access to the
                  best technology talent — and every elite professional finds
                  the career-defining role they deserve. We&apos;re not building
                  a staffing agency. We&apos;re building the industry benchmark.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <Container className="relative">
          <SectionHeader
            label="Our Values"
            title="What Drives Everything We Do"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div key={strength.title} className="group flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center group-hover:from-primary-100 group-hover:to-primary-200 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-navy-900 mb-1.5 tracking-[-0.01em]">
                      {strength.title}
                    </h4>
                    <p className="text-[14px] text-slate-500 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader
            label="Our Journey"
            title="Milestones Along the Way"
          />
          <div className="max-w-2xl mx-auto">
            <div className="relative border-l border-primary-200 ml-4">
              {milestones.map((m) => (
                <div key={m.year} className="ml-8 mb-10 relative last:mb-0">
                  <div className="absolute -left-[33px] w-3 h-3 bg-primary-600 rounded-full border-[3px] border-white shadow-[0_0_0_2px_rgba(37,99,235,0.2)]" />
                  <span className="text-[13px] font-bold text-primary-600 tracking-wide">
                    {m.year}
                  </span>
                  <p className="text-[15px] text-slate-600 mt-1">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <Container className="relative">
          <SectionHeader
            label="Leadership"
            title="Meet Our Team"
            description="Experienced leaders who bring deep industry knowledge and a passion for connecting talent with opportunity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl border border-border p-7 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-primary-200 hover:-translate-y-1.5"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-[22px] font-bold text-primary-700">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-[16px] font-semibold text-navy-900 tracking-[-0.01em]">
                  {member.name}
                </h4>
                <p className="text-[13px] text-primary-600 font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
