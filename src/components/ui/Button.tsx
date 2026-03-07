"use client";

import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-gradient-to-r from-primary-700 to-primary-600 text-white hover:from-primary-800 hover:to-primary-700 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_rgba(37,99,235,0.35)]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(11,31,58,0.2)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_rgba(11,31,58,0.3)]",
  outline:
    "border border-slate-300 text-navy-900 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700",
  ghost: "text-slate-600 hover:text-primary-700 hover:bg-slate-50",
};

const sizes = {
  sm: "px-4 py-2 text-[13px] gap-1.5",
  md: "px-5 py-2.5 text-sm gap-2",
  lg: "px-7 py-3.5 text-[15px] gap-2",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer tracking-[-0.01em]";
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
