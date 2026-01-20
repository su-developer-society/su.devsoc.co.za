"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BarChart3, Database, AlertTriangle, Wand2 } from "lucide-react";

const analyticsTypes = [
  { title: "Descriptive", desc: "What happened? Counts, totals, distributions." },
  { title: "Diagnostic", desc: "Why did it happen? Segment, correlate, drill-down." },
  { title: "Predictive", desc: "What might happen? Forecast demand, risk scores." },
  { title: "Prescriptive", desc: "What should we do? Recommendations and actions." },
];

const saContexts = [
  "Education analytics: module pass rates, tutoring impact, fairness checks.",
  "Public health reporting and dashboards for clinics and campuses.",
  "Transport and mobility: class schedule vs. shuttle usage, travel times.",
  "Energy and utilities: residence consumption, demand response signals.",
  "Retail and campus stores: basket analysis, stock and supply planning.",
];

const tools = [
  "SQL fundamentals; joins, window functions, and CTEs.",
  "Python with pandas, notebooks for exploration.",
  "Visualization: Power BI/Tableau, lightweight web dashboards.",
  "Transformation: dbt-style modeling; tests and documentation.",
  "Warehouses and lakes: BigQuery/Snowflake concepts; Parquet/Delta basics.",
];

const dataQuality = [
  "Missing data handling: imputation vs. flagging; track fill rates.",
  "Sampling: know who is represented; avoid urban-only or single-language bias.",
  "Privacy: minimise personal identifiers; aggregate where possible.",
  "Lineage: document source systems, refresh cadence, and owners.",
  "Validation: freshness checks, anomaly detection, reconciliation.",
];

export default function DataScienceAnalyticsPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Focus Track</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Data Science & Analytics</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              From descriptive dashboards to prescriptive actions, grounded in South Africa’s data realities.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {analyticsTypes.map((item) => (
              <div key={item.title} className="flex h-full flex-col gap-2 border border-purple-800 bg-black/80 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-purple-200">{item.title}</div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <BarChart3 className="h-6 w-6 text-purple-300" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em]">South African Contexts</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {saContexts.map((context) => (
                <div key={context} className="border border-purple-900/60 bg-black/70 p-4 text-sm text-gray-300 leading-relaxed">
                  {context}
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Database className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Tools</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                {tools.map((tool) => (
                  <li key={tool}>• {tool}</li>
                ))}
              </ul>
            </div>
            <div className="border border-purple-800 bg-black/80 p-5 space-y-3">
              <div className="flex items-center gap-3 text-purple-100">
                <Wand2 className="h-6 w-6 text-purple-300" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Workflow</h3>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <li>• Ask clear questions with stakeholders before pulling data.</li>
                <li>• Prototype quickly in notebooks; promote to versioned models.</li>
                <li>• Add tests: row counts, freshness, null thresholds.</li>
                <li>• Publish simple, readable visuals with context and caveats.</li>
              </ul>
            </div>
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <AlertTriangle className="h-6 w-6 text-purple-300" />
              <h3 className="text-lg font-semibold uppercase tracking-[0.2em]">Data Quality in the Real World</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {dataQuality.map((item) => (
                <div key={item} className="border border-purple-900/60 bg-black/70 p-4 text-sm text-gray-300 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
