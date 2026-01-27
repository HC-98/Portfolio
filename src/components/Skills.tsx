"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud & DevOps",
  tools: "Tools & Database",
  other: "Other",
};

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg">
            Tools and technologies I work with regularly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
