import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-zinc-600">Resume</p>
        <h1 className="text-3xl font-semibold tracking-tight">Download or view my CV</h1>
        <p className="max-w-2xl text-zinc-700">
          PDF version is available below. The web version will expand as I publish projects and case studies.
        </p>

        <Link
          href="/resume/avdeev-cv.pdf"
          className="inline-flex rounded-xl bg-zinc-900 px-5 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Download PDF
        </Link>
      </header>

      <div className="rounded-2xl border border-zinc-200 p-4">
        <iframe
          src="/resume/avdeev-cv.pdf"
          className="h-[80vh] w-full"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
