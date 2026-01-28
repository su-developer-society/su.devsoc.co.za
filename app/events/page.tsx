"use client";

import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { getAllEvents } from "../lib/eventUtils";
import EventCard from "../components/EventCard";

export default function Events() {
  const { t } = useLanguage();
  const events = getAllEvents();

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

        <div className="grid gap-6 md:grid-cols-2">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
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
