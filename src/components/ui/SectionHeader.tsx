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
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}
    >
      {label && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-3 ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          <span
            className={`w-6 h-0.5 rounded-full ${
              light ? "bg-primary-400" : "bg-primary-500"
            }`}
          />
          {label}
          <span
            className={`w-6 h-0.5 rounded-full ${
              light ? "bg-primary-400" : "bg-primary-500"
            } ${align === "left" ? "hidden" : ""}`}
          />
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-4 ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base lg:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-slate-300" : "text-slate-500"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
