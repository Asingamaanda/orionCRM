"use client";
import { useEffect, useState } from "react";
import { apiGet } from "../../lib/api";

export default function ExecutivePage() {
  const [data, setData] = useState<any>();
  useEffect(() => { apiGet<any>("/executive/overview").then(setData).catch(console.error); }, []);
  if (!data) return <main className="p-6">Loading executive overview...</main>;
  return <main className="mx-auto max-w-7xl p-6"><h1 className="text-3xl font-bold mb-4">Executive Overview</h1><div className="grid gap-3 md:grid-cols-3">{Object.entries(data).filter(([k])=>k!=="id").map(([k,v]) => <div key={k} className="rounded-xl bg-soft p-3"><p className="text-xs text-slate-400">{k}</p><p>{String(v)}</p></div>)}</div></main>;
}
