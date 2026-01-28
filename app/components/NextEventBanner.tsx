"use client";

import Link from "next/link";
import { getLiveEvent, getNextEvent, isLive } from "../lib/eventUtils";
import { useCountdown } from "../hooks/useCountDown";
import { useLanguage } from "../context/LanguageContext";

export default function NextEventBanner() {
  const liveEvent = getLiveEvent();
  const event = liveEvent ?? getNextEvent();
  const { t } = useLanguage();

  if (!event) return null;

  const countdown = !isLive(event)
    ? useCountdown(event.startDate)
    : null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <img
        src={event.image}
        alt={event.title}
        width={1200}
        height={400}
        className="w-full h-[260px] object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">
        <div className="px-6 max-w-4xl text-white">
          <span
            className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full ${
              liveEvent
                ? "bg-red-600 animate-pulse"
                : "bg-blue-600"
            }`}
          >
            {liveEvent ? "🔴 " + t("events.liveEvent") : t("events.nextEvent")}
          </span>

          <h2 className="text-2xl md:text-3xl font-bold">
            {t(event.title)}
          </h2>

          {event.description && (
            <p className="mt-2 opacity-90">
              {t(event.description)}
            </p>
          )}

          {countdown && (
            <p className="mt-3 text-sm font-mono">
              ⏳ {countdown.days}d {countdown.hours}h{" "}
              {countdown.minutes}m {countdown.seconds}s
            </p>
          )}

          <Link
            href={event.link}
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition"
          >
            {liveEvent ? t("events.joinButton") + " 🚀" : t("events.registerButton") + " 🎟️"}
          </Link>
        </div>
      </div>
    </div>
  );
}
