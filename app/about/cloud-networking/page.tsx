"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Cloud, Globe2, Server, Cable, ShieldCheck, MapPin, Rocket, RadioTower, Activity, Lock, DownloadCloud, Compass } from "lucide-react";

const fundamentals = [
  { title: "The Internet", body: "Networks linked by undersea cables, terrestrial fibre, peering, and IXPs moving packets between providers." },
  { title: "Domains & Routing", body: "IP addresses, DNS, BGP routing; latency shaped by path choices and distance." },
  { title: "Web Basics", body: "HTTP/HTTPS over TLS for secure delivery; CDNs cache at the edge to reduce latency." },
  { title: "Load & Scale", body: "Load balancers spread traffic; autoscaling and caching keep apps responsive." },
];

const saNotes = [
  "AWS launched its Africa (Cape Town) Region in 2020.",
  "Latency matters: Cape Town vs Johannesburg vs overseas routes.",
  "Local ISPs and peering shape student experience on campus networks.",
  "CDNs (Cloudflare, AWS, Google, Microsoft) bring content closer to Africa.",
];

const tools = [
  "Docker for packaging; Kubernetes basics for orchestration.",
  "Terraform/IaC for repeatable environments.",
  "Cloud providers: AWS, Azure, GCP; CDN/edge via Cloudflare.",
  "CI/CD: GitHub Actions; automated tests and linting before deploy.",
  "Monitoring and logging: metrics, traces, uptime, error budgets.",
];

const topics = [
  { icon: <Cable className="h-6 w-6 text-purple-300" />, title: "Undersea Cables & IXPs", desc: "Africa connects via submarine cables and IXPs; peering reduces hops and latency." },
  { icon: <MapPin className="h-6 w-6 text-purple-300" />, title: "Edge & CDN", desc: "Serve static assets and APIs closer to Cape Town/JHB to cut round trips." },
  { icon: <Server className="h-6 w-6 text-purple-300" />, title: "Compute Choices", desc: "Mix serverless, containers, and VMs; right-size for cost and performance." },
  { icon: <ShieldCheck className="h-6 w-6 text-purple-300" />, title: "Security", desc: "TLS everywhere, WAFs, secrets management, network segmentation." },
  { icon: <DownloadCloud className="h-6 w-6 text-purple-300" />, title: "Data & Backup", desc: "Replicate data, test restores, and respect residency where required." },
  { icon: <Activity className="h-6 w-6 text-purple-300" />, title: "Observability", desc: "Logs, metrics, traces, and synthetic tests for uptime and latency." },
];

export default function CloudNetworkingPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Focus Track</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Cloud & Networking</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              From fibre and peering to edge and cloud: build fast, secure systems that work for South Africa.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2">
            {fundamentals.map((item) => (
              <div key={item.title} className="flex h-full flex-col gap-2 border border-purple-800 bg-black/80 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-purple-200">{item.title}</div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <Globe2 className="h-6 w-6 text-purple-300" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em]">South African Reality</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {saNotes.map((note) => (
                <div key={note} className="border border-purple-900/60 bg-black/70 p-4 text-sm text-gray-300 leading-relaxed">
                  {note}
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div key={topic.title} className="flex h-full flex-col gap-2 border border-purple-800 bg-black/80 p-5">
                <div className="flex items-center gap-3 text-purple-100">
                  {topic.icon}
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{topic.title}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <Cloud className="h-6 w-6 text-purple-300" />
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
                <li>• Design for latency: cache, edge, and regional placement.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-purple-200">
              <span className="flex items-center gap-2"><Rocket className="h-4 w-4" /> Performance</span>
              <span className="flex items-center gap-2"><Lock className="h-4 w-4" /> TLS</span>
              <span className="flex items-center gap-2"><RadioTower className="h-4 w-4" /> Edge</span>
              <span className="flex items-center gap-2"><Compass className="h-4 w-4" /> Routing</span>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
