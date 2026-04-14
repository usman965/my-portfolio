"use client";

import { motion } from "framer-motion";
import { personal, achievements } from "@/lib/portfolio-data";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45 },
};

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 sm:px-8 py-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          {...fade}
          className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/90"
        >
          About
        </motion.h2>
        <motion.p
          {...fade}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 max-w-3xl text-2xl font-medium leading-snug text-white sm:text-3xl"
        >
          I build reliable mobile and web products — from polished interfaces to
          production backends, databases, and cloud deploys.
        </motion.p>
        <motion.div
          {...fade}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 grid gap-8 md:grid-cols-2"
        >
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Results-driven engineer with experience across healthcare, sports,
              fintech, and education. Comfortable owning features end to end:
              React Native and React.js on the client, Node.js and Express for APIs,
              PostgreSQL and MongoDB for data, and shipping to production with TLS
              and a proper domain.
            </p>
            <p>
              I also integrate Web3 flows — wallet connectivity, dApp UX, and
              on-chain interactions — alongside traditional payments (Stripe,
              in-app purchases) and real-time tooling (GetStream, Zoom, Firebase).
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
            <p className="text-sm font-medium text-white">Recognition</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs uppercase tracking-wider text-zinc-500">
              {personal.name} · {personal.title}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
