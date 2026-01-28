"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "af" | "xh";

interface Translations {
  [key: string]: {
    en: string;
    af: string;
    xh: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    af: "Tuis",
    xh: "Ikhaya",
  },
  "nav.about": {
    en: "About",
    af: "Oor Ons",
    xh: "Malunga Nathi",
  },
  "nav.events": {
    en: "Events",
    af: "Geleenthede",
    xh: "Iziganeko",
  },
  "nav.projects": {
    en: "Projects",
    af: "Projekte",
    xh: "Iiprojekthi",
  },
  "nav.membership": {
    en: "Membership",
    af: "Lidmaatskap",
    xh: "Ubulungu",
  },

  // Home page
  "home.title": {
    en: "Stellenbosch University",
    af: "Universiteit Stellenbosch",
    xh: "IYunivesithi yaseStellenbosch",
  },
  "home.subtitle": {
    en: "Developer Society",
    af: "Ontwikkelaarsvereniging",
    xh: "Umbutho Wabaphuhlisi",
  },
  "home.partners": {
    en: "Partners",
    af: "Vennote",
    xh: "Amaqabane",
  },
  "home.partnersSubtitle": {
    en: "Organizations that support our mission",
    af: "Organisasies wat ons missie ondersteun",
    xh: "Imibutho exhasa injongo yethu",
  },
  "home.communityBannerHeading": {
    en: "Join our Developer Community 🚀",
    af: "Sluit aan by ons Ontwikkelaarsgemeenskap 🚀",
    xh: "Joyina uluntu lwethu lwabaphuhlisi 🚀",
  },
  "home.communityBannerSubHeading": {
    en: "Stay in the loop on events, projects, and opportunities",
    af: "Bly op hoogte van gebeure, projekte en geleenthede",
    xh: "Hlala unolwazi ngeziganeko, iiprojekthi, kunye namathuba",
  },
  "home.eventsSectionHeading": {
    en: "Upcoming Events",
    af: "Komende Geleenthede",
    xh: "Iziganeko Ezizayo",
  },
  "home.eventsSectionSubHeading": {
    en: "Find the latest upcoming events at the Developer Society",
    af: "Vind die nuutste komende geleenthede by die Ontwikkelaarsvereniging",
    xh: "Fumana iziganeko ezizayo zamva nje kwi-Developer Society",
  },

  


