"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            👋 Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Hikmet Çilan</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A developer passionate about building{" "}
            <span className="text-cyan-400 font-semibold">meaningful software</span> — solutions
            that simplify life, empower people, and sometimes even support
            spiritual growth.
          </p>
        </motion.div>

        {/* Story */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6 text-slate-300 leading-relaxed text-lg"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <p>
              I currently work at{" "}
              <span className="text-cyan-400 font-semibold">InSpark</span>, where I build modern
              cloud-native applications using{" "}
              <span className="text-white font-semibold">.NET, Azure, and React</span>. My
              work often involves automating processes, integrating APIs, and
              deploying solutions that scale in real-world environments.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <p>
              Outside of work, I love creating tools that directly impact the
              people around me. Whether it's{" "}
              <span className="text-cyan-400 italic">a Microsoft Word add-in for Qur'ān study</span>,{" "}
              <span className="text-cyan-400 italic">a custom attendance system for teachers</span>, or{" "}
              <span className="text-cyan-400 italic">an invoicing bot that helps my dad</span>,
              I find joy in solving problems for my family, community, and faith.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <p>
              My mindset is simple:{" "}
              <span className="text-white font-semibold">
                start small, make it useful, and improve step by step
              </span>
              . This approach has shifted my perspective from being overwhelmed by
              complexity to enjoying the challenge of building systems piece by
              piece.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <p>
              Beyond coding, I enjoy learning about Islamic history, Arabic, and
              cooking — blending technology, faith, and family life.
            </p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            My Values
          </h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-cyan-500/30">
            <p className="text-slate-300 leading-relaxed text-lg">
              I believe technology should be{" "}
              <span className="text-cyan-400 font-semibold">
                useful, accessible, and purposeful
              </span>
              . My projects blend professional skills with personal meaning:
              helping family businesses, supporting community learning, and
              creating tools that respect cultural and spiritual contexts.
            </p>
          </div>
        </motion.section>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-slate-400 italic text-xl max-w-3xl mx-auto border-l-4 border-cyan-500 pl-6 py-4">
            "Code is not just about lines in a file — it's about building bridges
            between ideas, people, and solutions that last."
          </blockquote>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/50"
          >
            Check Out My Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
