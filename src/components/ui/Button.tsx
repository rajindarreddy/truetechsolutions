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
    "bg-gradient-to-r from-primary-700 to-primary-600 text-white hover:from-primary-800 hover:to-primary-700 active:from-primary-900 active:to-primary-800 shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)]",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 shadow-[0_2px_8px_rgba(11,31,58,0.2)]",
  outline:
    "border border-slate-300 text-navy-900 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100",
  ghost: "text-slate-600 hover:text-primary-700 hover:bg-slate-50 active:bg-slate-100",
};

const sizes = {
  sm: "px-4 py-2.5 text-sm gap-1.5",
  md: "px-5 py-3 text-sm gap-2",
  lg: "px-6 py-3.5 text-base gap-2",
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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer";
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
