interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-20`}
    >
      {label && (
        <span
          className={`inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase mb-4 ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          <span
            className={`w-8 h-[2px] rounded-full ${
              light ? "bg-primary-400" : "bg-primary-500"
            }`}
          />
          {label}
          <span
            className={`w-8 h-[2px] rounded-full ${
              light ? "bg-primary-400" : "bg-primary-500"
            } ${align === "left" ? "hidden" : ""}`}
          />
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-[42px] font-bold leading-[1.15] tracking-[-0.02em] mb-5 ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-[17px] leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
