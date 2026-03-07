import {
  Heart,
  Landmark,
  Shield,
  ShoppingCart,
  Factory,
  Radio,
  Zap,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  challenges: string[];
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Empowering healthcare organizations with compliant, skilled technology professionals who understand HIPAA, EHR systems, and clinical workflows.",
    icon: Heart,
    challenges: [
      "HIPAA-compliant talent screening",
      "EHR/EMR system specialists",
      "Telehealth platform development",
      "Healthcare data analytics",
    ],
  },
  {
    id: "banking-financial",
    title: "Banking & Financial Services",
    description:
      "Delivering fintech-savvy professionals experienced in regulatory compliance, risk management, and digital banking transformation.",
    icon: Landmark,
    challenges: [
      "Regulatory compliance expertise",
      "Core banking modernization",
      "Fraud detection and prevention",
      "Digital payment solutions",
    ],
  },
  {
    id: "insurance",
    title: "Insurance",
    description:
      "Providing InsurTech talent skilled in policy administration systems, claims automation, and actuarial analytics.",
    icon: Shield,
    challenges: [
      "Policy administration platforms",
      "Claims processing automation",
      "Underwriting analytics",
      "Customer portal development",
    ],
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    description:
      "Connecting retail innovators with technology talent who drive omnichannel experiences, supply chain optimization, and customer engagement.",
    icon: ShoppingCart,
    challenges: [
      "E-commerce platform development",
      "Supply chain optimization",
      "Customer experience personalization",
      "Inventory management systems",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Supplying Industry 4.0 talent with expertise in IoT, automation, ERP systems, and smart manufacturing solutions.",
    icon: Factory,
    challenges: [
      "IoT and smart factory solutions",
      "ERP implementation and support",
      "Predictive maintenance systems",
      "Supply chain digitization",
    ],
  },
  {
    id: "telecom",
    title: "Telecommunications",
    description:
      "Staffing telecom leaders with 5G-ready engineers, network architects, and digital transformation specialists.",
    icon: Radio,
    challenges: [
      "5G network deployment",
      "OSS/BSS modernization",
      "Network security",
      "Customer experience platforms",
    ],
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description:
      "Placing technology professionals who accelerate smart grid initiatives, renewable energy platforms, and operational efficiency.",
    icon: Zap,
    challenges: [
      "Smart grid implementation",
      "Renewable energy analytics",
      "SCADA and OT security",
      "Asset management systems",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Fueling tech companies with elite engineering talent for product development, platform scaling, and innovation initiatives.",
    icon: Cpu,
    challenges: [
      "Rapid team scaling",
      "Niche skill acquisition",
      "Product engineering",
      "Platform architecture",
    ],
  },
];
