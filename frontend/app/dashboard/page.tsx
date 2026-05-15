"use client";
import { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";
import LoadingCard from "../components/LoadingCard";

export default function DashboardPage() {
  const [kpis, setKpis] = useState<any>();
  const [tasks, setTasks] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [timeline, setTimeline] = useState<any[]>([]);

  useEffect(() => {
    apiGet<any>("/kpis").then(setKpis).catch(console.error);
    apiGet<any[]>("/tasks").then(setTasks).catch(console.error);
    apiGet<any[]>("/notifications").then(setNotes).catch(console.error);
    apiGet<any[]>("/timeline").then(setTimeline).catch(console.error);
  }, []);

  return <main className="mx-auto max-w-7xl p-6 space-y-4">
    <h1 className="text-3xl font-bold">Operations Dashboard</h1>
    {!kpis ? <LoadingCard /> : <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{Object.entries(kpis).map(([k,v]) => <div key={k} className="rounded-xl bg-soft p-3"><p className="text-xs text-slate-400">{k}</p><p className="text-2xl">{String(v)}</p></div>)}</div>}
    <section className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-xl bg-panel p-4"><h2 className="mb-2 font-semibold">Tasks</h2>{tasks.map(t => <p key={t.id} className="text-sm text-slate-300">{t.title} • {t.status} • {t.priority}</p>)}</div>
      <div className="rounded-xl bg-panel p-4"><h2 className="mb-2 font-semibold">Notifications</h2>{notes.map(n => <p key={n.id} className="text-sm text-slate-300">{n.title}</p>)}</div>
    </section>
    <div className="rounded-xl bg-panel p-4"><h2 className="mb-2 font-semibold">Operational Timeline</h2>{timeline.map(e => <p key={e.id} className="text-sm text-slate-300">{e.event_type}: {e.summary}</p>)}</div>
  </main>;
}
