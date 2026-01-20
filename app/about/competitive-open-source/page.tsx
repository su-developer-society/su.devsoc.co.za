"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Trophy, GitBranch, BookOpenCheck, Scale, Keyboard, ShieldCheck, Boxes } from "lucide-react";

const compTopics = [
  "Know the constraints: time, memory, and input sizes.",
  "Data structures: arrays, hash maps, heaps, trees, graphs.",
  "Complexity: target O(n log n) where you can; avoid unnecessary overhead.",
  "Practice ethically: no cheating, no sharing solutions from active contests.",
  "Test locally with edge cases; read problems carefully before coding.",
];

const ossTopics = [
  "Git basics: branches, commits, pull requests, and code review etiquette.",
  "Issues and roadmaps: pick beginner-friendly tasks; ask clarifying questions.",
  "Licenses: MIT/Apache/GPL high-level awareness; respect project choices.",
  "Write small, focused changes with clear descriptions and tests.",
  "South Africa: contribute to civic tech, student tooling, and local OSS meetups.",
];

const tools = [
  "GitHub/GitLab for repos and issues; CI for tests.",
  "Linters and formatters; unit tests and integration tests.",
  "Languages: TypeScript, Python, C++ for contests and OSS.",
  "Templates for contest I/O, and snippets for common patterns.",
];

const contributionSnippet = `# Contributing
- Discuss the issue first in the thread.
- Keep PRs small and focused.
- Include tests or examples.
- Be respectful in reviews and respond to feedback.
- Document any breaking changes.`;

export default function CompetitiveOpenSourcePage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Focus Track</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Competitive & Open-Source Coding</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Sharpen algorithms for contests and build real impact through open-source—grounded in South Africa’s student community.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Trophy className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Competitive Programming</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                {compTopics.map((topic) => (
                  <li key={topic}>• {topic}</li>
                ))}
                <li>• Practice sources: past contests, campus problem sets, peer review sessions.</li>
              </ul>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <GitBranch className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Open-Source</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                {ossTopics.map((topic) => (
                  <li key={topic}>• {topic}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Keyboard className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Tools & Habits</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                {tools.map((tool) => (
                  <li key={tool}>• {tool}</li>
                ))}
                <li>• For SA internships: show clear repos, READMEs, and small shipped features.</li>
              </ul>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <BookOpenCheck className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Contribution Guide (Example)</h3>
              </div>
              <div className="border border-purple-900/60 bg-black/70 p-4 text-xs text-gray-200 whitespace-pre-wrap leading-relaxed">
                {contributionSnippet}
              </div>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-2">
              <div className="flex items-center gap-2 text-purple-200 text-xs uppercase tracking-[0.2em]">
                <Scale className="h-4 w-4" /> Etiquette
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">Be respectful in reviews; ask for clarification; keep changes small and reversible.</p>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-2">
              <div className="flex items-center gap-2 text-purple-200 text-xs uppercase tracking-[0.2em]">
                <ShieldCheck className="h-4 w-4" /> Safety
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">Do not share contest solutions during or after; honour rules of each platform.</p>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-2">
              <div className="flex items-center gap-2 text-purple-200 text-xs uppercase tracking-[0.2em]">
                <Boxes className="h-4 w-4" /> Portfolio
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">Highlight SA civic-tech or campus tools; document impact and lessons learned.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
