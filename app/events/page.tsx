"use client";

import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function Events() {
  const { t } = useLanguage();

  const events = [
    {
      titleKey: "events.hackathon.title",
      date: t("events.hackathon.date"),
      descriptionKey: "events.hackathon.description",
      status: "upcoming" as const,
    },
    {
      titleKey: "events.techTalks.title",
      date: t("events.techTalks.date"),
      descriptionKey: "events.techTalks.description",
      status: "ongoing" as const,
    },
    {
      titleKey: "events.workshops.title",
      date: t("events.workshops.date"),
      descriptionKey: "events.workshops.description",
      status: "ongoing" as const,
    },
  ];

  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="green" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto max-w-4xl w-full">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="text-green-400">{t("events.title")}</span>
          </h1>
          
          <p className="mb-12 text-center text-lg text-gray-400">
            {t("events.subtitle")}
          </p>

          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="group border border-green-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-600/50 hover:bg-black/70"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                        {t(event.titleKey)}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium ${
                          event.status === "upcoming"
                            ? "bg-green-600/20 text-green-400"
                            : "bg-green-600/20 text-green-400"
                        }`}
                      >
                        {event.status === "upcoming" ? t("events.upcoming") : t("events.ongoing")}
                      </span>
                    </div>
                    <p className="text-gray-400">{t(event.descriptionKey)}</p>
                  </div>
                  <div className="text-sm font-medium text-green-400 whitespace-nowrap">
                    {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              {t("events.suggestEvent")}{" "}
              <a
                href="https://servicedesk.devsoc.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                {t("events.contactUs")}
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
