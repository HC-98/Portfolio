// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";

// Define the shape of params for this route
type Params = { slug: string };

// Next.js App Router expects a props object with `params`
interface ProjectPageProps {
  params: Promise<{ slug: string }>; // 👈 params is now a Promise
}

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
    content: "details...",
    stack: ["TypeScript", "Office.js", "Webpack", "Azure Static Web Apps"],
  },
  "canvas-attendance": {
    title: "Canvas Attendance System",
    summary:
      "Extended Canvas LMS with custom attendance tracking using React + Azure Functions.",
    content: "details...",
    stack: ["React", "Azure Functions", "Canvas API", "Azure Table Storage"],
  },
  "moneybird-telegram": {
    title: "Moneybird Telegram Bot",
    summary:
      "A secure Telegram bot for my dad’s business to create and send invoices directly from chat.",
    content: "details...",
    stack: [".NET 8", "Azure Functions", "Telegram Bot API", "Moneybird API"],
  },
};

// ✅ async + await params
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 Await the promise
  const project = projects[slug];
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 text-gray-600">{project.summary}</p>

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

        <article className="prose prose-blue mt-8 max-w-none">
          {project.content}
        </article>

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
