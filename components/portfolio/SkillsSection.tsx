"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 sm:px-8 py-24 bg-[#050810]">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 max-w-xl text-lg text-zinc-400"
        >
          React Native and React.js first — plus backend, data, cloud, and Web3
          where the product needs it.
        </motion.p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-white/[0.08] bg-[#070b14] p-6"
            >
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-zinc-400 leading-snug border-l-2 border-cyan-500/30 pl-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
