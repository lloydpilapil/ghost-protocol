import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghost Protocol — Silent Agents. Clean Code. No Trace.",
  description:
    "Agents execute autonomously, leave clean results, disappear. Thread-based multi-agent engineering for GitHub Copilot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
