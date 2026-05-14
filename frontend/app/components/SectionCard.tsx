import { ReactNode } from "react";

export default function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-700/40 bg-panel p-5 shadow-lg shadow-black/20">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">{title}</h2>
      {children}
    </section>
  );
}
