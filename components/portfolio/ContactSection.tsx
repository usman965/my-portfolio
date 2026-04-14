"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { personal, education } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-5 sm:px-8 py-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90"
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Open to roles and freelance collaborations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-6 text-zinc-400 leading-relaxed max-w-md"
            >
              Reach out for React Native, React, Node/Express, or Web3-related
              work. I typically respond within one business day.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8"
          >
            <ul className="space-y-6">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start gap-4 text-zinc-300 transition-colors hover:text-cyan-400"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500/80" />
                  <span className="break-all">{personal.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-4 text-zinc-300 transition-colors hover:text-cyan-400"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500/80" />
                  {personal.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-4 text-zinc-400">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500/80" />
                {personal.location}
              </li>
            </ul>
            <a
              href={personal.resumePath}
              download={personal.resumeDownloadFilename}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-200 transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/15 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download resume (PDF)
            </a>
            <div className="mt-6 flex gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:border-cyan-500/40 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:border-cyan-500/40 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Education
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                {education.school} · {education.year}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
