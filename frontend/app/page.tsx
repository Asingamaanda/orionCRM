import Link from "next/link";

export default function Home() {
  return <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-3 p-6"><h1 className="text-4xl font-bold">Orion Platform</h1><div className="flex flex-wrap gap-2"><Link className="rounded border px-3 py-2" href="/login">Login</Link><Link className="rounded border px-3 py-2" href="/dashboard">Operations</Link><Link className="rounded border px-3 py-2" href="/content-ops">Content Ops</Link><Link className="rounded border px-3 py-2" href="/seo-growth">SEO Growth</Link><Link className="rounded border px-3 py-2" href="/intelligence">Intelligence</Link><Link className="rounded border px-3 py-2" href="/executive">Executive</Link></div></main>;
}
