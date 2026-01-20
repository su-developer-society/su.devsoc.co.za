"use client";

import { useLanguage } from "../context/LanguageContext";

const serviceLinks = [
  { name: "Network", url: "https://network.devsoc.co.za" },
  { name: "Files", url: "https://files.devsoc.co.za" },
  { name: "Status", url: "https://status.devsoc.co.za" },
  { name: "CDN", url: "https://cdn.devsoc.co.za" },
  { name: "TMS", url: "https://tms.devsoc.co.za" },
];

const resourceLinks = [
  { nameKey: "footer.policy", url: "https://policy.devsoc.co.za" },
  { nameKey: "footer.serviceDesk", url: "https://servicedesk.devsoc.co.za" },
  { nameKey: "footer.legacySite", url: "https://legacy.su.devsoc.co.za" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-20 bg-black/95 backdrop-blur-md border-t border-purple-900/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-wider mb-3">
              <span className="text-white">S</span>
              <span className="text-white">U</span>
              <span className="text-white">D</span>
              <span className="text-white">S</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t("footer.services")}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-all duration-200 hover:text-purple-400 hover:pl-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-all duration-200 hover:text-purple-400 hover:pl-2"
                  >
                    {t(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-400 transition-all duration-200 hover:text-purple-400 hover:pl-2"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-sm text-gray-400 transition-all duration-200 hover:text-purple-400 hover:pl-2"
                >
                  {t("nav.events")}
                </a>
              </li>
              <li>
                <a
                  href="/display"
                  className="text-sm text-gray-400 transition-all duration-200 hover:text-purple-400 hover:pl-2"
                >
                  Display
                </a>
              </li>
              <li>
                <a
                  href="https://membership.devsoc.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-all duration-200 hover:text-purple-400 hover:pl-2"
                >
                  {t("nav.membership")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-purple-900/30">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
