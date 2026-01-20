"use client";

import Link from "next/link";
import ElectricGrid from "./components/ElectricGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-300">404</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Eish we are storry we cant find this page
          </h1>
          <p className="text-gray-400">
            Try heading back home or check our status page for updates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="border border-purple-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
            >
              Home
            </Link>
            <a
              href="https://status.devsoc.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
            >
              Status
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
