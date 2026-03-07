export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { value: "250", suffix: "+", label: "Clients Served" },
  { value: "3000", suffix: "+", label: "Successful Placements" },
  { value: "98", suffix: "%", label: "Client Retention Rate" },
  { value: "120", suffix: "+", label: "Recruiters & Specialists" },
];
