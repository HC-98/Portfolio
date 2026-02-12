"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data";

export default function ProjectsPage() {
  const allProjects = Object.values(projects);

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-slate-400 text-xl">
            A collection of meaningful software I&apos;ve built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {allProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >

              {/* Image Preview */}
              {project.images && project.images.length > 0 && (
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 text-5xl">{project.icon}</div>
                </div>
              )}

              <div className="p-6">
                {!project.images && <div className="text-4xl mb-4">{project.icon}</div>}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.summary}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-slate-900 text-slate-400 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 text-slate-500">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:gap-2 transition-all"
                >
                  View Details
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center bg-slate-800 rounded-xl p-12 border border-slate-700"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
