import {
  Users,
  FileText,
  UserCheck,
  Building2,
  Code,
  Cloud,
  Database,
  ShieldCheck,
  TestTube,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export const staffingServices: Service[] = [
  {
    id: "it-staffing",
    title: "IT Staffing",
    description:
      "Access top-tier technology professionals matched precisely to your project requirements, culture, and timeline.",
    icon: Users,
    details: [
      "Full-stack developers, architects, and engineers",
      "Cloud and infrastructure specialists",
      "Data scientists and ML engineers",
      "Project managers and Scrum masters",
      "QA engineers and test automation experts",
    ],
  },
  {
    id: "contract-staffing",
    title: "Contract Staffing",
    description:
      "Scale your team with flexible contract talent for short-term projects, seasonal demands, or specialized initiatives.",
    icon: FileText,
    details: [
      "Rapid deployment within days",
      "Flexible engagement durations",
      "Seamless onboarding support",
      "Performance monitoring and reporting",
      "Easy extension or conversion options",
    ],
  },
  {
    id: "contract-to-hire",
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on the job before making a permanent commitment. Reduce hiring risk with a try-before-you-buy approach.",
    icon: UserCheck,
    details: [
      "Risk-free evaluation period",
      "Cultural and technical fit assessment",
      "Streamlined conversion process",
      "Competitive conversion terms",
      "Continuous performance feedback",
    ],
  },
  {
    id: "direct-hire",
    title: "Direct Hire",
    description:
      "Fill critical permanent roles with exceptional candidates sourced from our extensive talent network.",
    icon: Building2,
    details: [
      "Executive and leadership recruitment",
      "Technical and engineering roles",
      "Comprehensive candidate screening",
      "Background and reference verification",
      "Guaranteed placement assurance",
    ],
  },
  {
    id: "managed-teams",
    title: "Managed Teams",
    description:
      "Deploy fully managed, dedicated teams that operate as a seamless extension of your organization.",
    icon: Users,
    details: [
      "Dedicated project management",
      "Complete team assembly and oversight",
      "Defined KPIs and deliverables",
      "Regular progress reporting",
      "Scalable team composition",
    ],
  },
];

export const technologyServices: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    description:
      "End-to-end custom software development tailored to your business objectives and technical requirements.",
    icon: Code,
    details: [
      "Web and mobile application development",
      "Enterprise software solutions",
      "API development and integration",
      "Legacy system modernization",
      "Agile development methodology",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Accelerate your cloud journey with expert migration, optimization, and DevOps transformation services.",
    icon: Cloud,
    details: [
      "Cloud migration and strategy",
      "Infrastructure as Code (IaC)",
      "CI/CD pipeline implementation",
      "Container orchestration (Kubernetes, Docker)",
      "Cloud cost optimization",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable insights with modern data engineering, analytics, and AI solutions.",
    icon: Database,
    details: [
      "Data warehouse and lake architecture",
      "Business intelligence and dashboards",
      "Machine learning and AI solutions",
      "ETL/ELT pipeline development",
      "Data governance and quality",
    ],
  },
  {
    id: "qa-automation",
    title: "QA & Test Automation",
    description:
      "Ensure software quality and reliability with comprehensive testing strategies and automation frameworks.",
    icon: TestTube,
    details: [
      "Test strategy and planning",
      "Automated regression testing",
      "Performance and load testing",
      "Security testing",
      "Mobile and cross-browser testing",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Protect your digital assets with proactive security assessments, compliance, and incident response services.",
    icon: ShieldCheck,
    details: [
      "Security assessments and audits",
      "Compliance consulting (SOC 2, HIPAA, PCI)",
      "Penetration testing",
      "Security architecture design",
      "Incident response planning",
    ],
  },
];

export const allServices = [...staffingServices, ...technologyServices];