  // About page
  "about.title": {
    en: "About",
    af: "Oor",
    xh: "Malunga",
  },
  "about.intro": {
    en: "The Stellenbosch University Developer Society (SUDS) is a student-led organization dedicated to fostering a community of passionate developers, programmers, and tech enthusiasts at Stellenbosch University.",
    af: "Die Universiteit Stellenbosch Ontwikkelaarsvereniging (SUDS) is 'n studentgeleide organisasie wat toegewy is aan die bevordering van 'n gemeenskap van passievolle ontwikkelaars, programmeerders en tegnologie-entoesiaste by die Universiteit Stellenbosch.",
    xh: "Umbutho Wabaphuhlisi weYunivesithi yaseStellenbosch (SUDS) ngumbutho okhokelwa ngabafundi ozinikele ekukhuthazeni uluntu lwabaphuhlisi abanothando, abenza iinkqubo zekhompyutha, kunye nabathanda iteknoloji kwiYunivesithi yaseStellenbosch.",
  },
  "about.mission": {
    en: "Our mission is to bridge the gap between academic learning and real-world software development by providing workshops, hackathons, networking events, and collaborative projects that enhance the skills of our members.",
    af: "Ons missie is om die gaping tussen akademiese leer en werklike sagteware-ontwikkeling te oorbrug deur werkswinkels, hackathons, netwerkgeleenthede en samewerkingsprojekte te verskaf wat die vaardighede van ons lede verbeter.",
    xh: "Injongo yethu kukuvala igebe phakathi kokufunda kwezifundo nokuphuhliswa kwesoftware yokwenene ngokunikezela iworkshops, ii-hackathons, iziganeko zokunxibelelana, kunye neeprojekthi zentsebenziswano eziphucula izakhono zamalungu ethu.",
  },
  "about.visionTitle": {
    en: "Our Vision",
    af: "Ons Visie",
    xh: "Umbono Wethu",
  },
  "about.missionTitle": {
    en: "Our Mission",
    af: "Ons Missie",
    xh: "Injongo Yethu",
  },
  "about.focusAreasTitle": {
    en: "Our Focus Areas",
    af: "Ons Fokusareas",
    xh: "Imimandla yethu ephambili",
  },
  "about.focusAreasSubtitle": {
    en: "Where we dig deep, build together, and ship meaningful student projects.",
    af: "Waar ons diep delf, saam bou en betekenisvolle studenteprojekte lewer.",
    xh: "Apho singena nzulu, sakha kunye, kwaye sithumela iiprojekthi ezifanelekileyo zabafundi.",
  },
  "about.focusAreasTagline": {
    en: "Student-led builds, meetups, and challenges in this track.",
    af: "Student-geleide bouprojekte, byeenkomste en uitdagings in hierdie baan.",
    xh: "Iiprojekthi ezikhokelwa ngabafundi, iintlanganiso, kunye nemingeni kule ndlela.",
  },
  "about.vision": {
    en: "To be the leading student tech community in South Africa, empowering the next generation of developers.",
    af: "Om die voorste studente-tegnologiegemeenskap in Suid-Afrika te wees, wat die volgende generasie ontwikkelaars bemagtig.",
    xh: "Ukuba luluntu lwabafundi lweteknoloji oluphambili eMzantsi Afrika, eluxhobisa isizukulwana esilandelayo sabaphuhlisi.",
  },
  "about.missionStatement": {
    en: "To create opportunities for students to learn, collaborate, and grow their technical skills through hands-on experiences.",
    af: "Om geleenthede te skep vir studente om te leer, saam te werk en hul tegniese vaardighede te ontwikkel deur praktiese ervarings.",
    xh: "Ukudala amathuba okuba abafundi bafunde, basebenzisane, baze bakhulise izakhono zabo zobugcisa ngamava okusebenza.",
  },

  // Events page
  "events.title": {
    en: "Events",
    af: "Geleenthede",
    xh: "Iziganeko",
  },
  "events.subtitle": {
    en: "Stay updated with our upcoming events and activities",
    af: "Bly op hoogte van ons komende geleenthede en aktiwiteite",
    xh: "Hlala unolwazi ngeziganeko zethu ezizayo kunye nemisebenzi",
  },
  "events.upcoming": {
    en: "Upcoming",
    af: "Binnekort",
    xh: "Ezizayo",
  },
  "events.ongoing": {
    en: "Ongoing",
    af: "Aan die gang",
    xh: "Eqhubekayo",
  },
  "events.suggestEvent": {
    en: "Want to suggest an event?",
    af: "Wil jy 'n geleentheid voorstel?",
    xh: "Ufuna ukucebisa isiganeko?",
  },
  "events.contactUs": {
    en: "Contact us",
    af: "Kontak ons",
    xh: "Qhagamshelana nathi",
  },
  "events.registerButton": {
    en: "Register Now",
    af: "Registreer Nou",
    xh: "Bhalisa ngoku",
  },
  "events.joinButton": {
    en: "Join Now",
    af: "Sluit Nou Aan",
    xh: "Ngena ngoku",
  },
  "events.ViewDetailsButton": {
    en: "View Details",
    af: "Bekyk Besonderhede",
    xh: "Jonga iinkcukacha",
  },
  "events.liveEvent": {
    en: "LIVE NOW",
    af: "LIVE NOU",
    xh: "PHILA NGOKU",
  },
  "events.nextEvent": {
    en: "NEXT EVENT",
    af: "VOLGENDE GEBEURTENIS",
    xh: "ISIGANEKO ESILANDELAYO",
  },
  

