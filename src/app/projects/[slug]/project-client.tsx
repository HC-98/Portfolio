"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectClient({
  project,
}: {
  project: {
    title: string;
    summary: string;
    content: string;
    stack: string[];
    theme: { gradient: string; accent: string; icon: string };
  };
}) {
  return (
    <main
      className={`min-h-screen bg-gradient-to-br ${project.theme.gradient} px-6 py-16 text-gray-900`}
    >
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon + Title */}
        <motion.h1
          className="text-5xl font-extrabold flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>{project.theme.icon}</span>
          {project.title}
        </motion.h1>
        <p className="mt-4 text-gray-600 text-lg">{project.summary}</p>

        {/* Tech stack pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <motion.span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm bg-gray-100 border ${project.theme.accent} font-medium`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Content */}
        <motion.article
          className="prose prose-blue mt-8 max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {project.content
            .trim()
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line, i) => (
              <p key={i}>{line}</p>
            ))}
        </motion.article>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/projects"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Projects
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
