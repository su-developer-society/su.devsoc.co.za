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

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            paddingBottom: "75%", // aspect ratio (4:3)
            height: 0,
            overflow: "hidden",
            borderRadius: "4px",
          }}
          >
            <iframe
              src="https://luma.com/embed/calendar/cal-Zk4I2aeGtiv82CP/events"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "1px solid #bfcbda88",
                borderRadius: "4px",
              }}
              frameBorder={0}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
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
