import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  return (
    <div
      className={`${
        narrow ? "max-w-5xl" : "max-w-[1200px]"
      } mx-auto px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
