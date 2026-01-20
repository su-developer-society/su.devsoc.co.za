"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Terminal, Cpu, FolderTree, Shield } from "lucide-react";

export default function GuideCLI() {
  const steps = [
    {
      title: "Pick Your Shell",
      body: "Windows: PowerShell; macOS: Terminal with zsh; Linux: bash or zsh. Use the default first, then customise once you’re comfortable.",
    },
    {
      title: "Navigate",
      body: "Use pwd to know where you are; ls to list files; cd to move around. Tab completion speeds up typing paths.",
    },
    {
      title: "Manage Files",
      body: "mkdir to create folders; touch/new-item to create files; mv/cp to move/copy; rm to remove (be careful with -rf). Watch for spaces in paths.",
    },
    {
      title: "Project Basics",
      body: "Run npm/yarn scripts from project root. For Python, use venv. Keep .env for secrets and add it to .gitignore.",
    },
    {
      title: "Git on the CLI",
      body: "Check status, add files, commit with a clear message, pull/push regularly. Use branches for features.",
    },
    {
      title: "Quality of Life",
      body: "Add aliases/functions to your shell config; use package managers (winget/choco, brew, apt) to install tools; optional prompts (Starship/Oh My Zsh) to show Git status.",
    },
    {
      title: "Safety",
      body: "Double-check destructive commands; consider trash utilities. Keep backups. Avoid running scripts you don’t trust. Use 2FA for package hosts and GitHub.",
    },
  ];

  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Guide</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Command Line Essentials</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Understand PowerShell (Windows), Terminal for macOS (zsh), and Linux shells. Navigate, manage files, and run projects confidently.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="https://aka.ms/terminal"
                target="_blank"
                className="border border-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
              >
                Windows Terminal
              </Link>
              <Link
                href="https://brew.sh/"
                target="_blank"
                className="border border-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
              >
                Homebrew (macOS)
              </Link>
            </div>
          </header>

          <section className="space-y-4">
            {steps.map((step, idx) => (
              <div key={step.title} className="border border-purple-800 bg-black/80 p-5 space-y-2">
                <div className="flex items-center gap-2 text-purple-100">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                    Process {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{step.title}</span>
                  {step.title.includes("Shell") && <Terminal className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Project") && <FolderTree className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Quality") && <Cpu className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Safety") && <Shield className="h-5 w-5 text-purple-300" aria-hidden />}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-purple-200 font-semibold">{step.title}:</span> {step.body}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
