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
      <section className="pt-24 pb-12 lg:pt-36 lg:pb-16 bg-[#fafbfd] relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary-600 mb-3">
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
              Blog & Insights
              <span className="w-6 h-0.5 rounded-full bg-primary-500" />
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-navy-900 mb-4 lg:mb-6 leading-tight tracking-tight">
              Talent Market Insights & Hiring Strategies
            </h1>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Expert perspectives on hiring strategy, talent markets, and
              building world-class engineering teams.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-10 bg-white">
        <Container>
          <div className="bg-gradient-to-br from-surface to-primary-50 rounded-xl border border-border p-5 sm:p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern" />
            <div className="max-w-3xl relative">
              <div className="flex gap-2 mb-4">
                <span className="inline-block bg-navy-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                  Featured
                </span>
                <span className="inline-block bg-white text-primary-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-border">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 mb-3 leading-tight">
                {featured.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400 mb-4">
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
                className="inline-flex items-center gap-2 text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* All Posts */}
      <section className="py-14 lg:py-20 bg-white">
        <Container>
          <SectionHeader label="Latest Articles" title="More From Our Team" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {rest.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-xl border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 dot-pattern" />
                  <span className="text-sm font-medium text-slate-400 relative">
                    {post.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="inline-block bg-primary-50 text-primary-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1.5 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-border-light">
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
      <section className="py-14 lg:py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern hidden md:block" />
        <Container className="relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
              Stay Informed
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mb-6 leading-relaxed">
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
