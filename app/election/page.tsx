"use client";

import { useEffect, useState } from "react";
import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";

const electionDate = new Date("2026-09-03T17:30:00+02:00");

function getTimeRemaining() {
  const total = electionDate.getTime() - Date.now();

  if (total <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

export default function ElectionComingSoon() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownLabel =
    timeRemaining.total > 0
      ? `${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`
      : "Election time has arrived.";

  return (
    <div className="relative min-h-screen font-sans bg-slate-950 text-white">
      <ElectricGrid showLines={false} color="green" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] items-center justify-center px-6 py-20">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-3xl border border-green-500/20 bg-slate-900/70 p-8 shadow-2xl shadow-green-500/10 backdrop-blur-sm sm:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              DevSoc Election
            </p>

            <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Executive Election and AGM
            </h1>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-green-400">Date</div>
                <div className="mt-2 text-lg font-semibold text-white">3 September 2026</div>
              </div>
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-[0.2em] text-green-400">Time</div>
                <div className="mt-2 text-lg font-semibold text-white">17:30 - 20:00</div>
              </div>
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4 sm:col-span-2">
                <div className="text-sm uppercase tracking-[0.2em] text-green-400">Venue</div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Math and Industrial Psychology 1005
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4">
              <div className="text-sm uppercase tracking-[0.2em] text-green-300">
                Countdown to election
              </div>
              <div className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                {countdownLabel}
              </div>
            </div>

            <div className="mb-8 rounded-3xl border border-green-500/20 bg-white/5 p-6 sm:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Add to calendar
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Save the election date to Google Calendar.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                Add the event to your calendar so you don&apos;t miss the Executive Election and AGM.
              </p>
              <a
                href="https://calendar.app.google/zGYuEisc9o3sdrTk7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-green-400"
              >
                Add to Google Calendar
              </a>
            </div>

            <div className="mb-8 rounded-3xl border border-green-500/20 bg-white/5 p-6 sm:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Nominations
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Step up and shape the future of DevSoc.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                Nominations are your chance to join the election process, take part in leadership,
                and help build a stronger Developer Society for everyone. If you want to make an
                impact, now is the time to get involved.
              </p>
              <a
                href="https://tally.so/r/zx5e4Z"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-green-400"
              >
                Open nominations form
              </a>
            </div>

            <div className="mb-8 rounded-3xl border border-green-500/20 bg-slate-950/60 p-6 sm:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                RSVP
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Be there, be involved, and help make the night count.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-300">
                Your RSVP helps us plan a better event for everyone, and your presence makes a real
                difference in shaping the future of the Developer Society. If you can attend, let
                us know and come be part of the conversation.
              </p>
              <a
                href="https://forms.cloud.microsoft/r/LDzV6NqwDs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-green-400 px-6 py-3 text-base font-semibold text-green-300 transition-colors hover:bg-green-400 hover:text-slate-950"
              >
                RSVP now
              </a>
            </div>

            <div className="mb-10 space-y-4 text-base leading-relaxed text-gray-300">
              <p className="rounded-2xl border border-white/10 bg-white/5 p-4">
                All Developer Society Members are Eligible To Vote
              </p>
              <p className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Be Sure to register as a member at{" "}
                <a
                  href="https://membership.devsoc.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-400 underline-offset-4 hover:underline"
                >
                  membership.devsoc.co.za
                </a>{" "}
                before 1 September 2026, 23:59
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-gray-600 px-6 py-3 text-base font-semibold text-gray-200 transition-colors hover:border-green-400 hover:text-green-400"
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
