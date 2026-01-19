"use client";

import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="blue" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("about.title")} <span className="text-blue-400">SUDS</span>
          </h1>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              {t("about.intro")}
            </p>
            
            <p>
              {t("about.mission")}
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="border border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-blue-600/50">
                <h3 className="mb-3 text-xl font-semibold text-blue-400">{t("about.visionTitle")}</h3>
                <p className="text-gray-400">
                  {t("about.vision")}
                </p>
              </div>

              <div className="border border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-blue-600/50">
                <h3 className="mb-3 text-xl font-semibold text-blue-400">{t("about.missionTitle")}</h3>
                <p className="text-gray-400">
                  {t("about.missionStatement")}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-white text-center">Contact Us</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-blue-600/50">
                  <h3 className="mb-2 text-lg font-semibold text-blue-400">Chair</h3>
                  <p className="text-white font-medium">Stephen Carter</p>
                  <a 
                    href="mailto:29063191@sun.ac.za" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    29063191@sun.ac.za
                  </a>
                </div>

                <div className="border border-blue-900/50 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-blue-600/50">
                  <h3 className="mb-2 text-lg font-semibold text-blue-400">Vice-Chair</h3>
                  <p className="text-white font-medium">Veer Gosai</p>
                  <a 
                    href="mailto:27857786@sun.ac.za" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
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
