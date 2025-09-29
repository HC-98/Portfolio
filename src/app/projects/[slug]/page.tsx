// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";

// Example static project data (later you can move this to Markdown/MDX or a JSON file)
const projects: Record<
  string,
  {
    title: string;
    summary: string;
    content: string;
    stack: string[];
  }
> = {
  "quran-word-addin": {
    title: "Qur’an Word Add-in",
    summary:
      "A Microsoft Word add-in to insert Qur’ān verses with translations, deployed via Azure Static Web Apps.",
    content: `
### Overview
The Qur’an Word Add-in is a custom-built Microsoft Word add-in that enables users to seamlessly insert Qur’ān verses in the Uthmānī script into Word documents.  

It also supports translations (currently Dutch, with future extensibility).
    
### Key Features
- Insert Qur’an verses in authentic Uthmānī script  
- Dutch translation by Sofian S. Siregar  
- Insert Basmala button  
- Azure Static Web Apps deployment + Microsoft 365 org-wide distribution  

### Impact
This project blends faith + technology, making it easier for students, researchers, and professionals to use the Qur’ān in their workflow.
    `,
    stack: ["TypeScript", "Office.js", "Webpack", "Azure Static Web Apps"],
  },
  "canvas-attendance": {
    title: "Canvas Custom Attendance System",
    summary:
      "Extended Canvas LMS with custom attendance tracking using React + Azure Functions.",
    content: `
### Overview
A custom attendance and student management system built on top of the Canvas LMS API.  

Teachers and admins can track attendance, student engagement, and manage course data beyond Canvas’ defaults.

### Key Features
- Syncs users/courses from Canvas API  
- Session-based attendance tracking  
- Pronoun + identity mapping (Broeder/Zuster)  
- Azure Functions backend + React frontend  

### Impact
Simplified teacher workflows and gave admins consolidated student presence + grade overviews.
    `,
    stack: ["React", "Azure Functions", "Canvas API", "Azure Table Storage"],
  },
  "moneybird-telegram": {
    title: "Moneybird Telegram Bot",
    summary:
      "A secure Telegram bot for my dad’s business to create and send invoices directly from chat.",
    content: `
### Overview
Built a Telegram bot powered by Azure Functions (.NET 8 isolated model) to automate invoice workflows with Moneybird API.

### Key Features
- Step-by-step conversational flow for invoices  
- Customer creation/selection inside Telegram  
- Preview PDF before sending  
- Secure access via whitelisted Telegram IDs  

### Impact
Helped a small business (my dad’s upholstery company) save time and reduce mistakes in invoicing.
    `,
    stack: [".NET 8", "Azure Functions", "Telegram Bot API", "Moneybird API"],
  },
};

// ✅ No strict PageProps typing — just enough to pass TS + ESLint
export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 text-gray-600">{project.summary}</p>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Content (rendered as plain paragraphs for now) */}
        <article className="prose prose-blue mt-8 max-w-none">
          {project.content
            .trim()
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, i) => (
              <p key={i}>{line}</p>
            ))}
        </article>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/projects"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
