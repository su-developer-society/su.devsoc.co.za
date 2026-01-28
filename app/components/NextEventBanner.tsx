"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getLiveEvent, getNextEvent, isLive } from "../lib/eventUtils";
import { useLanguage } from "../context/LanguageContext";

// Hydration-safe countdown hook
export function useCountdown(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState(0); // SSR safe initialization

  useEffect(() => {
    const update = () => setTimeLeft(Math.max(target - Date.now(), 0));
    update(); // update immediately on client

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [target]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function NextEventBanner() {
  const liveEvent = getLiveEvent();
  const event = liveEvent ?? getNextEvent();
  const { t } = useLanguage();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!event) return null;

  // ✅ Hook called unconditionally
  const countdown = useCountdown(event.startDate);

  // Conditional display flag
  const showCountdown = mounted && !isLive(event);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      {/* Event image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] absolute inset-0 flex items-end justify-center">
        <img src={event.image} alt={event.title} className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="w-full px-4 pb-4 sm:px-6 sm:pb-6 md:px-10 md:pb-10">
          <div className="max-w-4xl text-white">
            <span
              className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full ${
                liveEvent ? "bg-red-600 animate-pulse" : "bg-blue-600"
              }`}
            >
              {liveEvent ? "🔴 " + t("events.liveEvent") : t("events.nextEvent")}
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
              {t(event.title)}
            </h2>

            {event.description && (
              <p className="mt-2 text-sm sm:text-base opacity-90 max-w-prose">
                {t(event.description)}
              </p>
            )}

            {/* Countdown */}
            {showCountdown && (
              <p className="mt-3 text-xs sm:text-sm font-mono">
                ⏳ <span suppressHydrationWarning>
                  {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
                </span>
              </p>
            )}

            {/* Event button */}
            <div className="mt-4">
              {event.link.startsWith("http") ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 bg-white text-black rounded-lg font-semibold w-full sm:w-auto hover:scale-105 transition"
                >
                  {liveEvent ? t("events.joinButton") + " 🚀" : t("events.registerButton") + " 🎟️"}
                </a>
              ) : (
                <Link
                  href={event.link}
                  className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 bg-white text-black rounded-lg font-semibold w-full sm:w-auto hover:scale-105 transition"
                >
                  {liveEvent ? t("events.joinButton") + " 🚀" : t("events.registerButton") + " 🎟️"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
