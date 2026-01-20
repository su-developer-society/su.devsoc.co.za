"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { BookOpenCheck, FileText, GitBranch, ListChecks } from "lucide-react";

export default function GuideDocs() {
  const steps = [
    {
      title: "Start With Structure",
      body: "Use a simple layout: src/ for code, tests/ for automated tests, docs/ for diagrams/notes. Keep .env.example for secrets you never commit.",
    },
    {
      title: "Write a Clear README",
      body: "Explain what the project does, how to install, how to run, and how to test. Add tech stack, links to demos, and common troubleshooting tips.",
    },
    {
      title: "Add Contribution Notes",
      body: "Create CONTRIBUTING with branching rules, commit style, lint/test commands, and PR expectations. Include how to file issues with context.",
    },
    {
      title: "Licensing",
      body: "Pick a license early (MIT for permissive personal work is common). Mention it in README and add the LICENSE file.",
    },
    {
      title: "Changelogs and Releases",
      body: "For team work, tag releases or keep a CHANGELOG. Note breaking changes and migration steps. Keep installation steps up to date.",
    },
    {
      title: "Onboarding New Contributors",
      body: "Add a short checklist: clone, install deps, run tests/lint, create branch, open PR. Mention code style (tabs/spaces, casing) and review etiquette.",
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Project Structure & Docs</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Organise repos with clear folders, READMEs, and contribution notes so collaborators can ship quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="https://www.makeareadme.com/"
                target="_blank"
                className="border border-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
              >
                README Tips
              </Link>
              <Link
                href="https://choosealicense.com/"
                target="_blank"
                className="border border-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
              >
                Choose a License
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
                  {step.title.includes("Structure") && <BookOpenCheck className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("README") && <FileText className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Contribution") && <ListChecks className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Lifecycle") && <GitBranch className="h-5 w-5 text-purple-300" aria-hidden />}
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
