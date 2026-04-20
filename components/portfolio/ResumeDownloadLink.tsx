"use client";

import type { ReactNode } from "react";
import { personal } from "@/lib/portfolio-data";

type Props = {
  children: ReactNode;
  className?: string;
  /** e.g. close mobile menu */
  onNavigate?: () => void;
};

/**
 * Fetches the PDF as a blob and saves it — avoids corrupted downloads that can
 * happen with <a download> on some nginx/browser combinations.
 */
export function ResumeDownloadLink({ children, className, onNavigate }: Props) {
  const { resumePath, resumeDownloadFilename } = personal;

  async function savePdf(e: React.MouseEvent<HTMLAnchorElement>) {
    // Let users open in new tab / copy link when using modified clicks
    if (
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    e.preventDefault();
    onNavigate?.();
    try {
      const url = new URL(resumePath, window.location.origin).toString();
      const res = await fetch(url, { credentials: "same-origin" });
      if (!res.ok) throw new Error(String(res.status));
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = resumeDownloadFilename;
      a.rel = "noopener";
      a.click();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(resumePath, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <a
      href={resumePath}
      className={className}
      onClick={savePdf}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
