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
    const duration = 2200;
    const steps = 70;
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
      className="text-[48px] md:text-[60px] font-extrabold text-white leading-none tracking-[-0.04em]"
    >
      {visible ? display.toLocaleString() : "0"}
      {suffix && <span className="text-primary-400">{suffix}</span>}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-[-100px] right-[-50px] w-[600px] h-[600px] bg-primary-600/[0.1] rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-[-100px] left-[-80px] w-[500px] h-[500px] bg-primary-500/[0.07] rounded-full blur-[120px] animate-pulse-glow delay-1000" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.02] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />

      <Container className="relative">
        <p className="text-center text-[13px] font-semibold text-primary-400 uppercase tracking-[0.2em] mb-14">
          Our Track Record Speaks for Itself
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div key={stat.label} className="text-center group">
                {/* Icon */}
                <div className="w-14 h-14 bg-white/[0.06] border border-white/[0.08] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-white/[0.1] group-hover:border-white/[0.12] transition-all duration-500">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                {/* Number */}
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                {/* Label */}
                <p className="text-slate-400 mt-3 text-[14px] font-medium tracking-wide">
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
