export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 text-sm text-zinc-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Avdeev</p>
          <p className="text-zinc-500">Built with Next.js • Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
