"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Briefcase, Sparkles, Image as ImageIcon, Link2, Users } from "lucide-react";

export default function GuideLinkedIn() {
  const steps = [
    {
      title: "Create and Secure Your Profile",
      body: "Sign up or log in, add a professional photo, and enable 2FA. Set your headline to include your role, tech stack, and location (e.g., “CS Student | Full-stack | Stellenbosch”).",
    },
    {
      title: "Write a Sharp About Section",
      body: "In 4–5 lines, cover your interests, languages, recent projects, and what you’re looking for (internships, research, freelance).",
    },
    {
      title: "Add Experience and Education",
      body: "Include internships, labs, society roles, and key coursework. Use bullet outcomes (what you built, shipped, improved).",
    },
    {
      title: "Show Projects with Media",
      body: "Link to your portfolio and GitHub. Add screenshots, short demos, or architecture diagrams. Tag relevant skills without keyword stuffing.",
    },
    {
      title: "Connect and Engage",
      body: "Connect with classmates, lecturers, and meetup peers. Add short personal notes when sending requests. Comment with insights; share learnings from events and projects.",
    },
    {
      title: "Keep It Fresh and Professional",
      body: "Post brief updates (milestones, takeaways, demos). Revisit headline/About as you grow. Avoid confidential content and keep tone respectful.",
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl">LinkedIn Warrior</h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Build a sharp LinkedIn presence for Stellenbosch CS students: clear headline, projects, media, and professional etiquette.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                href="https://www.linkedin.com/signup"
                target="_blank"
                className="border border-purple-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
              >
                Open LinkedIn
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
                  {step.title.includes("Profile") && <Briefcase className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Projects") && <ImageIcon className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Connect") && <Users className="h-5 w-5 text-purple-300" aria-hidden />}
                  {step.title.includes("Fresh") && <Sparkles className="h-5 w-5 text-purple-300" aria-hidden />}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-purple-200 font-semibold">{step.title}:</span> {step.body}
                </p>
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-3">
            <div className="flex items-center gap-2 text-purple-100">
              <Link2 className="h-6 w-6 text-purple-300" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Links to Add</span>
            </div>
            <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
              <li>• Portfolio site and GitHub profile.</li>
              <li>• Highlighted repos with READMEs and screenshots.</li>
              <li>• Contact email; avoid personal phone unless required.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
