export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto py-12">
      <h1 className="font-[family:var(--font-display)] text-3xl mb-4">Contact</h1>
      <div className="card p-5">
        <p>
          Email: <a className="underline" href="mailto:asmaragraciawork@gmail.com">asmaragraciawork@gmail.com</a>
        </p>
        <p className="mt-2">LinkedIn and GitHub links are in the footer.</p>
      </div>
    </div>
  );
}



