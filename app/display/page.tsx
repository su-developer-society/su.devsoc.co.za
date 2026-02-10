"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import ElectricGrid from "../components/ElectricGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Icons left in case future cloud callouts are reintroduced

type DisplayMode =
  | "phrases"
  | "partnersA"
  | "partnersB"
  | "partnerSingle"
  | "gridPulse"
  | "code"
  | "pillar"
  | "pillarsCycle"
  | "dvd"
  | "logoMode";

type DisplayOption = {
  id: string;
  label: string;
  description: string;
  mode: DisplayMode;
  pillar?: { title: string; lines: string[] };
  accent?: { from: string; via: string; to: string };
};

type PartnerLogo = {
  src: string;
  alt: string;
};

const partnerLogos: PartnerLogo[] = [
  { src: "/orange.svg", alt: "Orange Cyberdefense" },
  { src: "/taptic.svg", alt: "TAPTIC" },
  { src: "/sun_cs.svg", alt: "SUN Computer Science" },
  { src: "/subverted.svg", alt: "Subverted Academy" },
];

const pillarScreens = [
  {
    id: "pillar-ai",
    label: "AI & ML",
    description: "Highlight the AI & ML pillar with rotating statements.",
    mode: "pillar" as const,
    accent: { from: "from-purple-500/30", via: "via-pink-500/20", to: "to-blue-400/25" },
    pillar: {
      title: "Artificial Intelligence & Machine Learning",
      lines: ["Multilingual campus models", "Ethics-first AI", "Data you can trust"],
    },
  },
  {
    id: "pillar-cyber",
    label: "Cyber Security",
    description: "Defensive, ethical security focus.",
    mode: "pillar" as const,
    accent: { from: "from-amber-400/30", via: "via-purple-500/20", to: "to-red-400/25" },
    pillar: {
      title: "Cyber Security",
      lines: ["Secure coding", "POPIA aware", "SIM-swap resistant"],
    },
  },
  {
    id: "pillar-game",
    label: "Game Dev / Robotics / Embedded",
    description: "Show the making-and-building pillar.",
    mode: "pillar" as const,
    accent: { from: "from-cyan-400/30", via: "via-violet-500/20", to: "to-lime-400/25" },
    pillar: {
      title: "Game Dev · Robotics · Embedded",
      lines: ["Engines · ROS2 · ESP32", "Mining, agri, indie games"],
    },
  },
  {
    id: "pillar-fintech",
    label: "FinTech",
    description: "Finance and payments showcase.",
    mode: "pillar" as const,
    accent: { from: "from-emerald-400/30", via: "via-blue-500/20", to: "to-purple-500/25" },
    pillar: {
      title: "FinTech",
      lines: ["Payments · KYC/AML", "Big 5 banking to mobile-first"],
    },
  },
  {
    id: "pillar-data",
    label: "Data Science",
    description: "Analytics and data pillar.",
    mode: "pillar" as const,
    accent: { from: "from-orange-400/30", via: "via-purple-500/20", to: "to-blue-500/25" },
    pillar: {
      title: "Data Science & Analytics",
      lines: ["Descriptive → Prescriptive", "Education · Health · Energy"],
    },
  },
  {
    id: "pillar-cloud",
    label: "Cloud & Networking",
    description: "Infra and networking pillar.",
    mode: "pillar" as const,
    accent: { from: "from-blue-400/30", via: "via-indigo-500/20", to: "to-teal-400/25" },
    pillar: {
      title: "Cloud & Networking",
      lines: ["Cape Town region", "Edge/CDN · Peering · IXPs"],
    },
  },
  {
    id: "pillar-comp",
    label: "Competitive & OSS",
    description: "Algorithms and open-source pillar.",
    mode: "pillar" as const,
    accent: { from: "from-pink-400/30", via: "via-purple-500/20", to: "to-amber-400/25" },
    pillar: {
      title: "Competitive & Open-Source",
      lines: ["Data structures & complexity", "Ship PRs · Build portfolio"],
    },
  },
];

