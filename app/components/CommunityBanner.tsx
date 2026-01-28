import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function CommunityBanner() {
    const { t } = useLanguage();

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-green-500 text-white rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">
            {t("home.communityBannerHeading")}
          </h3>
          <p className="text-sm opacity-90">
            {t("home.communityBannerSubHeading")}
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="https://instagram.com/sudevsoc"
            target="_blank"
            className="px-5 py-2 rounded-lg bg-white text-purple-700 font-semibold hover:scale-105 transition"
          >
            Instagram 📸
          </Link>

          <Link
            href="https://chat.whatsapp.com/DSxkAsgqaNmFd1JHm2NEkr"
            target="_blank"
            className="px-5 py-2 rounded-lg bg-white text-green-700 font-semibold hover:scale-105 transition"
          >
            WhatsApp 💬
          </Link>
        </div>
      </div>
    </div>
  );
}
