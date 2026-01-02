import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">404 — Not Found</h1>
      <p className="text-zinc-700">
        This page doesn’t exist. Try going back to the homepage.
      </p>
      <Link className="underline" href="/">
        ← Home
      </Link>
    </div>
  );
}
