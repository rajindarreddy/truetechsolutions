import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { blogPosts } from "@/data/company";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on IT staffing, hiring strategies, technology trends, and building high-performance engineering teams.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-20 lg:pt-48 lg:pb-24 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-[-100px] left-[40%] w-[500px] h-[500px] bg-primary-400/[0.06] rounded-full blur-[100px]" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-primary-600 mb-4">
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
              Blog & Insights
              <span className="w-8 h-[2px] rounded-full bg-primary-500" />
            </span>
            <h1 className="text-[40px] md:text-[52px] font-bold text-navy-900 mb-6 leading-[1.1] tracking-[-0.03em]">
              Talent Market Insights & Hiring Strategies
            </h1>
            <p className="text-[17px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Expert perspectives from the nation&apos;s leading IT staffing
              firm — on hiring strategy, talent markets, and building
              world-class engineering teams.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-14 bg-white">
        <Container>
          <div className="bg-gradient-to-br from-surface to-primary-50 rounded-2xl border border-border p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern" />
            <div className="max-w-3xl relative">
              <div className="flex gap-2 mb-5">
                <span className="inline-block bg-navy-900 text-white text-[11px] font-semibold px-3 py-1 rounded-lg">
                  Featured
                </span>
                <span className="inline-block bg-white text-primary-700 text-[11px] font-semibold px-3 py-1 rounded-lg border border-border">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-[24px] lg:text-[30px] font-bold text-navy-900 mb-4 leading-[1.2] tracking-[-0.02em]">
                {featured.title}
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap gap-4 text-[13px] text-slate-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {featured.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[14px] text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* All Posts */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeader
            label="Latest Articles"
            title="More From Our Team"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-primary-200 hover:-translate-y-1.5 overflow-hidden"
              >
                <div className="h-44 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 dot-pattern" />
                  <span className="text-[13px] font-medium text-slate-400 relative">
                    {post.category}
                  </span>
                </div>
                <div className="p-7">
                  <span className="inline-block bg-primary-50 text-primary-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-[16px] font-semibold text-navy-900 mb-2 line-clamp-2 tracking-[-0.01em]">
                    {post.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-500 leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[12px] text-slate-400 pt-4 border-t border-border-light">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <Container className="relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[30px] font-bold text-navy-900 mb-4 tracking-[-0.02em]">
              Stay Informed
            </h2>
            <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
              Get the latest insights on IT staffing trends, hiring strategies,
              and talent market updates delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </>
  );
}
