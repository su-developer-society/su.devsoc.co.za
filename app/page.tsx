"use client";

import ElectricGrid from "./components/ElectricGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative font-sans bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section with Electric Grid */}
      <section className="relative h-screen overflow-hidden">
        {/* Electric Grid Background - fixed to hero only */}
        <div className="absolute inset-0">
          <ElectricGrid showLines={true} color="purple" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {t("home.title")}
            <br />
            <span className="text-purple-400">{t("home.subtitle")}</span>
          </h1>
        </div>
      </section>

      {/* Partners Section - solid black background */}
      <section className="relative z-10 py-24 px-6 bg-black">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-4 sm:text-4xl">
            {t("home.partners")}
          </h2>
          <p className="text-center text-gray-500 mb-12">
            {t("home.partnersSubtitle")}
          </p>
          
          {/* Partner logos placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="w-32 h-16 bg-gray-900/50 border border-purple-900/30 flex items-center justify-center text-gray-600 text-sm">
              Partner 1
            </div>
            <div className="w-32 h-16 bg-gray-900/50 border border-purple-900/30 flex items-center justify-center text-gray-600 text-sm">
              Partner 2
            </div>
            <div className="w-32 h-16 bg-gray-900/50 border border-purple-900/30 flex items-center justify-center text-gray-600 text-sm">
              Partner 3
            </div>
            <div className="w-32 h-16 bg-gray-900/50 border border-purple-900/30 flex items-center justify-center text-gray-600 text-sm">
              Partner 4
            </div>
          </div>
        </div>
      </section>

      {/* About Section - solid black background */}
      <section className="relative z-10 py-24 px-6 border-t border-purple-900/30 bg-black">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white mb-4 sm:text-4xl">
            {t("about.title")} <span className="text-purple-400">SUDS</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mt-8">
            <p className="text-center">
              {t("about.intro")}
            </p>
            
            <p className="text-center">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
