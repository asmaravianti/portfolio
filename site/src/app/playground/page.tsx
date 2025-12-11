export const metadata = { title: "Playground" };

export default function PlaygroundPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto py-12">
      <h1 className="font-[family:var(--font-display)] text-3xl mb-4">Playground</h1>
      <p className="text-[--color-muted] mb-6">Tiny interactive demos and visualizations.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <h2 className="font-[family:var(--font-display)] text-lg mb-2">ECG Denoise (coming soon)</h2>
          <p className="text-[--color-muted] text-sm">A slider to add noise and preview denoising.</p>
        </div>
        <div className="card p-4">
          <h2 className="font-[family:var(--font-display)] text-lg mb-2">FFT Visualizer (coming soon)</h2>
          <p className="text-[--color-muted] text-sm">A small spectrum view for a sample signal.</p>
        </div>
      </div>
    </div>
  );
}



