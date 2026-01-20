"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ShieldCheck, Lock, AlertCircle, GlobeLock, KeyRound, Binary, BellRing, ClipboardList } from "lucide-react";

const quickTopics = [
  { icon: <ShieldCheck className="h-6 w-6 text-purple-300" />, title: "Defensive First", body: "Secure coding, threat modeling, and reviewing OWASP Top 10 themes without exploit steps." },
  { icon: <Lock className="h-6 w-6 text-purple-300" />, title: "Student Safety", body: "Protect NSFAS, banking, and student accounts from phishing, SIM swap, and credential stuffing." },
  { icon: <GlobeLock className="h-6 w-6 text-purple-300" />, title: "POPIA Aware", body: "Collect minimum personal data, state purpose, secure storage, and respect deletion/consent." },
  { icon: <AlertCircle className="h-6 w-6 text-purple-300" />, title: "Responsible Disclosure", body: "Report issues safely and privately; avoid testing without permission." },
];

const tools = [
  "Burp Suite for controlled web testing",
  "Wireshark for traffic inspection in lab environments",
  "Nmap for network discovery with permission",
  "SIEM concepts (logs, alerts, correlation)",
  "Password managers for students and teams",
];

const templateSnippet = `Subject: Potential security issue found

Hello Team,

I identified a potential security issue on <system/URL>. No data was accessed or modified. Please let me know the right contact to share details privately so we can resolve it responsibly.

Thank you.`;

export default function CyberSecurityPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Focus Track</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Cyber Security</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Defensive and ethical security for Stellenbosch students: protect accounts, respect privacy, and build resilience against South African threats.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2">
            {quickTopics.map((item) => (
              <div key={item.title} className="flex h-full flex-col gap-3 border border-purple-800 bg-black/80 p-5">
                <div className="flex items-center gap-3 text-purple-100">
                  {item.icon}
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{item.title}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <Binary className="h-6 w-6 text-purple-300" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em]">South African Threats</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-purple-900/60 bg-black/70 p-4 space-y-2">
                <p className="text-sm text-purple-200">Identity & Banking</p>
                <ul className="text-sm text-gray-300 space-y-1 leading-relaxed">
                  <li>• SIM swap and OTP interception targeting mobile banking.</li>
                  <li>• Phishing on student emails for NSFAS refunds or “account updates”.</li>
                  <li>• Fake job offers and bursary scams collecting ID/passport numbers.</li>
                </ul>
              </div>
              <div className="border border-purple-900/60 bg-black/70 p-4 space-y-2">
                <p className="text-sm text-purple-200">Campus & Personal</p>
                <ul className="text-sm text-gray-300 space-y-1 leading-relaxed">
                  <li>• Device theft: keep disk encryption and strong screen locks.</li>
                  <li>• Public Wi‑Fi risks: prefer VPN for sensitive work.</li>
                  <li>• Social engineering: verify staff/student requests before sharing info.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <ClipboardList className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">POPIA Principles (High Level)</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>• Collect only what you need and state why.</li>
                <li>• Secure personal information (encryption, access control, logs).</li>
                <li>• Let people access or request deletion where appropriate.</li>
                <li>• Keep data accurate and limit retention.</li>
              </ul>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <BellRing className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Responsible Disclosure</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Report privately, avoid data access, and give owners time to fix. Do not run intrusive tests without permission.
              </p>
              <div className="border border-purple-900/60 bg-black/70 p-4 text-xs text-gray-200 whitespace-pre-wrap leading-relaxed">
                {templateSnippet}
              </div>
            </div>
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <KeyRound className="h-6 w-6 text-purple-300" />
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">Tools & Practices</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                {tools.slice(0,3).map((tool) => (
                  <li key={tool}>• {tool}</li>
                ))}
              </ul>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                {tools.slice(3).map((tool) => (
                  <li key={tool}>• {tool}</li>
                ))}
                <li>• MFA everywhere; use hardware keys where possible.</li>
                <li>• Backups and incident runbooks for student projects.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
