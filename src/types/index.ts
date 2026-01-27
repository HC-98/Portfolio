export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  gradient: string;
  techStack: string[];
  features: string[];
  challenges?: string;
  learnings?: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "cloud" | "tools" | "other";
  icon?: string;
}
