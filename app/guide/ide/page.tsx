"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Plug, SlidersHorizontal, Code, GitBranch } from "lucide-react";

export default function GuideIDE() {
  const buttons = [
    { label: "Download VS Code", href: "https://code.visualstudio.com/" },
    { label: "JetBrains Student License", href: "https://www.jetbrains.com/community/education/#students" },
    { label: "VS Code Marketplace", href: "https://marketplace.visualstudio.com/vscode" },
  ];
  const sections = [
    {
      title: "Download & Install",
      steps: [
        { label: "VS Code", text: "Download from code.visualstudio.com (recommended). Enable settings sync and auto-updates." },
        { label: "JetBrains", text: "If you prefer, get the student license for IntelliJ/CLion/PyCharm." },
      ],
    },
    {
      title: "Core Extensions",
      steps: [
        { label: "AI", text: "GitHub Copilot (Education Pack)." },
        { label: "Quality", text: "ESLint + Prettier; Tailwind/CSS IntelliSense; React/TS snippets." },
        { label: "DevOps", text: "GitLens, Docker, Markdown preview." },
      ],
      icon: <Plug className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Formatting & Linting",
      steps: [
        { label: "Default formatter", text: "Set Prettier and enable format on save." },
        { label: "ESLint", text: "Match project config; avoid conflicting formatters." },
        { label: "EditorConfig", text: "Add one to lock spacing/line endings." },
      ],
      icon: <SlidersHorizontal className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Terminal & Shell",
      steps: [
        { label: "Built-in terminal", text: "Use PowerShell on Windows, zsh on macOS, bash/zsh on Linux." },
        { label: "Project root", text: "Open the terminal at project root; run npm/yarn scripts from there." },
      ],
    },
    {
      title: "Debugging",
      steps: [
        { label: "Launch configs", text: "Set up for Node/Next and tests." },
        { label: "Breakpoints", text: "Use breakpoints and watch expressions; reduce console.log spam." },
      ],
      icon: <Code className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Git in the IDE",
      steps: [
        { label: "Stage & commit", text: "Use Source Control to review diffs before committing." },
        { label: "Conflicts", text: "Resolve with the merge editor; keep commits focused." },
        { label: "Sync", text: "Pull frequently; follow project rules (rebase/merge)." },
      ],
      icon: <GitBranch className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Productivity",
      steps: [
        { label: "Snippets", text: "Create snippets for components/headers." },
        { label: "Shortcuts", text: "Learn multi-cursor, search/replace, peek definitions." },
        { label: "Layouts", text: "Save a layout with terminal + problems + git visible." },
      ],
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Choose & Configure an IDE</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Step-by-step setup for VS Code (recommended) or JetBrains: extensions, formatting, terminal, debugging, and Git integration.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {buttons.map((btn) => (
                <Link
                  key={btn.href}
                  href={btn.href}
                  target="_blank"
                  className="border border-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </header>

          <section className="space-y-4">
            {sections.map((section, idx) => (
              <div key={section.title} className="border border-purple-800 bg-black/80 p-5 space-y-3">
                <div className="flex items-center gap-2 text-purple-100">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                    Process {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{section.title}</span>
                  {section.icon}
                </div>
                <ul className="space-y-2 text-sm text-gray-300 leading-relaxed">
                  {section.steps.map((item) => (
                    <li key={item.label}>
                      <span className="text-purple-200 font-semibold">{item.label}:</span> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
