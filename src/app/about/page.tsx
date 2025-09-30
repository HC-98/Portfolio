"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Intro */}
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hi, I’m <span className="text-blue-600">Hikmet Çilan</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A developer passionate about building{" "}
          <span className="font-semibold">meaningful software</span> — solutions
          that simplify life, empower people, and sometimes even support
          spiritual growth.
        </motion.p>

        {/* Story */}
        <section className="mt-12 space-y-6 text-gray-700 leading-relaxed">
          <p>
            I currently work at{" "}
            <span className="font-semibold">InSpark</span>, where I build modern
            cloud-native applications using{" "}
            <span className="font-semibold">.NET, Azure, and React</span>. My
            work often involves automating processes, integrating APIs, and
            deploying solutions that scale in real-world environments.
          </p>

          <p>
            Outside of work, I love creating tools that directly impact the
            people around me. Whether it’s{" "}
            <span className="italic">a Microsoft Word add-in for Qur’ān study</span>,{" "}
            <span className="italic">a custom attendance system for teachers</span>, or{" "}
            <span className="italic">an invoicing bot that helps my dad</span>,
            I find joy in solving problems for my family, community, and faith.
          </p>

          <p>
            My mindset is simple:{" "}
            <span className="font-semibold">
              start small, make it useful, and improve step by step
            </span>
            . This approach has shifted my perspective from being overwhelmed by
            complexity to enjoying the challenge of building systems piece by
            piece.
          </p>

          <p>
            Beyond coding, I enjoy learning about Islamic history, Arabic, and
            cooking — blending technology,
            faith, and family life.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">Skills & Tools</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              ".NET / C#",
              "React / Next.js",
              "Azure Functions",
              "Azure Static Web Apps",
              "GitHub Actions / CI/CD",
              "Office.js / M365 APIs",
              "API integrations",
              "Tailwind CSS",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-lg bg-white shadow text-gray-800 border text-sm font-medium"
              >
                ⚡ {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">Values</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I believe technology should be{" "}
            <span className="font-semibold">
              useful, accessible, and purposeful
            </span>
            . My projects blend professional skills with personal meaning:
            helping family businesses, supporting community learning, and
            creating tools that respect cultural and spiritual contexts.
          </p>
        </section>

        {/* Quote */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 italic text-lg">
            “Code is not just about lines in a file — it’s about building bridges
            between ideas, people, and solutions that last.”
          </p>
        </div>
      </div>
    </main>
  );
}
