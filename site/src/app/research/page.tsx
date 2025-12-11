export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto py-12">
      <h1 className="font-[family:var(--font-display)] text-3xl mb-6">Research</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <a href="/work/ecg-benchmark" className="card p-5 hover:shadow-[var(--shadow-lift)] transition-shadow">
          <h2 className="font-[family:var(--font-display)] text-xl">ECG Compression Benchmark</h2>
          <p className="text-[--color-muted] mt-1">PRD/CR metrics, Codabench integration, WWPRD‑aligned AE baseline.</p>
        </a>
        <div className="card p-5 opacity-70">
          <h2 className="font-[family:var(--font-display)] text-xl">EEG Epilepsy Detection</h2>
          <p className="text-[--color-muted] mt-1">Prototypes using ML and signal processing techniques.</p>
        </div>
      </div>
    </div>
  );
}



