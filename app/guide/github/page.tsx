"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Github, ShieldCheck, GitBranch, Rocket, Cloud } from "lucide-react";

export default function GuideGithub() {
  const buttons = [
    { label: "Open GitHub", href: "https://github.com/" },
    { label: "Download Git", href: "https://git-scm.com/downloads" },
    { label: "GitHub Desktop (optional)", href: "https://desktop.github.com/" },
  ];
  const sections = [
    {
      title: "Understand GitHub",
      steps: [
        { label: "What", text: "GitHub hosts Git repos for backups, collaboration, issues, pull requests, and simple CI/CD." },
        { label: "Why", text: "Keeps history, enables teamwork, and is the default place recruiters check." },
      ],
      icon: <Github className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Create Your Account",
      steps: [
        { label: "Sign up", text: "Go to github.com and create an account with your personal email (you will use GitHub beyond university); enable 2FA immediately." },
        { label: "Install Git", text: "Install Git locally. Configure identity: git config --global user.name \"Your Name\" and git config --global user.email \"personal@example.com\"." },
      ],
      links: [{ label: "Open GitHub", href: "https://github.com/" }],
    },
    {
      title: "GitHub Education & Copilot",
      steps: [
        { label: "Apply", text: "Request the Student Developer Pack and add your Stellenbosch email to verify student status." },
        { label: "Benefits", text: "Free Copilot AI Premium, domain offers, and other student tools." },
        { label: "Copilot", text: "An AI pair programmer that suggests code; review outputs before committing." },
      ],
      icon: <ShieldCheck className="h-5 w-5 text-purple-300" aria-hidden />,
      links: [{ label: "Apply for the Pack", href: "https://education.github.com/pack" }],
    },
    {
      title: "Create Your First Repo",
      steps: [
        { label: "New repo", text: "Click New Repository, add a README, choose a license (MIT for personal), and pick a matching .gitignore (Node/Python/etc.)." },
        { label: "Clone", text: "Copy the URL; git clone <url> in terminal or use GitHub Desktop. cd into the folder before editing." },
      ],
      icon: <GitBranch className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Commit & Push Flow",
      steps: [
        { label: "Edit", text: "Make changes, then git status to review." },
        { label: "Stage & commit", text: "git add . then git commit -m \"Describe change\". Keep commits small and clear." },
        { label: "Push", text: "git push to sync. Pull regularly to avoid conflicts." },
      ],
    },
    {
      title: "Branching & PRs",
      steps: [
        { label: "Branch", text: "git checkout -b feature/thing; work there." },
        { label: "PR", text: "Push the branch and open a Pull Request. Use PRs even solo to practice review habits." },
        { label: "Protect", text: "Enable branch protection on main for important repos." },
      ],
    },
    {
      title: "Deploy from GitHub",
      steps: [
        { label: "Static hosting", text: "Use GitHub Pages or connect to Cloudflare Pages/Vercel/Netlify for free static sites." },
        { label: "Build command", text: "Keep build scripts in package.json; document how to run locally." },
      ],
      icon: <Cloud className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Safety",
      steps: [
        { label: ".gitignore", text: "Ignore secrets (.env), build artifacts, and OS files." },
        { label: "Tokens", text: "Rotate tokens if leaked; never commit credentials." },
        { label: "Backups", text: "Push often so code is safe if your laptop fails." },
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Git & GitHub Basics</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              A step-by-step path to set up Git, publish your first repo, and claim GitHub Education for free Copilot AI Premium and student benefits.
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
                {section.links && (
                  <div className="flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        className="text-xs uppercase tracking-[0.2em] text-purple-200 hover:text-purple-100"
                      >
                        {link.label} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-3">
            <div className="flex items-center gap-2 text-purple-100">
              <Rocket className="h-6 w-6 text-purple-300" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Keep Shipping</span>
            </div>
            <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
              <li>• Practice: push a small change daily; review your own diffs.</li>
              <li>• Use Issues for tasks and link PRs to them.</li>
              <li>• Add CI later (tests/lint) to keep repos healthy.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
