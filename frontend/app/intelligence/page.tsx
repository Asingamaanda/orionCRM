"use client";
import { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

export default function IntelligencePage() {
  const [seo, setSeo] = useState<any[]>([]);
  const [content, setContent] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  useEffect(() => {
    apiGet<any[]>("/seo-metrics").then(setSeo).catch(console.error);
    apiGet<any[]>("/content-ops").then(setContent).catch(console.error);
    apiGet<any[]>("/leads").then(setLeads).catch(console.error);
  }, []);
  return <main className="mx-auto max-w-7xl p-6 space-y-4"><h1 className="text-3xl font-bold">Operational Intelligence</h1>
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="rounded-xl bg-panel p-4"><h2>Lead Pipeline</h2>{leads.map(l => <p key={l.id}>{l.client_name} • {l.stage} • {l.conversion_score}</p>)}</div>
      <div className="rounded-xl bg-panel p-4"><h2>Content Ops</h2>{content.map(c => <p key={c.id}>{c.title} • {c.platform} • {c.publishing_status}</p>)}</div>
      <div className="rounded-xl bg-panel p-4"><h2>SEO Engine</h2>{seo.map(s => <p key={s.id}>{s.seo_task} • {s.schema_status} • {s.optimization_score}</p>)}</div>
    </div></main>;
}
