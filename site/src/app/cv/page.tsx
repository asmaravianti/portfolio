export const metadata = { title: "CV" };

export default function CVPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto py-12">
      <h1 className="font-[family:var(--font-display)] text-3xl mb-4">CV</h1>
      <p className="text-[--color-muted] mb-4">A polished web CV will go here with a PDF download link.</p>
      <a className="pill px-4 py-2 bg-[--color-primary] text-black" href="#">Download PDF (soon)</a>
    </div>
  );
}



