import Link from "next/link";

export default function ResumeRuPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm text-zinc-600">Резюме</p>
        <h1 className="text-3xl font-semibold tracking-tight">Скачать или посмотреть CV</h1>
        <p className="max-w-2xl text-zinc-700">
          Ниже доступна PDF-версия резюме. Веб-версия будет расширяться по мере публикации проектов и кейсов.
        </p>

        <Link
          href="/resume/avdeev-cv.pdf"
          className="inline-flex rounded-xl bg-zinc-900 px-5 py-2 text-sm text-white hover:bg-zinc-800"
        >
          Скачать PDF
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
