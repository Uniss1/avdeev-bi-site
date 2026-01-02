import Link from "next/link";

export default function HomeRuPage() {
  return (
    <div className="space-y-14">
      <section className="space-y-5">
        <p className="text-sm text-zinc-600">Data Engineer / BI Analyst</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Строю надёжные пайплайны, модели данных и аналитику.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-700">
          Я собираю портфолио публично: кейсы по data engineering, BI-проекты и практические
          заметки про SQL, dbt и Python.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/ru/resume"
            className="rounded-xl bg-zinc-900 px-5 py-2 text-sm text-white hover:bg-zinc-800"
          >
            Резюме
          </Link>
          <Link
            href="/ru/projects"
            className="rounded-xl border border-zinc-200 px-5 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Проекты (скоро)
          </Link>
          <Link
            href="/ru/blog"
            className="rounded-xl border border-zinc-200 px-5 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Блог
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Чем занимаюсь</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• ETL/ELT пайплайны</li>
            <li>• Моделирование DWH</li>
            <li>• BI дашборды и аналитика</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Сейчас изучаю</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• dbt best practices</li>
            <li>• Оркестрация</li>
            <li>• Data quality и тестирование</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-sm font-semibold">Открыт к</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>• Фуллтайм роли</li>
            <li>• Консалтинг по BI</li>
            <li>• Фриланс / part-time</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold">Последние посты</h2>
          <Link href="/ru/blog" className="text-sm text-zinc-600 hover:text-zinc-900">
            Все посты →
          </Link>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-700">
          Скоро будут посты. Первый пост — дорожная карта портфолио.
        </div>
      </section>
    </div>
  );
}