const displayOptions: DisplayOption[] = [
  {
    id: "phrases",
    label: "Hero Phrases",
    description: "Rotating phrases for SUDS (full screen).",
    mode: "phrases",
    accent: { from: "from-purple-500/30", via: "via-indigo-500/20", to: "to-fuchsia-500/25" },
  },
  {
    id: "pillars-cycle",
    label: "Cycle Pillars",
    description: "Automatically cycles through all pillars with typing.",
    mode: "pillarsCycle",
    accent: { from: "from-cyan-400/25", via: "via-purple-500/20", to: "to-amber-400/25" },
  },
  {
    id: "partners-a",
    label: "Partner Spotlight A",
    description: "One logo at a time with glow and phrases.",
    mode: "partnersA",
    accent: { from: "from-amber-400/30", via: "via-purple-500/20", to: "to-cyan-400/25" },
  },
  {
    id: "partners-b",
    label: "Partner Wall",
    description: "Grid of partner logos with subtle animation.",
    mode: "partnersB",
    accent: { from: "from-teal-400/30", via: "via-purple-500/20", to: "to-pink-400/25" },
  },
  {
    id: "partner-single",
    label: "Partner Select",
    description: "Lock one partner on screen; click preview to choose.",
    mode: "partnerSingle",
    accent: { from: "from-emerald-400/30", via: "via-purple-500/20", to: "to-blue-400/20" },
  },
  {
    id: "grid-pulse",
    label: "Grid Pulse",
    description: "Animated grid with SUDS tagline.",
    mode: "gridPulse",
    accent: { from: "from-blue-500/30", via: "via-purple-500/20", to: "to-indigo-400/25" },
  },
  {
    id: "code",
    label: "Code Banner",
    description: "Code-style banner with looping statements.",
    mode: "code",
    accent: { from: "from-green-400/25", via: "via-blue-500/20", to: "to-purple-400/25" },
  },
  {
    id: "dvd",
    label: "DVD Logo",
    description: "SUDS logo bouncing like a DVD screen.",
    mode: "dvd",
    accent: { from: "from-blue-400/25", via: "via-purple-500/15", to: "to-pink-400/20" },
  },
  {
    id: "logo-mode",
    label: "Logo Mode",
    description: "Centered logo with rotating hero phrases.",
    mode: "logoMode",
    accent: { from: "from-purple-500/25", via: "via-indigo-500/15", to: "to-fuchsia-500/25" },
  },
  ...pillarScreens,
];

const phrases = [
  "Stellenbosch University Developer Society",
  "Let's learn how to code",
  "Build. Ship. Share.",
  "Multilingual. Inclusive. Hands-on.",
  "SUDS · Stellenbosch · South Africa",
  "Collaborate. Create. Contribute.",
  "Campus-first, industry-ready.",
  "Code the future from Stellenbosch.",
];

const codeSnippets = [
  [
    'const suds = create("Stellenbosch");',
    "suds.stack(['AI', 'Security', 'Cloud']);",
    "suds.locale(['EN','AF','XH']);",
    "deploy({ env: 'prod', region: 'ZA' });",
    "observe(['metrics','logs','traces']);",
  ],
  [
    'const portfolio = build("student-site");',
    "github.push({ repo: portfolio, ci: 'lint+test' });",
    "cloudflare.pages.deploy(portfolio);",
    "dns.map({ domain: 'edu-domain.za', target: portfolio });",
    "status.check();",
  ],
  [
    "secure({ popia: true, secrets: 'env' });",
    "auth.enable({ mfa: true });",
    "scan.owaspTopTen();",
    "backup.enable({ cadence: 'daily' });",
    "alerts.notify('team');",
  ],
  [
    "data.pipeline.build(['ingest','clean','model']);",
    "analytics.run({ type: 'descriptive' });",
    "ml.train({ task: 'classification' });",
    "serve({ cache: true, edge: true });",
    "monitor({ drift: true });",
  ],
  [
    "game.dev({ engine: 'Godot', assets: 'Blender' });",
    "robotics.sim({ stack: 'ROS2' });",
    "embedded.flash({ target: 'ESP32' });",
    "safety.check({ lab: true });",
    "ship({ demo: true });",
  ],
];

const partnerPhrases = [
  "Supported by innovators across South Africa.",
  "Partners powering our student projects.",
  "Together we build resilient tech communities.",
];

