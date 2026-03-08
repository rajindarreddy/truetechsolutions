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
    "Learn about TrueTech Solutions — our mission, leadership team, and commitment to connecting exceptional technology talent with innovative organizations.",
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
      <section className="pt-24 pb-12 lg:pt-36 lg:pb-16 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
              About TrueTech Solutions
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 mb-4 lg:mb-6 leading-tight tracking-tight">
              The Nation&apos;s Most Trusted IT Staffing Firm
            </h1>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              {companyInfo.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Company snapshot */}
      <section className="py-10 lg:py-14 bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { icon: Calendar, label: "Founded", value: companyInfo.founded },
              { icon: Building2, label: "Headquarters", value: companyInfo.headquarters },
              { icon: MapPin, label: "Offices", value: `${companyInfo.offices.length} Locations` },
              { icon: Users, label: "Team", value: "120+ Specialists" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className="text-sm sm:text-base font-semibold text-navy-900 truncate">
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
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
                Our Mission
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                Setting the Standard for IT Staffing
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                To be the undisputed leader in technology talent placement.
                We believe the right hire can transform an entire organization
                — and we&apos;ve proven it 3,000+ times.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
                Our Vision
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                The Gold Standard in Talent
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                A world where the best companies have instant access to the
                best technology talent — and every elite professional finds
                the career-defining role they deserve.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-14 lg:py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern hidden md:block" />
        <Container className="relative">
          <SectionHeader label="Our Values" title="What Drives Everything We Do" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <div key={strength.title} className="flex gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-navy-900 mb-1">
                      {strength.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
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
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <SectionHeader label="Our Journey" title="Milestones Along the Way" />
          <div className="max-w-2xl mx-auto">
            <div className="relative border-l-2 border-primary-200 ml-3 sm:ml-4">
              {milestones.map((m) => (
                <div key={m.year} className="ml-6 sm:ml-8 mb-8 relative last:mb-0">
                  <div className="absolute -left-[29px] sm:-left-[33px] w-3 h-3 bg-primary-600 rounded-full border-[3px] border-white shadow-[0_0_0_2px_rgba(37,99,235,0.2)]" />
                  <span className="text-xs font-bold text-primary-600 tracking-wide">
                    {m.year}
                  </span>
                  <p className="text-sm sm:text-base text-slate-600 mt-0.5">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-14 lg:py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern hidden md:block" />
        <Container className="relative">
          <SectionHeader
            label="Leadership"
            title="Meet Our Team"
            description="Experienced leaders who bring deep industry knowledge and a passion for connecting talent with opportunity."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl border border-border p-4 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl font-bold text-primary-700">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-navy-900">
                  {member.name}
                </h4>
                <p className="text-xs text-primary-600 font-medium mb-2">
                  {member.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
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
