"use client";

import { SiteNav } from "@/components/portfolio/SiteNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b14] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-white">
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
