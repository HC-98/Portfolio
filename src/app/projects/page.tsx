// src/app/projects/page.tsx
import Link from "next/link";

const projects = [
  {
    slug: "quran-word-addin",
    title: "Qur’an Word Add-in",
    summary:
      "Microsoft Word add-in to insert Qur’ān verses with translations, deployed via Azure Static Web Apps.",
  },
  {
    slug: "canvas-attendance",
    title: "Canvas Attendance System",
    summary:
      "Extended Canvas LMS with custom attendance tracking using React + Azure Functions.",
  },
  {
    slug: "moneybird-telegram",
    title: "Moneybird Telegram Bot",
    summary:
      "Secure Telegram bot for small business invoicing via Moneybird API.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center">My Projects</h1>
        <p className="mt-4 text-gray-600 text-center">
          A collection of meaningful software I’ve built.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="p-6 rounded-xl shadow bg-white border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-gray-600 text-sm">{project.summary}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
