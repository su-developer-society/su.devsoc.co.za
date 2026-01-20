"use client";

import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import ProjectGrid from "../components/ProjectGrid";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="red" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto max-w-4xl w-full">
          <h1 className="text-3xl font-bold mb-8">
            {t("projects.title")}
          </h1>

          <ProjectGrid />

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              {t("projects.suggest")}{" "}
              <a
                href="https://servicedesk.devsoc.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                {t("projects.contactUs")}
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
