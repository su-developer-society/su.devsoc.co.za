"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Landmark, CreditCard, ShieldCheck, Workflow, Building, Fingerprint, Cloud, Wallet, RefreshCcw, Network, Shield } from "lucide-react";

const timeline = [
  { year: "1800s", note: "Early commercial banks emerge in SA." },
  { year: "1900s", note: "Branch networks expand; cheque and cash dominant." },
  { year: "2000s", note: "Online and mobile banking roll out widely." },
  { year: "2010s", note: "Card and POS growth; QR and app payments appear." },
  { year: "2020s", note: "Digital-first experiences, instant payments, open APIs." },
];

const big5 = ["Standard Bank", "Absa", "FirstRand (FNB)", "Nedbank", "Capitec"];

const paymentConcepts = [
  { title: "Cards & EFT", body: "EMV cards, 3-D Secure, and traditional EFT rails for bill pay and salaries." },
  { title: "Instant Payments", body: "Faster settlement options; monitor risk and limits to reduce fraud." },
  { title: "Interoperability", body: "QR schemes, bank transfers, cards, and wallets should work across providers." },
  { title: "Fraud & AML", body: "Detect anomalies, block risky flows, and keep audit trails." },
];

const tools = [
  "APIs and OAuth for secure access to accounts and data",
  "Event-driven systems and Kafka for payment flows",
  "Encryption basics: in transit (TLS) and at rest",
  "Cloud platforms with observability and autoscaling",
  "Automation: GitHub Actions/CI for testing and deploys",
];

export default function FintechPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Focus Track</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">FinTech</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Banking, payments, and risk in the South African context—building trustworthy digital finance from campus to production.
            </p>
          </header>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <Landmark className="h-6 w-6 text-purple-300" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em]">A Brief SA Timeline</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-5">
              {timeline.map((item) => (
                <div key={item.year} className="border border-purple-900/60 bg-black/70 p-3 space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-300">{item.year}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="border border-purple-900/60 bg-black/70 p-3 text-sm text-gray-200">
              Big 5 banks in SA: {big5.join(", ")}.
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <CreditCard className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Payments</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                {paymentConcepts.map((concept) => (
                  <li key={concept.title}>
                    <span className="text-purple-200">{concept.title}:</span> {concept.body}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Building className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Regulation (High Level)</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>• PCI DSS concepts for handling card data securely.</li>
                <li>• KYC/AML concepts to verify users and monitor transactions.</li>
                <li>• Do not give legal advice; partner with compliance when in doubt.</li>
              </ul>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Shield className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Security in FinTech</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>• Tokenization for cards and sensitive identifiers.</li>
                <li>• Least privilege: scoped credentials, short-lived tokens.</li>
                <li>• Audit trails: capture who did what, when, and from where.</li>
                <li>• Segregate environments; monitor anomalies and alerts.</li>
              </ul>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Workflow className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">SA Reality</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>• High mobile banking adoption; card and QR payments widely used.</li>
                <li>• Remittances and cross-border needs for families and students.</li>
                <li>• Latency matters: local hosting improves app performance.</li>
                <li>• Fraud patterns: phishing, SIM swaps, social engineering.</li>
              </ul>
            </div>
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <Cloud className="h-6 w-6 text-purple-300" />
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">Tools & Architecture</h3>
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
                <li>• Observability: tracing, metrics, and alerting for payment flows.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-purple-200">
              <span className="flex items-center gap-2"><Wallet className="h-4 w-4" /> Payments</span>
              <span className="flex items-center gap-2"><RefreshCcw className="h-4 w-4" /> Reconciliation</span>
              <span className="flex items-center gap-2"><Network className="h-4 w-4" /> Interoperability</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Trust</span>
              <span className="flex items-center gap-2"><Fingerprint className="h-4 w-4" /> Identity</span>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
