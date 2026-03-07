import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "True Tech Solutions | Premier IT Staffing & Technology Solutions",
    template: "%s | True Tech Solutions",
  },
  description:
    "True Tech Solutions connects top-tier technology professionals with innovative organizations. IT staffing, contract hire, managed teams, and technology services.",
  keywords: [
    "IT staffing",
    "technology staffing",
    "contract staffing",
    "direct hire",
    "managed teams",
    "software development",
    "cloud services",
    "technology solutions",
  ],
  openGraph: {
    title: "True Tech Solutions | Premier IT Staffing & Technology Solutions",
    description:
      "Build exceptional technology teams faster. Premier IT staffing and technology solutions partner.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased text-navy-900 bg-white overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
