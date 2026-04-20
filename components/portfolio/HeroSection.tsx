"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { personal, highlights } from "@/lib/portfolio-data";
import { ResumeDownloadLink } from "@/components/portfolio/ResumeDownloadLink";

export function HeroSection() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personal.email
  )}`;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 px-5 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -left-32 h-[360px] w-[360px] rounded-full bg-violet-600/12 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90"
        >
          {personal.yearsExperience} years · {personal.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
        >
          {personal.name}
          <span className="block mt-2 text-zinc-500 font-normal text-2xl sm:text-3xl md:text-4xl">
            {personal.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          {personal.tagline}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-300 sm:text-sm"
            >
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-[#070b14] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Let&apos;s talk
            <ArrowDownRight className="h-4 w-4" />
          </a>
          <a
            href="/projects"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
          >
            View work
          </a>
          <ResumeDownloadLink className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/5">
            <Download className="h-4 w-4" />
            Resume
          </ResumeDownloadLink>
          <div className="flex gap-2 sm:ml-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:border-cyan-500/40 hover:text-cyan-400"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