const gridLines = [
  "Electric ideas on an electric grid.",
  "Stellenbosch devs connected across every line.",
  "Code, learn, and light up the network.",
];

export default function DisplayPage() {
  const [selectedId, setSelectedId] = useState(displayOptions[0].id);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [pillarCycleIndex, setPillarCycleIndex] = useState(0);
  const [partnerTextIndex, setPartnerTextIndex] = useState(0);
  const [gridLineIndex, setGridLineIndex] = useState(0);
  const [codeIndex, setCodeIndex] = useState(0);
  const [lockedPartner, setLockedPartner] = useState<PartnerLogo>(partnerLogos[0]);
  const [typedTarget, setTypedTarget] = useState("");
  const [typedText, setTypedText] = useState("");
  const [dvdPos, setDvdPos] = useState({ x: 80, y: 80 });
  const dvdVelRef = useRef({ vx: 1.6, vy: 1.3 });
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 12000);
    const partnerTimer = setInterval(() => {
      setPartnerIndex((i) => (i + 1) % partnerLogos.length);
      setPartnerTextIndex((i) => (i + 1) % partnerPhrases.length);
    }, 12000);
    const pillarTimer = setInterval(() => {
      setPillarCycleIndex((i) => (i + 1) % pillarScreens.length);
    }, 12000);
    const gridTimer = setInterval(() => {
      setGridLineIndex((i) => (i + 1) % gridLines.length);
    }, 12000);
    const codeTimer = setInterval(() => {
      setCodeIndex((i) => (i + 1) % codeSnippets.length);
    }, 15000);
    return () => {
      clearInterval(phraseTimer);
      clearInterval(partnerTimer);
      clearInterval(pillarTimer);
      clearInterval(gridTimer);
      clearInterval(codeTimer);
    };
  }, []);

  const selected = useMemo(
    () => displayOptions.find((d) => d.id === selectedId) ?? displayOptions[0],
    [selectedId]
  );

  const accent = selected.accent ?? { from: "from-purple-500/20", via: "via-purple-500/10", to: "to-purple-500/20" };

  const currentTypedSource = useMemo(() => {
    if (selected.mode === "phrases") return phrases[phraseIndex];
    if (selected.mode === "logoMode") return phrases[phraseIndex];
    if (selected.mode === "partnerSingle") return `Pinned: ${lockedPartner.alt}`;
    if (selected.mode === "pillar" && selected.pillar) {
      const rotating = selected.pillar.lines[(phraseIndex + selected.pillar.title.length) % selected.pillar.lines.length];
      return `${selected.pillar.title} — ${rotating}`;
    }
    if (selected.mode === "pillarsCycle") {
      const p = pillarScreens[pillarCycleIndex];
      const rotating = p.pillar?.lines[(phraseIndex + p.pillar.title.length) % (p.pillar?.lines.length ?? 1)] ?? "";
      return `${p.pillar?.title ?? ""} — ${rotating}`;
    }
    if (selected.mode === "partnersA" || selected.mode === "partnersB") {
      return partnerPhrases[partnerTextIndex];
    }
    if (selected.mode === "gridPulse") {
      return gridLines[gridLineIndex];
    }
    if (selected.mode === "code") {
      return codeSnippets[codeIndex].join("\n");
    }
    return "";
  }, [selected, phraseIndex, pillarCycleIndex, partnerTextIndex, gridLineIndex, codeIndex, lockedPartner]);

  useEffect(() => {
    setTypedTarget(currentTypedSource);
  }, [currentTypedSource]);

  useEffect(() => {
    let idx = 0;
    setTypedText("");
    if (!typedTarget) return;
    const timer = setInterval(() => {
      idx += 1;
      setTypedText(typedTarget.slice(0, idx));
      if (idx >= typedTarget.length) clearInterval(timer);
    }, 40); // faster typing for code/phrases
    return () => clearInterval(timer);
  }, [typedTarget]);

  useEffect(() => {
    if (selected.mode !== "dvd") return;
    let frame = 0;
    const step = () => {
      const container = previewRef.current;
      if (container) {
        const { clientWidth, clientHeight } = container;
        const logoWidth = 128;
        const logoHeight = 80;
        setDvdPos((pos) => {
          let { vx, vy } = dvdVelRef.current;
          let nx = pos.x + vx;
          let ny = pos.y + vy;
          if (nx <= 0 || nx + logoWidth >= clientWidth) {
            vx = -vx;
            dvdVelRef.current.vx = vx;
          }
          if (ny <= 0 || ny + logoHeight >= clientHeight) {
            vy = -vy;
            dvdVelRef.current.vy = vy;
          }
          nx = Math.min(Math.max(nx, 0), Math.max(clientWidth - logoWidth, 0));
          ny = Math.min(Math.max(ny, 0), Math.max(clientHeight - logoHeight, 0));
          return { x: nx, y: ny };
        });
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [selected.mode]);

  const enterFullscreen = () => {
    const el = previewRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      el.requestFullscreen().catch(() => {});
    }
  };

  const renderDisplay = (option: DisplayOption) => {
    const cursor = <span className="ml-1 text-purple-300 animate-pulse">|</span>;
    switch (option.mode) {
      case "phrases":
        return (
          <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden">
              {/* Purple blob 1 - dark purple */}
              <div className="absolute top-[5%] left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(88,28,135,0.5)_0%,transparent_70%)] blur-3xl" style={{ animation: 'blob-drift-1 18s ease-in-out infinite' }} />
              {/* Purple blob 2 - vivid purple */}
              <div className="absolute top-[45%] left-[55%] w-[55%] h-[55%] rounded-full bg-[radial-gradient(circle,rgba(126,34,206,0.45)_0%,transparent_70%)] blur-3xl" style={{ animation: 'blob-drift-2 22s ease-in-out infinite' }} />
              {/* Purple blob 3 - deep violet */}
              <div className="absolute top-[25%] left-[35%] w-[65%] h-[65%] rounded-full bg-[radial-gradient(circle,rgba(76,29,149,0.4)_0%,transparent_70%)] blur-3xl" style={{ animation: 'blob-drift-3 26s ease-in-out infinite' }} />
              {/* Purple blob 4 - medium purple */}
              <div className="absolute top-[55%] left-[15%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(109,40,217,0.38)_0%,transparent_70%)] blur-3xl" style={{ animation: 'blob-drift-4 20s ease-in-out infinite' }} />
              {/* Blue-purple blob 1 */}
              <div className="absolute top-[15%] left-[60%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(67,56,202,0.35)_0%,transparent_70%)] blur-3xl" style={{ animation: 'blob-drift-5 24s ease-in-out infinite' }} />
              {/* Blue-purple blob 2 */}
              <div className="absolute top-[65%] left-[40%] w-[45%] h-[45%] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.32)_0%,transparent_70%)] blur-3xl" style={{ animation: 'blob-drift-4 28s ease-in-out infinite reverse' }} />
              {/* Red accent - fades in and out */}
              <div className="absolute top-[35%] left-[25%] w-[45%] h-[45%] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.45)_0%,transparent_65%)] blur-3xl" style={{ animation: 'blob-drift-red 30s ease-in-out infinite' }} />
              {/* Light blue accent - fades in and out */}
              <div className="absolute top-[20%] left-[65%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.38)_0%,transparent_65%)] blur-3xl" style={{ animation: 'blob-drift-blue 30s ease-in-out infinite' }} />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px] opacity-40" />
            <div className="relative flex flex-col items-center justify-center gap-6 text-center">
              <div className="text-xs uppercase tracking-[0.35em] text-purple-300">SUDS</div>
              <div className="text-4xl sm:text-5xl font-bold text-white transition-all duration-700">
                {typedText}
                {cursor}
              </div>
              <div className="text-sm text-gray-400">Stellenbosch University Developer Society</div>
            </div>
          </div>
        );
      case "pillarsCycle": {
        const p = pillarScreens[pillarCycleIndex];
        const rotating = p.pillar?.lines[(phraseIndex + p.pillar.title.length) % (p.pillar?.lines.length ?? 1)] ?? "";
        return (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-purple-300">Focus</div>
            <div className="text-4xl sm:text-5xl font-bold text-white">{p.pillar?.title}</div>
            <div className="text-lg text-purple-200">
              {typedText || rotating}
              {cursor}
            </div>
          </div>
        );
      }
      case "partnersA": {
        const currentLogo = partnerLogos[partnerIndex];
        return (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-purple-300">Partners</div>
            <div className="bg-black/60 border border-purple-800 px-8 py-6">
              <Image
                src={currentLogo.src}
                alt={currentLogo.alt}
                width={320}
                height={120}
                className="h-24 w-auto object-contain"
              />
            </div>
            <div className="text-gray-300 text-lg">Supporting Stellenbosch builders.</div>
            <div className="text-sm text-purple-200">
              {typedText || partnerPhrases[partnerTextIndex]}
              {cursor}
            </div>
          </div>
        );
      }
      case "partnersB":
        return (
          <div className="grid h-full grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-items-center">
            {partnerLogos.map((logo, i) => (
              <div
                key={logo.src}
                className={`flex h-24 w-full items-center justify-center border border-purple-800 bg-black/60 ${
                  i === partnerIndex ? "opacity-100" : "opacity-70"
                }`}
              >
                <Image src={logo.src} alt={logo.alt} width={200} height={80} className="h-16 w-auto object-contain" />
              </div>
            ))}
            <div className="col-span-2 sm:col-span-4 text-center text-sm text-purple-200">
              {typedText || partnerPhrases[partnerTextIndex]}
              {cursor}
            </div>
          </div>
        );
      case "partnerSingle":
        return (
          <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-purple-300">Partner · Locked</div>
            <div className="bg-black/60 border border-emerald-700/70 px-8 py-6 rounded-lg shadow-inner">
              <Image
                src={lockedPartner.src}
                alt={lockedPartner.alt}
                width={360}
                height={140}
                className="h-24 w-auto object-contain drop-shadow-[0_0_22px_rgba(16,185,129,0.45)]"
              />
              <div className="mt-3 text-sm text-purple-200">
                {typedText || `Pinned: ${lockedPartner.alt}`}
                {cursor}
              </div>
            </div>
            <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-3">
              {partnerLogos.map((logo) => {
                const active = logo.src === lockedPartner.src;
                return (
                  <button
                    key={logo.src}
                    onClick={() => setLockedPartner(logo)}
                    className={`flex h-20 items-center justify-center border bg-black/60 transition ${
                      active
                        ? "border-emerald-500 bg-emerald-900/30 shadow-[0_0_30px_rgba(16,185,129,0.35)]"
                        : "border-purple-800 hover:border-emerald-400 hover:bg-emerald-900/15"
                    }`}
                  >
                    <Image src={logo.src} alt={logo.alt} width={220} height={90} className="h-16 w-auto object-contain" />
                  </button>
                );
              })}
            </div>
            <div className="text-[11px] text-gray-400">Click a logo to keep it on screen; cycling is paused in this mode.</div>
          </div>
        );
      case "gridPulse":
        return (
          <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-900/10 via-transparent to-purple-600/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px] opacity-40" />
            <div className="relative text-center space-y-3">
              <div className="text-xs uppercase tracking-[0.35em] text-purple-300">SUDS</div>
              <div className="text-4xl sm:text-5xl font-bold text-white">Stellenbosch University</div>
              <div className="text-lg text-purple-200">
                {typedText || gridLines[gridLineIndex]}
                {cursor}
              </div>
            </div>
          </div>
        );
      case "code":
        return (
          <div className="flex h-full flex-col items-start justify-center gap-3 font-mono text-lg text-purple-200">
            <div className="w-full bg-black/50 px-4 py-3 border border-purple-900/50 whitespace-pre-line">
              {typedText}
              {cursor}
            </div>
          </div>
        );
      case "pillar": {
        const pillar = option.pillar!;
        const rotating = pillar.lines[(phraseIndex + pillar.title.length) % pillar.lines.length];
        const isCloud = option.id === "pillar-cloud";
        return (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-purple-300">Focus</div>
            <div className="text-4xl sm:text-5xl font-bold text-white max-w-3xl">{pillar.title}</div>
            <div className="text-lg text-purple-200">
              {typedText || rotating}
              {cursor}
            </div>
            {isCloud && null}
          </div>
        );
      }
      case "dvd": {
        const pos = dvdPos;
        return (
          <div className="relative h-full w-full overflow-hidden bg-black">
            <div
              className="absolute"
              style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
            >
              <div className="flex items-center justify-center h-20 w-32 bg-black border border-purple-500">
                <Image src="/logo.svg" alt="SUDS logo" width={96} height={48} className="h-10 w-auto" />
              </div>
            </div>
          </div>
        );
      }
      case "logoMode": {
        return (
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.12),_transparent_60%)]" />
            <div className="flex flex-col items-center gap-4 text-center">
              <Image src="/logo_white.svg" alt="SUDS logo" width={416} height={166} className="h-36 w-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {typedText || phrases[phraseIndex]}
                {cursor}
              </div>
              <div className="text-sm uppercase tracking-[0.3em] text-purple-200">Stellenbosch University Developer Society</div>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col px-6 py-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <div className="space-y-4">
            <div className="border border-purple-800 bg-black/80 p-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-200 mb-2">Displays</h2>
              <p className="text-xs text-gray-400">Pick a tile to preview; click Fullscreen to project.</p>
            </div>
            <div className="border border-purple-800 bg-black/80 p-3 max-h-[72vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {displayOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                className={`relative overflow-hidden border px-3 py-4 text-left transition ${
                      selectedId === opt.id
                        ? "text-white"
                        : "text-gray-200"
                    } ${
                      opt.mode === "pillar"
                        ? selectedId === opt.id
                          ? "border-red-500 bg-red-900/30"
                          : "border-red-800 bg-black/70 hover:border-red-500 hover:bg-red-900/20"
                        : opt.mode === "partnersA" || opt.mode === "partnersB"
                        ? selectedId === opt.id
                          ? "border-emerald-500 bg-emerald-900/30"
                          : "border-emerald-800 bg-black/70 hover:border-emerald-500 hover:bg-emerald-900/20"
                        : selectedId === opt.id
                        ? "border-purple-500 bg-purple-900/30"
                        : "border-purple-800 bg-black/70 hover:border-purple-500 hover:bg-purple-900/20"
                    }`}
              >
                <div
                      className={`absolute inset-0 opacity-60 bg-gradient-to-br ${opt.accent?.from ?? "from-purple-500/10"} ${
                        opt.accent?.via ?? "via-purple-600/5"
                      } ${opt.accent?.to ?? "to-purple-500/10"} blur-xl`}
                    />
                    <div className="relative z-10 space-y-1">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-purple-200">Preview</div>
                      <div className="text-sm font-semibold">{opt.label}</div>
                      <div className="text-[11px] text-gray-400">{opt.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={enterFullscreen}
              className="w-full border border-purple-700 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100 hover:border-purple-400 transition"
            >
              Toggle Fullscreen
            </button>
          </div>

          <div
            ref={previewRef}
            className={`relative min-h-[500px] border border-purple-800 bg-black/80 flex items-stretch justify-center overflow-hidden ${
              selected.mode === "dvd" ? "p-0" : "p-6"
            }`}
          >
            <div
              className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.12),_transparent_55%)] pointer-events-none`}
            />
            <div
              className={`absolute inset-0 mix-blend-screen opacity-70 bg-gradient-to-br ${accent.from} ${accent.via} ${accent.to}`}
            />
            <div className="relative z-10 w-full h-full">{renderDisplay(selected)}</div>
            <div className="absolute left-4 bottom-4 z-[200] pointer-events-none">
              <Image src="/logo_white.svg" alt="SUDS logo" width={270} height={108} className="h-[72px] w-auto" />
            </div>
            {selected.mode === "phrases" && (
              <>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[200] pointer-events-none">
                  <span className="text-white/80 text-sm font-medium tracking-wide">su.devsoc.co.za</span>
                </div>
                <div className="absolute right-4 bottom-4 z-[200]">
                  <a href="https://www.instagram.com/sudevsoc/" target="_blank" rel="noopener noreferrer">
                    <QRCodeSVG
                      value="https://www.instagram.com/sudevsoc/"
                      size={216}
                      bgColor="transparent"
                      fgColor="#ffffff"
                      level="M"
                    />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
