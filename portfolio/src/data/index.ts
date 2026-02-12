import { Project, Experience, Skill } from "@/types";

export const projects: Record<string, Project> = {
  "quran-word-addin": {
    slug: "quran-word-addin",
    title: "Qur'an Word Add-in",
    summary: "Insert Qur'ān verses & translations in Word with one click.",
    description: `A Microsoft Word add-in that enables users to seamlessly insert Qur'ān verses with translations directly into their documents. Built with modern web technologies and deployed on Azure, this tool serves students, teachers, and researchers who frequently work with Qur'ānic text.`,
    icon: "📖",
    gradient: "from-emerald-500 to-teal-500",
    techStack: ["TypeScript", "React", "Office.js", "Azure Static Web Apps", "Tailwind CSS"],
    images: ["/quran1.png", "/quran2.png", "/quran3.png"],
    features: [
      "Search verses by surah and ayah number",
      "Multiple translation options",
      "One-click insertion with Arabic text and translation",
      "Responsive design optimized for Word's task pane",
      "Automatic formatting and styling"
    ],
    challenges: "Working with Office.js API limitations and ensuring compatibility across Word versions.",
    learnings: "Deep dive into Microsoft Office Add-in architecture and Azure Static Web Apps deployment.",
  },
  "canvas-attendance": {
    slug: "canvas-attendance",
    title: "Canvas Attendance System",
    summary: "Custom attendance tracking built on top of Canvas LMS.",
    description: `Extended Canvas LMS with a custom attendance tracking system for educational institutions. This tool integrates seamlessly with Canvas, allowing teachers to manage attendance efficiently while providing administrators with comprehensive reporting capabilities.`,
    icon: "📊",
    gradient: "from-indigo-500 to-sky-500",
    techStack: ["React", "TypeScript", "Azure Functions", "Canvas API", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Real-time attendance marking interface",
      "Integration with Canvas course roster",
      "Automated attendance reports",
      "Admin dashboard for oversight",
      "Historical attendance analytics"
    ],
    challenges: "Complex Canvas API integration and handling real-time updates across multiple users.",
    learnings: "Advanced React patterns, serverless architecture with Azure Functions, and LMS integration strategies.",
  },
  "moneybird-telegram": {
    slug: "moneybird-telegram",
    title: "Moneybird Telegram Bot",
    summary: "Create & send invoices via Telegram for small businesses.",
    description: `A secure Telegram bot that enables small business owners to create and send invoices through Moneybird directly from their messaging app. Built initially to help my father manage his business invoicing more efficiently.`,
    icon: "💸",
    gradient: "from-orange-500 to-yellow-500",
    techStack: ["Node.js", "TypeScript", "Telegram Bot API", "Moneybird API", "Azure Functions"],
    features: [
      "Create invoices via conversational interface",
      "Automatic invoice number generation",
      "Send invoices directly to clients",
      "View invoice status and payment tracking",
      "Secure authentication and authorization"
    ],
    challenges: "Designing an intuitive conversational interface and securing sensitive business data.",
    learnings: "Bot development patterns, API integration best practices, and building family-focused solutions.",
  },
};

export const experiences: Experience[] = [
  {
    company: "InSpark",
    role: "Software Developer",
    period: "2022 - Present",
    location: "Netherlands",
    current: true,
    description: [
      "Develop and maintain cloud-native applications using .NET, Azure, and React",
      "Design and implement RESTful APIs and microservices architecture",
      "Automate business processes and integrate third-party services",
      "Deploy and manage applications on Azure cloud infrastructure",
      "Collaborate with cross-functional teams using Agile methodologies"
    ],
  },
  {
    company: "Previous Internships",
    role: "Software Development Intern",
    period: "2020 - 2022",
    location: "Netherlands",
    description: [
      "Gained hands-on experience with web development and cloud technologies",
      "Contributed to real-world projects using modern frameworks and tools",
      "Learned professional software development practices and workflows"
    ],
  },
];

export const skills: Skill[] = [
  // Backend
  { name: ".NET / C#", category: "backend" },
  { name: "ASP.NET Core", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  
  // Frontend
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  
  // Cloud & DevOps
  { name: "Azure", category: "cloud" },
  { name: "Azure Functions", category: "cloud" },
  { name: "Azure Static Web Apps", category: "cloud" },
  { name: "Docker", category: "cloud" },
  
  // Tools & Others
  { name: "Git", category: "tools" },
  { name: "PostgreSQL", category: "tools" },
  { name: "SQL Server", category: "tools" },
  { name: "Agile/Scrum", category: "tools" },
];

export const featuredProjectSlugs = ["quran-word-addin", "canvas-attendance", "moneybird-telegram"];
