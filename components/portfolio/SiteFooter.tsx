import { personal } from "@/lib/portfolio-data";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] px-5 sm:px-8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>
          © {year} {personal.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="text-zinc-600">
          React Native · React · Node · Web3
        </p>
      </div>
    </footer>
  );
}
