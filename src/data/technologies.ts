export interface Technology {
  name: string;
  category: string;
}

export const technologies: Technology[] = [
  { name: "Java", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "Terraform", category: "Cloud" },
  { name: "Salesforce", category: "Platforms" },
  { name: "ServiceNow", category: "Platforms" },
  { name: "SAP", category: "Platforms" },
  { name: "Snowflake", category: "Data" },
  { name: "Databricks", category: "Data" },
  { name: "Spark", category: "Data" },
  { name: "Tableau", category: "Data" },
  { name: "Selenium", category: "QA" },
  { name: "Cypress", category: "QA" },
];

export const roles = [
  "Full-Stack Developers",
  "Cloud Architects",
  "Data Engineers",
  "DevOps Engineers",
  "QA Automation Engineers",
  "Product Managers",
  "Business Analysts",
  "Scrum Masters",
  "UI/UX Designers",
  "Security Engineers",
  "ML Engineers",
  "Mobile Developers",
];
