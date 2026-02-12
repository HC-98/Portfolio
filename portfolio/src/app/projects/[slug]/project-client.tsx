"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { useState } from "react";

export default function ProjectClient({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/projects" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8">
          <span className="mr-2">←</span> Back to Projects
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{project.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
                <p className="text-slate-400 text-lg mt-2">{project.summary}</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="mb-12">
              <div className="bg-slate-800 rounded-xl p-2 border border-slate-700">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900">
                  <Image
                    src={project.images[selectedImage]}
                    alt={`${project.title} screenshot ${selectedImage + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {project.images.length > 1 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                    {project.images.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === idx
                            ? "border-cyan-500 scale-105"
                            : "border-slate-600 hover:border-slate-500 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-colors">{tech}</span>
              ))}
            </div>
          </div>
          <div className="mb-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">About</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{project.description}</p>
          </div>
          <div className="mb-12 bg-slate-800 rounded-xl p-8 border border-slate-700">
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
                <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                  <h2 className="text-xl font-bold text-white mb-4">Challenges</h2>
                  <p className="text-slate-300 leading-relaxed">{project.challenges}</p>
                </div>
              )}
              {project.learnings && (
                <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
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
