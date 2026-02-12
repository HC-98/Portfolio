"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects, featuredProjectSlugs } from "@/data";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function HomePage() {
  const featuredProjects = featuredProjectSlugs.map(slug => projects[slug]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-32 text-center bg-gradient-to-b from-slate-900/90 via-slate-800/80 to-slate-900/90 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Hikmet</span> 👋
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full-Stack Developer specializing in .NET & Azure
          </motion.p>
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building cloud-native applications, automation workflows, and tools that solve real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/projects"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-cyan-500"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-20 bg-slate-900/50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">
              A selection of my recent work
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
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
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`}
                />
                
                {/* Image Preview */}
                {project.images && project.images.length > 0 && (
                  <div className="relative h-48 bg-slate-900 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-5xl">{project.icon}</div>
                  </div>
                )}
                
                <div className="p-6">
                  {!project.images && <div className="text-4xl mb-4">{project.icon}</div>}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.summary}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-slate-900 text-slate-400 rounded border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-all border border-slate-700 hover:border-cyan-500"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-900/50 to-slate-950/50 dark:from-slate-900 dark:to-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/50"
            >
              Get in Touch
            </Link>
            <a
              href="/Hikmet Cilan Resume.pdf"
              download
              className="px-8 py-4 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-all border border-slate-700 hover:border-cyan-500"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
