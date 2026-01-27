"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types";

export default function ProjectClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/projects" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8">
          <span className="mr-2">←</span> Back to Projects
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{project.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">{project.title}</h1>
                <p className="text-slate-400 text-lg mt-2">{project.summary}</p>
              </div>
            </div>
            <div className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-6`} />
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-colors">{tech}</span>
              ))}
            </div>
          </div>
          <div className="mb-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">About</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{project.description}</p>
          </div>
          <div className="mb-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 text-xl mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {(project.challenges || project.learnings) && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.challenges && (
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <h2 className="text-xl font-bold text-white mb-4">Challenges</h2>
                  <p className="text-slate-300 leading-relaxed">{project.challenges}</p>
                </div>
              )}
              {project.learnings && (
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                  <h2 className="text-xl font-bold text-white mb-4">What I Learned</h2>
                  <p className="text-slate-300 leading-relaxed">{project.learnings}</p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
