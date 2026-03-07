import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "glass" | "bordered";
}

export default function Card({
  children,
  className = "",
  hover = true,
  variant = "default",
}: CardProps) {
  const base = "rounded-2xl p-7";

  const variants = {
    default: `bg-white border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
      hover
        ? "transition-all duration-500 ease-out hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-primary-200 hover:-translate-y-1.5"
        : ""
    }`,
    glass: `glass border border-white/20 ${
      hover
        ? "transition-all duration-500 ease-out hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5"
        : ""
    }`,
    bordered: `bg-white border-2 border-slate-100 ${
      hover
        ? "transition-all duration-500 ease-out hover:border-primary-200 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5"
        : ""
    }`,
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
