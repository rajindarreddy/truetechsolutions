"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { stats } from "@/data/stats";
import { Users, Briefcase, TrendingUp, Award } from "lucide-react";

const statIcons = [Users, Briefcase, TrendingUp, Award];

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value, 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div
      ref={ref}
      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-none tracking-tight"
    >
      {visible ? display.toLocaleString() : "0"}
      {suffix && <span className="text-primary-400">{suffix}</span>}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Gradient orbs - desktop only */}
      <div className="hidden md:block absolute top-[-80px] right-[-50px] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />
      <div className="hidden md:block absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] bg-primary-500/[0.06] rounded-full blur-[100px]" />

      <Container className="relative">
        <p className="text-center text-xs font-semibold text-primary-400 uppercase tracking-widest mb-10 lg:mb-14">
          Our Track Record Speaks for Itself
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 bg-white/[0.06] border border-white/[0.08] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-slate-400 mt-2 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
