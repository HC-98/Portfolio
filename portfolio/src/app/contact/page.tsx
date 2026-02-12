"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "hikmetcilan@gmail.com",
      href: "mailto:hikmetcilan@gmail.com",
      description: "Best way to reach me for professional inquiries",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/hikmetcilan",
      href: "https://linkedin.com/in/hikmetcilan",
      description: "Connect with me professionally",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/HC-98",
      href: "https://github.com/HC-98",
      description: "Check out my code and projects",
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities, collaborations, or simply
            connecting with other developers and tech enthusiasts.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid gap-6 mb-12"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label !== "Email" ? "_blank" : undefined}
              rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl">{method.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm mb-2">
                    {method.value}
                  </p>
                  <p className="text-slate-400">{method.description}</p>
                </div>
                <span className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800 rounded-xl p-12 border border-slate-700 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to know more?
          </h2>
          <p className="text-slate-300 mb-8">
            Download my resume to see my full experience, skills, and projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/Hikmet Cilan Resume.pdf"
              download
              className="px-8 py-4 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all"
            >
              Download Resume
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-lg bg-slate-700 text-white font-semibold hover:bg-slate-600 transition-all border border-slate-600 hover:border-slate-500"
            >
              View Projects
            </Link>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-lg">
            Currently based in the <span className="text-white font-semibold">Netherlands</span> 🇳🇱
          </p>
          <p className="text-slate-500 mt-4">
            Response time: Usually within 24-48 hours
          </p>
        </motion.div>
      </div>
    </main>
  );
}
