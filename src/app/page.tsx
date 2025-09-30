"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    slug: "quran-word-addin",
    title: "Qur’an Word Add-in",
    summary: "Insert Qur’ān verses & translations in Word with one click.",
    icon: "📖",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    slug: "canvas-attendance",
    title: "Canvas Attendance System",
    summary: "Custom attendance tracking built on top of Canvas LMS.",
    icon: "📊",
    gradient: "from-indigo-500 to-sky-500",
  },
  {
    slug: "moneybird-telegram",
    title: "Moneybird Telegram Bot",
    summary: "Create & send invoices via Telegram for small businesses.",
    icon: "💸",
    gradient: "from-orange-500 to-yellow-500",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <motion.h1
          className="text-6xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-blue-600">Hikmet</span> 👋
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m a software developer building cloud-native apps, automation
          workflows, and tools that solve real-world problems.
        </motion.p>

        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-900 font-medium hover:bg-gray-300 transition"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Featured Projects
        </h2>
        <p className="mt-2 text-center text-gray-600">
          A quick look at what I’ve been building.
        </p>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {featuredProjects.map((project) => (
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
              <div className="text-3xl mb-4">{project.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{project.summary}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-4 inline-block text-blue-600 group-hover:text-blue-800 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
