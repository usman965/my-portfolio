"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 px-5 sm:px-8 py-24 bg-[#050810]">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 max-w-2xl text-lg text-zinc-400"
        >
          Selected work including a production PERN stack app, live on its own domain
          with HTTPS.
        </motion.p>

        {featured.length > 0 && (
          <div className="mt-12 space-y-6">
            {featured.map((project, i) => (
              <motion.a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group block overflow-hidden rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 p-8 transition-colors hover:border-cyan-400/40"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                      Featured · Live product
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold text-white group-hover:text-cyan-100">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white group-hover:border-cyan-400/40 group-hover:text-cyan-300">
                    Visit site
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#070b14] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="mt-3 flex-1 text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-500"
                  >
                    {t}
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
