"use client";

import { SiteNav } from "@/components/portfolio/SiteNav";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-white">
      <SiteNav />
      <main>
        <ProjectsSection showAll />
      </main>
      <SiteFooter />
    </div>
  );
}
