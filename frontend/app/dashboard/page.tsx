"use client";

import { useMemo, useState } from "react";
import SectionCard from "../components/SectionCard";
import { Kpi, Lead, Note, Task } from "../../lib/types";

const tasks: Task[] = [
  { id: 1, title: "Review intake forms", priority: "High", status: "In Progress", assigned_to: "Alex", due_date: "2026-05-18" },
  { id: 2, title: "Finalize retainer template", priority: "Medium", status: "Todo", assigned_to: "Jamie", due_date: "2026-05-20" }
];
const leads: Lead[] = [
  { id: 1, client_name: "Mercury Holdings", source: "Referral", lead_stage: "Consult Scheduled", conversion_probability: 74, last_contacted: "2026-05-12" },
  { id: 2, client_name: "Evergreen Logistics", source: "Website", lead_stage: "Discovery", conversion_probability: 42, last_contacted: "2026-05-10" }
];
const notesSeed: Note[] = [
  { id: 1, content: "Client asked about M&A due diligence timeline.", category: "Client", created_at: "2026-05-11 10:22" },
  { id: 2, content: "Need playbook for intake SLAs before June.", category: "Ops", created_at: "2026-05-13 14:09" }
];
const kpis: Kpi = { active_leads: 19, pending_tasks: 7, consultations_booked: 12, completed_tasks: 38 };

export default function DashboardPage() {
  const [query, setQuery] = useState("");
  const filteredNotes = useMemo(
    () => notesSeed.filter((n) => `${n.content} ${n.category}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <main className="mx-auto max-w-7xl p-6">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Orion Law Operations</h1>
          <p className="text-slate-400">Dark-mode legal-tech dashboard for internal teams.</p>
        </div>
      </header>

      <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(kpis).map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-700/40 bg-soft p-4">
            <p className="text-sm uppercase tracking-wide text-slate-400">{label.replace("_", " ")}</p>
            <p className="mt-2 text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Tasks">
          <div className="space-y-3 text-sm">
            {tasks.map((t) => (
              <div key={t.id} className="rounded-lg border border-slate-700/30 bg-soft/60 p-3">
                <p className="font-medium">{t.title}</p>
                <p className="text-slate-400">{t.priority} • {t.status} • {t.assigned_to} • Due {t.due_date}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Lead Pipeline">
          <div className="space-y-3 text-sm">
            {leads.map((l) => (
              <div key={l.id} className="rounded-lg border border-slate-700/30 bg-soft/60 p-3">
                <p className="font-medium">{l.client_name}</p>
                <p className="text-slate-400">{l.source} • {l.lead_stage} • {l.conversion_probability}% • {l.last_contacted}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Notes">
          <input
            className="mb-3 w-full rounded-lg border border-slate-700 bg-bg px-3 py-2 text-sm"
            placeholder="Search notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="space-y-2 text-sm">
            {filteredNotes.map((n) => (
              <div key={n.id} className="rounded-lg border border-slate-700/30 bg-soft/60 p-3">
                <p>{n.content}</p>
                <p className="mt-1 text-xs text-slate-400">{n.category} • {n.created_at}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="AI Actions Panel">
          <div className="grid gap-3 sm:grid-cols-2">
            {["Generate LinkedIn Post", "Generate Weekly Report", "Summarize Meeting", "Analyze Lead Pipeline"].map((action) => (
              <button key={action} className="rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition hover:brightness-110">
                {action}
              </button>
            ))}
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