  // Events items
  "events.welcoming-event-26-title": {
    en: "Welcoming Event 2026",
    af: "Verwelkomingsgeleentheid 2026",
    xh: "Umsitho Wokwamkela ka-2026",
  },
  "events.welcoming-event-26-description": {
    en: "Join us for our official opening event for 2026. Get an introduction into the society, learn tips and tricks to help elevate yourself in the IT Space and enjoy some Pizza while connecting with people with a shared goal",
    af: "Sluit by ons aan vir ons amptelike openingsgeleentheid vir 2026. Kry 'n inleiding tot die samelewing, leer wenke en truuks om jouself in die IT-ruimte te verhef en geniet 'n bietjie pizza terwyl jy met mense met 'n gedeelde doelwit skakel.",
    xh: "Joyina nathi kumsitho wethu wokuvula ngokusesikweni ka-2026. Fumana intshayelelo kuluntu, funda iingcebiso kunye namaqhinga okukunceda uziphakamise kwi-IT Space kwaye wonwabele iPizza ngelixa unxibelelana nabantu abanomgomo ofanayo.",
  },

  // Projects page
  "projects.title": {
    en: "Projects",
    af: "Projekte",
    xh: "Iiprojekthi",
  },

  "projects.project-one-title": {
    en: "DevSoc Ticket Management System",
    af: "DevSoc Kaartjiebestuurstelsel",
    xh: "DevSoc Inkqubo yoLawulo lwamaTikiti",
  },

  "projects.project-one-description": {
    en: "An internally developed ticketing platform for managing event registrations, digital tickets, and attendee check-ins.",
    af: "'n Intern ontwikkelde kaartjieplatform vir die bestuur van geleentheidsregistrasies, digitale kaartjies en bywoners se inskrywings.",
    xh: "Iqonga lokuthengisa amatikiti eliphuhliswe ngaphakathi lokulawula ubhaliso lweziganeko, amatikiti edijithali, kunye nokungena kwabantu abakhoyo.",
  },

  "projects.view-project": {
    en: "View Project",
    af: "Bekyk Na Die Projek",
    xh: "Jonga iProjekthi",
  },

  "projects.suggest": {
    en: "Want to suggest a project idea or want to have your project here?",
    af: "Wil jy 'n projekidee voorstel of jou projek hier hê?",
    xh: "Ufuna ukuphakamisa ingcinga yeprojekthi okanye ufuna ukuba neprojekthi yakho apha?",
  },
  "projects.contactUs": {
    en: "Contact Us",
    af: "Kontak Ons",
    xh: "Qhagamshelana Nathi",
  },

  // Footer
  "footer.services": {
    en: "Services",
    af: "Dienste",
    xh: "Iinkonzo",
  },
  "footer.resources": {
    en: "Resources",
    af: "Hulpbronne",
    xh: "Izixhobo",
  },
  "footer.quickLinks": {
    en: "Quick Links",
    af: "Vinnige Skakels",
    xh: "Amakhonkco Akhawulezayo",
  },
  "footer.description": {
    en: "Stellenbosch University Developer Society",
    af: "Universiteit Stellenbosch Ontwikkelaarsvereniging",
    xh: "Umbutho Wabaphuhlisi weYunivesithi yaseStellenbosch",
  },
  "footer.copyright": {
    en: "Stellenbosch University Developer Society. All rights reserved.",
    af: "Universiteit Stellenbosch Ontwikkelaarsvereniging. Alle regte voorbehou.",
    xh: "Umbutho Wabaphuhlisi weYunivesithi yaseStellenbosch. Onke amalungelo agciniwe.",
  },
  "footer.policy": {
    en: "Policy",
    af: "Beleid",
    xh: "Umgaqo-nkqubo",
  },
  "footer.serviceDesk": {
    en: "Service Desk",
    af: "Diensbalie",
    xh: "Idesika Yenkonzo",
  },
  "footer.legacySite": {
    en: "Legacy Site",
    af: "Ou Webwerf",
    xh: "Isayithi Elidala",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["en", "af", "xh"].includes(saved)) {
      return saved;
    }
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Load saved language on mount
  useEffect(() => {
    const saved = getInitialLanguage();
    if (saved !== "en") {
      setLanguageState(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
