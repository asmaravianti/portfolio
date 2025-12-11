export const metadata = { title: "ECG Compression Benchmark" };

export default function ECGCase() {
  return (
    <article className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto py-12">
      <h1 className="font-[family:var(--font-display)] text-3xl mb-2">ECG Compression Benchmark</h1>
      <p className="text-[--color-muted] mb-6">PRD/CR platform with Codabench integration and WWPRD‑aligned AE baseline.</p>
      <div className="card p-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          <span className="pill px-2 py-1 text-xs bg-[--color-info]">Python</span>
          <span className="pill px-2 py-1 text-xs bg-[--color-info]">FastAPI</span>
          <span className="pill px-2 py-1 text-xs bg-[--color-info]">Signals</span>
          <span className="pill px-2 py-1 text-xs bg-[--color-info]">ML</span>
        </div>
      </div>
      <section className="prose prose-neutral dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p>
          I built a benchmark platform to evaluate ECG compression algorithms with standard metrics (PRD, CR) and
          an AE baseline trained with a WWPRD‑aligned loss on MIT‑BIH (+ synthetic and real noise). The platform
          integrates with Codabench for submissions and evaluation.
        </p>
        <h2>Impact</h2>
        <ul>
          <li>Reproducible baseline with clear metric reporting.</li>
          <li>Codabench integration for fair comparisons and community submissions.</li>
          <li>Extensible API for adding new metrics and datasets.</li>
        </ul>
      </section>
    </article>
  );
}



