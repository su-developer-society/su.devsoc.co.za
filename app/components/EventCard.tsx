import Link from "next/link";
import { Event } from "../lib/events";
import { isLive } from "../lib/eventUtils";
import { useLanguage } from "../context/LanguageContext";

export default function EventCard({ event }: { event: Event }) {
  const live = isLive(event);
  const { t } = useLanguage();

  return (
    <div className="rounded-xl overflow-hidden bg-black text-white shadow-lg hover:shadow-xl transition">
      <img
        src={event.image}
        alt={t(event.title)}
        width={600}
        height={300}
        className="h-40 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{t(event.title)}</h3>

          {live && (
            <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full animate-pulse">
              LIVE
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400 mt-1">
          {new Date(event.startDate).toLocaleString()}
        </p>

        {event.description && (
          <p className="text-sm mt-2 text-gray-300">
            {t(event.description)}
          </p>
        )}

        <Link
          href={event.link}
          target="_blank"
          className="inline-block mt-4 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
        >
          {live ? t("events.joinButton") + " →" : t("events.ViewDetailsButton") + " →"}
        </Link>
      </div>
    </div>
  );
}
