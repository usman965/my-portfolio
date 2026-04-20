import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Usman Asghar — React Native & Full-Stack Engineer",
  description:
    "Portfolio of Usman Asghar: React Native, React.js, Node.js, Express, PostgreSQL, MongoDB, production hosting, HTTPS, and Web3 integrations.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Usman Asghar — Software Engineer",
    description:
      "React Native, React, backend APIs, cloud deploys, and Web3 — 4+ years building production apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
