"use client";

import { ContentItem } from "../../lib/types";
import SectionCard from "../components/SectionCard";

const contentCalendar: ContentItem[] = [
  {
    id: 1,
    title: "Business Formation Legal Checklist",
    platform: "LinkedIn",
    campaign: "SMB Launch Q2",
    planned_date: "2026-05-19",
    scheduled_at: "2026-05-19 14:00",
    status: "Scheduled",
    media_asset_url: "s3://orion-content/assets/checklist-carousel.pdf",
    canva_reference: "https://canva.com/design/DA-ORION-LINKEDIN-001",
    video_topic: "Top 5 legal mistakes founders make",
    hashtags: ["#OrionLaw", "#StartupLaw", "#LegalTips"],
    cta: "Book a startup consult",
    views: 4800,
    engagement: 621,
    leads_generated: 14,
    conversion_source: "LinkedIn organic"
  },
  {
    id: 2,
    title: "Employment Policy FAQ Reel",
    platform: "Instagram",
    campaign: "HR Compliance Sprint",
    planned_date: "2026-05-20",
    scheduled_at: "2026-05-20 11:00",
    status: "Planned",
    media_asset_url: "s3://orion-content/assets/hr-faq-reel.mp4",
    canva_reference: "https://canva.com/design/DA-ORION-IG-014",
    video_topic: "How to avoid misclassification",
    hashtags: ["#EmploymentLaw", "#SmallBusiness", "#HRCompliance"],
    cta: "Download policy template",
    views: 2100,
    engagement: 289,
    leads_generated: 8,
    conversion_source: "Instagram reels"
  }
];

const aiTools = ["Caption Generator", "Hook Generator", "CTA Generator", "Video Topic Generator", "Legal Content Ideas"];

export default function ContentOpsPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 p-6">
      <header>
        <h1 className="text-3xl font-bold">Content Operations</h1>
        <p className="text-slate-400">Calendar, campaigns, assets, and analytics across Meta and professional channels.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Active Campaigns</p><p className="text-2xl font-semibold">6</p></div>
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Top Content</p><p className="text-2xl font-semibold">LinkedIn Carousel</p></div>
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Lead Attribution</p><p className="text-2xl font-semibold">42% Social</p></div>
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Weekly Growth</p><p className="text-2xl font-semibold">+18.4%</p></div>
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-6">
          <SectionCard title="Content Calendar & Scheduling">
            <div className="space-y-3">
              {contentCalendar.map((item) => (
                <article key={item.id} className="rounded-lg border border-slate-700/30 bg-soft/50 p-4 text-sm">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-slate-400">{item.platform} • {item.campaign} • {item.status}</p>
                  <p className="text-slate-400">Plan: {item.planned_date} • Scheduled: {item.scheduled_at}</p>
                  <p className="text-slate-300">CTA: {item.cta}</p>
                  <p className="text-xs text-slate-500">Hashtags: {item.hashtags.join(" ")}</p>
                </article>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Campaign Tracking & Performance Analytics">
            <div className="overflow-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-slate-400"><tr><th>Content</th><th>Views</th><th>Engagement</th><th>Leads</th><th>Conversion Source</th></tr></thead>
                <tbody>
                  {contentCalendar.map((item) => (
                    <tr key={item.id} className="border-t border-slate-700/40">
                      <td className="py-2">{item.title}</td><td>{item.views}</td><td>{item.engagement}</td><td>{item.leads_generated}</td><td>{item.conversion_source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <SectionCard title="Media Asset Management">
            {contentCalendar.map((item) => (
              <div key={item.id} className="mb-3 rounded-lg border border-slate-700/30 bg-soft/50 p-3 text-xs">
                <p className="text-slate-300">Asset: {item.media_asset_url}</p>
                <p className="text-slate-400">Canva: {item.canva_reference}</p>
                <p className="text-slate-400">Video Topic: {item.video_topic}</p>
              </div>
            ))}
          </SectionCard>

          <SectionCard title="AI Content Tools">
            <div className="grid gap-2">
              {aiTools.map((tool) => (
                <button key={tool} className="rounded-lg bg-accent px-3 py-2 text-sm text-white hover:brightness-110">{tool}</button>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Future Meta API Integration Readiness">
            <ul className="list-disc space-y-1 pl-4 text-sm text-slate-300">
              <li>Platform field normalized for Facebook, Instagram, and WhatsApp posting endpoints.</li>
              <li>Scheduling model supports external publish IDs and sync statuses.</li>
              <li>Asset records can store provider IDs for Meta media containers.</li>
            </ul>
          </SectionCard>
        </div>
      </div>
    </main>
  );
}
