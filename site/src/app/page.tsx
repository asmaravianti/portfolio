import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <section className="max-w-6xl mx-auto pt-16 pb-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <span className="font-[family:var(--font-pixel)] text-[13px] tracking-wide text-[--color-muted] uppercase">Hello, I’m Asmara</span>
          <h1 className="font-[family:var(--font-display)] text-4xl sm:text-5xl leading-tight">
            I build ML‑powered analytics and biomedical signal tools with a cozy touch.
          </h1>
          <p className="text-[--color-muted] max-w-prose">
            Final‑year CS @ ELTE • R&D + Ops rotation • willing to relocate. I enjoy turning ECG/EEG signals and data pipelines into useful, friendly products.
          </p>
          <div className="flex gap-2 mt-2">
            <a href="/work" className="pill sparkle-btn px-4 py-2 bg-[--color-primary] text-black hover:shadow-md transition-shadow">See my work</a>
            <a href="/contact" className="pill px-4 py-2 hover:shadow-md transition-shadow">Contact</a>
          </div>
        </div>
        <div className="relative h-[220px] sm:h-[280px] md:h-[320px]">
          <div className="card pixel-border w-full h-full grid place-items-center bg-cozy">
            <Image src="/heart-pixel.svg" alt="Pixel heart" width={120} height={90} className="opacity-90" />
          </div>
          <div className="sticker absolute -top-3 -left-3 font-[family:var(--font-pixel)] text-xs px-2 py-1 rounded-md border border-[--color-border] bg-[--color-card] shadow-sm">★</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto pb-16">
        <h2 className="font-[family:var(--font-display)] text-2xl mb-4">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "ECG Compression Benchmark",
              subtitle: "PRD/CR platform + Codabench",
              metric: "WWPRD‑aligned AE baseline",
            },
            {
              title: "SaaS Churn Analytics",
              subtitle: "Single‑command pipeline + dashboards",
              metric: "Honest eval + model compare",
            },
            {
              title: "Event Management API",
              subtitle: "Advanced filters + engagement insights",
              metric: "JSON persistence",
            },
          ].map((p) => (
            <a key={p.title} href="/work" className="card pixel-border p-4 hover:shadow-[var(--shadow-lift)] transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-[family:var(--font-display)] text-lg">{p.title}</h3>
                  <p className="text-[--color-muted] text-sm">{p.subtitle}</p>
                </div>
                <span className="pill text-xs px-2 py-1 bg-[--color-info]">{p.metric}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
