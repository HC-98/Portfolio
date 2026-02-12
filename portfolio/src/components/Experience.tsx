"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data";

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-slate-950 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Experience</h2>
          <p className="text-slate-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900"></div>
              
              {/* Current Badge */}
              {exp.current && (
                <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                  Current Position
                </span>
              )}

              {/* Content */}
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-slate-400 text-sm">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 mt-1.5 text-xs">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
