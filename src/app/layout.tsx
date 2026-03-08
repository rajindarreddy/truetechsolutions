import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export const metadata: Metadata = {
  title: {
    default: "TrueTech Solutions | Premier IT Staffing & Technology Services",
    template: "%s | TrueTech Solutions",
  },
  description:
    "TrueTech Solutions connects top-tier technology professionals with innovative organizations. IT staffing, contract hire, managed teams, and technology services.",
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
    title: "TrueTech Solutions | Premier IT Staffing & Technology Services",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
