"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Sparkles, Link2, Cloud, Palette, ShieldCheck } from "lucide-react";

export default function GuidePortfolio() {
  const sections = [
    {
      title: "Plan the Page",
      steps: [
        { label: "Sections", text: "Hero, skills, 3–5 projects with links/screens, contact, resume link." },
        { label: "Tone", text: "Concise, skimmable, professional." },
      ],
      icon: <Sparkles className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Create the Repo",
      steps: [
        { label: "New repo", text: "Public GitHub repo with README and .gitignore. Use Next/React static export or plain HTML/CSS." },
        { label: "Structure", text: "One-page layout with anchor links; keep assets light and responsive." },
      ],
      icon: <Link2 className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Claim a Domain (Free)",
      steps: [
        { label: "From Education Pack", text: "Claim a free domain via GitHub Education. Pick something short and professional." },
      ],
      links: [{ label: "Education Pack", href: "https://education.github.com/pack" }],
      icon: <ShieldCheck className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Deploy on Cloudflare Pages (Free)",
      steps: [
        { label: "Connect repo", text: "Connect your GitHub repo to Cloudflare Pages. Choose the correct framework preset or set build/output manually." },
        { label: "Map domain", text: "Point your free domain to the Pages site; ensure HTTPS is on." },
      ],
      icon: <Cloud className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Add Integrations",
      steps: [
        { label: "Links", text: "Link GitHub repos and your LinkedIn/Email. Optional shields for stack or stars." },
        { label: "Privacy", text: "Keep analytics lightweight and privacy-respecting. Never expose secrets client-side." },
      ],
      icon: <Palette className="h-5 w-5 text-purple-300" aria-hidden />,
    },
    {
      title: "Test & Launch",
      steps: [
        { label: "QA", text: "Test mobile/desktop, check all links, measure performance, and ensure no 404s." },
        { label: "Maintain", text: "Refresh projects and screenshots regularly." },
      ],
    },
  ];
  const buttons = [
    { label: "GitHub Education Pack", href: "https://education.github.com/pack" },
    { label: "Cloudflare Pages", href: "https://developers.cloudflare.com/pages/" },
  ];

  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-purple-300">Guide</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Build Your First Portfolio (For Free)</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Stand up a personal site with projects, contact links, and a custom domain using free student-friendly tools.
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
