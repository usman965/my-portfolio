"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  iosHref?: string;
  androidHref?: string;
  featured?: boolean;
};

function ProjectLinks({ project }: { project: Project }) {
  if (!project.iosHref && !project.androidHref && !project.href) return null;

  return (
    <div className="flex flex-wrap justify-end gap-2">
      {project.iosHref && (
        <a
          href={project.iosHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-300"
        >
          iOS App Store
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {project.androidHref && (
        <a
          href={project.androidHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-300"
        >
          Google Play
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
      {!project.iosHref && !project.androidHref && project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-300"
        >
          Open project
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

type ProjectsSectionProps = {
  showAll?: boolean;
};

export function ProjectsSection({ showAll = false }: ProjectsSectionProps) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visibleRest = showAll ? rest : rest.slice(0, 4);

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
          {showAll
            ? "A complete list of mobile, web, backend, and Web3 project work."
            : "Selected project highlights. Open the full projects page to see all work."}
        </motion.p>

        {featured.length > 0 && (
          <div className="mt-12 space-y-6">
            {featured.map((project, i) => (
              <motion.article
                key={project.name}
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
                  <ProjectLinks project={project} />
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {visibleRest.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#070b14] p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <ProjectLinks project={project} />
              </div>
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
        {!showAll && rest.length > visibleRest.length && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              View all projects
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
