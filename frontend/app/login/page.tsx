"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@orion.law");
  const [password, setPassword] = useState("password");

  async function submit() {
    const res = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    const data = await res.json();
    if (data.access_token) localStorage.setItem("orion_token", data.access_token);
    alert(data.access_token ? "Logged in" : "Login failed");
  }

  return <main className="mx-auto max-w-md p-6"><h1 className="mb-4 text-2xl font-bold">Secure Login</h1><input className="mb-2 w-full rounded border border-slate-700 bg-bg p-2" value={email} onChange={(e)=>setEmail(e.target.value)} /><input className="mb-2 w-full rounded border border-slate-700 bg-bg p-2" value={password} type="password" onChange={(e)=>setPassword(e.target.value)} /><button className="rounded bg-accent px-4 py-2" onClick={submit}>Login</button></main>;
}
