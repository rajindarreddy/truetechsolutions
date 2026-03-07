import {
  Zap,
  ShieldCheck,
  Layers,
  MessageSquare,
  Award,
  Target,
  type LucideIcon,
} from "lucide-react";

export interface Strength {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const strengths: Strength[] = [
  {
    title: "Fast Hiring Turnaround",
    description:
      "Our streamlined process delivers qualified candidates in as few as 48 hours, so your projects stay on track.",
    icon: Zap,
  },
  {
    title: "Pre-Vetted Talent Network",
    description:
      "Every candidate undergoes rigorous technical and behavioral screening before entering our talent pool.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Engagement Models",
    description:
      "From contract to direct hire to managed teams, we tailor our approach to match your exact needs.",
    icon: Layers,
  },
  {
    title: "Transparent Communication",
    description:
      "Real-time updates, clear timelines, and honest feedback throughout every engagement.",
    icon: MessageSquare,
  },
  {
    title: "Domain Expertise",
    description:
      "Our recruiters are specialists in their domains, understanding the nuances of each technology and role.",
    icon: Award,
  },
  {
    title: "Delivery Excellence",
    description:
      "We measure success by outcomes, maintaining a 98% client retention rate through consistent delivery.",
    icon: Target,
  },
];

export const companyInfo = {
  name: "True Tech Solutions",
  tagline: "The #1 IT Staffing Partner for High-Growth Companies",
  description:
    "True Tech Solutions is a nationally recognized leader in IT staffing and technology consulting. We place elite engineers, architects, and technology leaders at Fortune 500 companies, high-growth startups, and everything in between. With 3,000+ successful placements and a 98% client retention rate, we've earned our reputation as the staffing partner top companies trust most.",
  founded: "2012",
  headquarters: "Austin, TX",
  offices: ["Austin, TX", "New York, NY", "San Francisco, CA", "Chicago, IL"],
  email: "hello@truetechsolutions.com",
  phone: "(512) 555-0192",
  address: "100 Congress Avenue, Suite 1400, Austin, TX 78701",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "James Harrington",
    title: "CEO & Founder",
    bio: "Former VP of Talent at a Fortune 100 tech company, James founded True Tech Solutions with a vision to redefine how companies build technology teams.",
  },
  {
    name: "Priya Sharma",
    title: "Chief Operating Officer",
    bio: "With 15 years in staffing operations, Priya has scaled our delivery model to serve clients across 8 industries with consistent excellence.",
  },
  {
    name: "Michael Chen",
    title: "VP of Technology",
    bio: "A former software architect turned recruiting leader, Michael ensures our technical assessments meet the highest industry standards.",
  },
  {
    name: "Lauren Brooks",
    title: "VP of Client Success",
    bio: "Lauren leads our client partnerships, ensuring every engagement delivers measurable value and exceeds expectations.",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-it-staffing-2026",
    title: "The Future of IT Staffing in 2026: Trends to Watch",
    excerpt:
      "From AI-assisted recruiting to skills-based hiring, discover the trends reshaping how companies build technology teams.",
    category: "Industry Insights",
    date: "February 28, 2026",
    readTime: "5 min read",
    author: "James Harrington",
  },
  {
    id: "building-high-performance-engineering-teams",
    title: "Building High-Performance Engineering Teams: A Leader's Guide",
    excerpt:
      "Learn the proven strategies that top CTOs use to assemble, motivate, and retain world-class engineering organizations.",
    category: "Leadership",
    date: "February 15, 2026",
    readTime: "7 min read",
    author: "Michael Chen",
  },
  {
    id: "contract-vs-fulltime-hiring",
    title: "Contract vs. Full-Time: Choosing the Right Hiring Model",
    excerpt:
      "A comprehensive comparison of engagement models to help you make the right staffing decisions for your organization.",
    category: "Hiring Strategy",
    date: "January 30, 2026",
    readTime: "6 min read",
    author: "Lauren Brooks",
  },
  {
    id: "cloud-talent-shortage",
    title: "Navigating the Cloud Talent Shortage: Practical Solutions",
    excerpt:
      "With demand for cloud professionals outpacing supply, here are actionable strategies to secure the talent you need.",
    category: "Talent Market",
    date: "January 15, 2026",
    readTime: "4 min read",
    author: "Priya Sharma",
  },
  {
    id: "diversity-in-tech-hiring",
    title: "Driving Diversity in Tech Hiring: Beyond the Buzzwords",
    excerpt:
      "Practical frameworks for building genuinely diverse and inclusive technology teams that drive innovation.",
    category: "DEI",
    date: "December 20, 2025",
    readTime: "6 min read",
    author: "Lauren Brooks",
  },
  {
    id: "ai-reshaping-recruitment",
    title: "How AI Is Reshaping the Recruitment Process",
    excerpt:
      "Exploring how artificial intelligence is transforming candidate screening, matching, and the overall hiring experience.",
    category: "Technology",
    date: "December 5, 2025",
    readTime: "5 min read",
    author: "Michael Chen",
  },
];

export interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: "sr-technical-recruiter",
    title: "Senior Technical Recruiter",
    location: "Austin, TX (Hybrid)",
    type: "Full-Time",
    department: "Talent Acquisition",
    description:
      "Drive end-to-end recruitment for senior engineering and cloud roles. 5+ years of technical recruiting experience required.",
  },
  {
    id: "account-executive",
    title: "Account Executive - Enterprise",
    location: "New York, NY",
    type: "Full-Time",
    department: "Sales",
    description:
      "Own and grow enterprise client relationships, driving revenue through staffing and managed team solutions.",
  },
  {
    id: "delivery-manager",
    title: "Delivery Manager",
    location: "Remote",
    type: "Full-Time",
    department: "Operations",
    description:
      "Oversee client delivery for managed team engagements, ensuring quality, timelines, and client satisfaction.",
  },
  {
    id: "marketing-specialist",
    title: "Digital Marketing Specialist",
    location: "Austin, TX (Hybrid)",
    type: "Full-Time",
    department: "Marketing",
    description:
      "Plan and execute digital marketing campaigns to drive brand awareness and lead generation across channels.",
  },
  {
    id: "recruiter-associate",
    title: "Recruiter Associate",
    location: "Chicago, IL",
    type: "Full-Time",
    department: "Talent Acquisition",
    description:
      "Support senior recruiters with candidate sourcing, screening, and coordination. Great entry point into tech recruiting.",
  },
];
