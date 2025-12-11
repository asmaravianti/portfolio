export const metadata = { title: "Work" };

type Project = {
  title: string;
  href: string;
  summary: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "ECG Compression Benchmark",
    href: "/work/ecg-benchmark",
    summary: "PRD/CR platform with Codabench integration and WWPRD‑aligned AE baseline.",
    tags: ["ML", "Signals", "FastAPI"],
  },
  {
    title: "SaaS Churn Analytics",
    href: "/work/saas-churn",
    summary: "Single‑command pipeline, honest eval, Tableau dashboards.",
    tags: ["ML", "Analytics", "Tableau"],
  },
  {
    title: "Event Management API",
    href: "/work/event-api",
    summary: "REST API with advanced filters and engagement insights.",
    tags: ["FastAPI", "Pydantic", "Data"],
  },
  {
    title: "Safari Conservation Game",
    href: "/work/safari-game",
    summary: "2D simulation game; OOP mechanics, agile team.",
    tags: ["Unity", "C#", "Game"],
  },
];

export default function WorkPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-12">
      <h1 className="font-[family:var(--font-display)] text-3xl mb-6">Work</h1>
      <p className="text-[--color-muted] mb-8">Selected projects and research with brief summaries. Open each to see process, metrics, and tech.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <a key={proj.title} href={proj.href} className="card pixel-border p-5 hover:shadow-[var(--shadow-lift)] transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-[family:var(--font-display)] text-xl">{proj.title}</h2>
                <p className="text-[--color-muted] mt-1">{proj.summary}</p>
              </div>
              <span className="sticker font-[family:var(--font-pixel)] text-xs px-2 py-1 rounded-md border border-[--color-border] bg-[--color-card]">★</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.tags.map((t) => (
                <span key={t} className="pill text-xs px-2 py-1 bg-[--color-info]">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


