"use client";

import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const focusAreas = [
  {
    title: "Artificial Intelligence and Machine Learning",
    slug: "/about/ai-ml",
    summary: "Campus-ready AI that respects privacy, supports multilingual students, and ships safely.",
  },
  {
    title: "Cyber Security",
    slug: "/about/cyber-security",
    summary: "Defensive security, POPIA awareness, and student account protection for SA threats.",
  },
  {
    title: "Game Development, Robotics & Embedded Systems",
    slug: "/about/game-dev-robotics-embedded",
    summary: "Engines, robots, and electronics for local industries—from indie games to mining automation.",
  },
  {
    title: "Financial Technology",
    slug: "/about/fintech",
    summary: "Banking history, payments, and security patterns in the South African fintech landscape.",
  },
  {
    title: "Data Science and Analytics",
    slug: "/about/data-science-analytics",
    summary: "From descriptive dashboards to prescriptive actions, tuned to SA data realities.",
  },
  {
    title: "Cloud and Networking",
    slug: "/about/cloud-networking",
    summary: "Internet plumbing, cloud regions, and edge delivery for low-latency South African apps.",
  },
  {
    title: "Competitive and Open-Source Coding",
    slug: "/about/competitive-open-source",
    summary: "Algorithm practice and open-source contributions to build real portfolios.",
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("about.title")} <span className="text-purple-400">SUDS</span>
          </h1>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              {t("about.intro")}
            </p>
            
            <p>
              {t("about.mission")}
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="border border-purple-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-purple-600/50">
                <h3 className="mb-3 text-xl font-semibold text-purple-400">{t("about.visionTitle")}</h3>
                <p className="text-gray-400">
                  {t("about.vision")}
                </p>
              </div>

              <div className="border border-purple-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-purple-600/50">
                <h3 className="mb-3 text-xl font-semibold text-purple-400">{t("about.missionTitle")}</h3>
                <p className="text-gray-400">
                  {t("about.missionStatement")}
                </p>
              </div>
            </div>

            {/* Focus areas */}
            <section className="mt-16">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  {t("about.focusAreasTitle")}
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t("about.focusAreasSubtitle")}
                </p>
              </div>

              <div className="relative mt-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.08),_transparent_50%)]" aria-hidden />
                <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {focusAreas.map((area, index) => (
                    <Link
                      key={area.slug}
                      href={area.slug}
                      className="group flex h-40 flex-col justify-between border border-purple-700 bg-black px-4 py-3 transition duration-200 hover:border-purple-400"
                    >
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-purple-300/80">
                        <span className="h-2 w-2 bg-purple-400" />
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="text-sm font-semibold text-purple-50 leading-snug">
                          {area.title}
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{area.summary}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-purple-200">
                        <span className="h-px flex-1 bg-purple-900/60" />
                        More →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-white text-center">Contact Us</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border border-purple-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-purple-600/50">
                  <h3 className="mb-2 text-lg font-semibold text-purple-400">Chair</h3>
                  <p className="text-white font-medium">Stephen Carter</p>
                  <a 
                    href="mailto:29063191@sun.ac.za" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    29063191@sun.ac.za
                  </a>
                </div>

                <div className="border border-purple-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-purple-600/50">
                  <h3 className="mb-2 text-lg font-semibold text-purple-400">Vice-Chair</h3>
                  <p className="text-white font-medium">Veer Gosai</p>
                  <a 
                    href="mailto:27857786@sun.ac.za" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    27857786@sun.ac.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
