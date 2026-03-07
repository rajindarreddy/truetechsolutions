import {
  Search,
  ClipboardCheck,
  ListFilter,
  Rocket,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description:
      "We start by deeply understanding your business objectives, technical requirements, team dynamics, and culture to define the ideal candidate profile.",
    icon: Search,
  },
  {
    step: 2,
    title: "Assess",
    description:
      "Our technical recruiters tap into our pre-vetted talent network, conducting rigorous skills assessments, coding evaluations, and behavioral interviews.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Shortlist",
    description:
      "We present a curated shortlist of top-matched candidates with detailed profiles, assessment scores, and our expert recommendations.",
    icon: ListFilter,
  },
  {
    step: 4,
    title: "Deploy",
    description:
      "Once you select your candidate, we handle offer management, onboarding coordination, and ensure a smooth transition into your team.",
    icon: Rocket,
  },
  {
    step: 5,
    title: "Support",
    description:
      "Our partnership continues post-placement with regular check-ins, performance tracking, and ongoing support to ensure long-term success.",
    icon: HeadphonesIcon,
  },
];
