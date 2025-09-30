"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "quran-word-addin",
    title: "Qur’an Word Add-in",
    summary:
      "Microsoft Word add-in to insert Qur’ān verses with translations, deployed via Azure Static Web Apps.",
    icon: "📖",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    slug: "canvas-attendance",
    title: "Canvas Attendance System",
    summary:
      "Extended Canvas LMS with custom attendance tracking using React + Azure Functions.",
    icon: "📊",
    gradient: "from-indigo-500 to-sky-500",
  },
  {
    slug: "moneybird-telegram",
    title: "Moneybird Telegram Bot",
    summary:
      "Secure Telegram bot for small business invoicing via Moneybird API.",
    icon: "💸",
    gradient: "from-orange-500 to-yellow-500",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900">
          My Projects
        </h1>
        <p className="mt-4 text-gray-600 text-center text-lg">
          A collection of meaningful software I’ve built.
        </p>

        {/* Projects Grid */}
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl shadow-md bg-white border hover:shadow-xl transition cursor-pointer"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.gradient}`}
              />

              {/* Icon */}
              <div className="text-3xl mb-4">{project.icon}</div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h2>
              <p className="mt-2 text-gray-600 text-sm">{project.summary}</p>

              {/* Link */}
              <Link
                href={`/projects/${project.slug}`}
                className="mt-4 inline-block text-blue-600 group-hover:text-blue-800 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
