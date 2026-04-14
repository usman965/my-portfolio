"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-5 sm:px-8 py-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 max-w-xl text-lg text-zinc-400"
        >
          Mobile-first delivery with growing ownership of APIs, databases, and
          production infrastructure.
        </motion.p>

        <div className="mt-14 space-y-12">
          {experiences.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative grid gap-6 border-l border-cyan-500/25 pl-8 md:grid-cols-[220px_1fr]"
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" />
              <div>
                <p className="text-sm font-semibold text-white">{job.company}</p>
                <p className="mt-1 text-sm text-cyan-400/90">{job.role}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  {job.period} · {job.location}
                </p>
              </div>
              <div>
                <p className="text-zinc-400 leading-relaxed">{job.summary}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-zinc-500">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-cyan-500/60">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
