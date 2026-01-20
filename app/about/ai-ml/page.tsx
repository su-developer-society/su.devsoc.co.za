"use client";

import ElectricGrid from "../../components/ElectricGrid";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Brain, Cpu, Languages, BookOpenCheck, ShieldCheck, Bot, Workflow, Database, MessageCircle, Sparkles } from "lucide-react";

const cards = [
  {
    title: "AI vs ML vs Deep Learning",
    icon: <Brain className="h-6 w-6 text-purple-300" />,
    points: [
      "AI: systems that mimic reasoning (chat assistants, routing decisions).",
      "ML: patterns learned from data (mark predictions, study recommender).",
      "Deep Learning: neural nets handling complex signals (speech, images).",
      "Student example: timetable assistant that auto-builds a schedule from module data.",
    ],
  },
  {
    title: "Applied on Campus",
    icon: <BookOpenCheck className="h-6 w-6 text-purple-300" />,
    points: [
      "Study recommender: suggest past papers/notes based on module outcomes.",
      "Smart reminders: track deadlines and send multilingual nudges.",
      "Labs and queues: forecast lab congestion from historical usage.",
      "Accessibility: captioning and translation for recorded lectures.",
    ],
  },
  {
    title: "Languages & Data in SA",
    icon: <Languages className="h-6 w-6 text-purple-300" />,
    points: [
      "Prioritise English, Afrikaans, isiXhosa for Stellenbosch cohorts.",
      "Curate clean, representative datasets; avoid scraping without consent.",
      "Balance dialects; avoid overfitting to urban-only data.",
      "Document data sources, gaps, and collection ethics.",
    ],
  },
  {
    title: "Ethics & Safety",
    icon: <ShieldCheck className="h-6 w-6 text-purple-300" />,
    points: [
      "Bias: audit outputs for demographic skew; run red-team prompts.",
      "Privacy: no personal marks or IDs in prompts; minimise PII retention.",
      "Hallucinations: require citations for generated answers; keep human review.",
      "Monitoring: log model inputs/outputs with access controls and rotation.",
    ],
  },
  {
    title: "Model Patterns",
    icon: <Bot className="h-6 w-6 text-purple-300" />,
    points: [
      "Classification: email routing (admin vs finance vs academic).",
      "Forecasting: venue demand, study room utilisation.",
      "Retrieval + generation: campus handbook Q&A with citations.",
      "Computer vision: lab equipment usage detection with privacy overlays.",
    ],
  },
  {
    title: "Tools & Skills",
    icon: <Cpu className="h-6 w-6 text-purple-300" />,
    points: [
      "Python, PyTorch/TF, scikit-learn; notebooks for fast iteration.",
      "Vector stores, embeddings, simple RAG for campus knowledge bases.",
      "Pipelines: data versioning, eval suites, prompt tests, observability.",
      "Deployment: serverless endpoints, GPU/CPU mix, caching outputs.",
    ],
  },
];

const ethicsHighlights = [
  { icon: <Workflow className="h-5 w-5 text-purple-200" />, text: "Have a rollback path when a model misbehaves." },
  { icon: <Database className="h-5 w-5 text-purple-200" />, text: "Store raw data separately from prompts; encrypt at rest." },
  { icon: <MessageCircle className="h-5 w-5 text-purple-200" />, text: "Explain model limits clearly to users; set expectations." },
  { icon: <Sparkles className="h-5 w-5 text-purple-200" />, text: "Ship small, measured improvements; avoid overpromising." },
];

export default function AIMLPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <ElectricGrid showLines={false} color="purple" />
      <Header />

      <main className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center px-6 py-20">
        <div className="mx-auto w-full max-w-5xl space-y-10">
          <header className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Focus Track</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">AI & Machine Learning</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Building practical, ethical AI for campus life in South Africa: multilingual, privacy-aware, and grounded in student outcomes.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <div key={card.title} className="flex h-full flex-col gap-3 border border-purple-800 bg-black/80 p-5">
                <div className="flex items-center gap-3 text-purple-100">
                  {card.icon}
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">{card.title}</span>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="border border-purple-800 bg-black/80 p-6 space-y-4">
            <div className="flex items-center gap-3 text-purple-100">
              <ShieldCheck className="h-6 w-6 text-purple-300" />
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em]">Ethics & Safety Checklist</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ethicsHighlights.map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  {item.icon}
                  <span>{item.text}</span>
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
