export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string; // gradient colors for avatar
  companyLogo: string; // short company abbreviation
  metric?: string; // key result
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "True Tech Solutions helped us scale our engineering team 3x faster than traditional hiring. Within two weeks, we had three exceptional senior engineers onboarded and shipping code. They're a competitive advantage.",
    author: "Sarah Mitchell",
    title: "VP of Engineering",
    company: "Meridian Financial Technologies",
    avatar: "from-blue-400 to-indigo-500",
    companyLogo: "MFT",
    metric: "3x faster hiring",
  },
  {
    id: "2",
    quote:
      "Finding specialized cloud architects was a persistent challenge until we partnered with True Tech Solutions. They understood our technical requirements deeply and delivered candidates who hit the ground running from day one.",
    author: "David Chen",
    title: "CTO",
    company: "Helix Health Systems",
    avatar: "from-emerald-400 to-teal-500",
    companyLogo: "HHS",
    metric: "48hr delivery",
  },
  {
    id: "3",
    quote:
      "We needed to scale our QA team rapidly for a critical product launch. They assembled a managed testing team in under ten days that seamlessly integrated with our existing workflows. They've become our go-to staffing partner.",
    author: "Rachel Torres",
    title: "Director of Product",
    company: "Apex Retail Solutions",
    avatar: "from-orange-400 to-rose-500",
    companyLogo: "ARS",
    metric: "10-day team build",
  },
];
