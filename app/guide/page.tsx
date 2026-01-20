"use client";

import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Github, Terminal, Laptop, Globe, BookOpenCheck, Briefcase } from "lucide-react";

const guideBlocks = [
  {
    title: "Git & GitHub Basics",
    slug: "/guide/github",
    icon: <Github className="h-6 w-6 text-purple-300" />,
    desc: "Set up Git, make your first repo, and push confidently. Includes signing up for GitHub Education to get free Copilot AI Premium and education benefits.",
  },
  {
    title: "Choose & Configure an IDE",
    slug: "/guide/ide",
    icon: <Laptop className="h-6 w-6 text-purple-300" />,
    desc: "Pick an IDE (we recommend VS Code), add extensions, and tune formatting.",
  },
  {
    title: "Build Your First Portfolio Site",
    slug: "/guide/portfolio",
    icon: <Globe className="h-6 w-6 text-purple-300" />,
    desc: "Ship a simple personal website with projects and contact links for free. Intro to domains and Cloudflare pages.",
  },
  {
    title: "LinkedIn for CS Students",
    slug: "/guide/linkedin",
    icon: <Briefcase className="h-6 w-6 text-purple-300" />,
    desc: "Learning how to become a LinkedIn warrior: concise profile, highlights, and media.",
  },
  {
    title: "CLI & Workflow Essentials",
    slug: "/guide/cli",
    icon: <Terminal className="h-6 w-6 text-purple-300" />,
    desc: "Understanding PowerShell (Windows), Terminal for macOS (zsh), and Linux shells; navigation and commands.",
  },
  {
    title: "Project Structure & Docs",
    slug: "/guide/docs",
    icon: <BookOpenCheck className="h-6 w-6 text-purple-300" />,
    desc: "READMEs, CONTRIBUTING, and clear folder conventions.",
  },
];

export default function GuidePage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Starter Guide</p>
            <h1 className="text-5xl font-bold text-white sm:text-6xl">Get Started with Computer Science</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The essentials for Stellenbosch CS students: version control, IDE setup, first portfolio site, LinkedIn polish, and core tooling.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2">
            {guideBlocks.map((block) => (
              <Link
                key={block.slug}
                href={block.slug}
                className="group flex h-40 flex-col justify-between border border-purple-800 bg-black/80 px-4 py-3 transition duration-200 hover:border-purple-400"
              >
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-purple-200">
                  {block.icon}
                  {block.title}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed flex-1 mt-2">{block.desc}</p>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-purple-200">
                  <span className="h-px flex-1 bg-purple-900/60" />
                  More →
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
