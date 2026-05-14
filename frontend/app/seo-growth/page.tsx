import SectionCard from "../components/SectionCard";
import { SeoEngineeringRequest } from "../../lib/types";

const devRequests: SeoEngineeringRequest[] = [
  {
    id: 1,
    business_objective: "Increase qualified consultation leads from organic",
    seo_issue: "Structured data missing on service pages",
    technical_requirements: "Add FAQ + LocalBusiness schema with validation tests",
    priority: "High",
    expected_impact: "+12% CTR",
    assigned_developer: "Priya",
    implementation_status: "In Progress"
  }
];

const weekly = [42, 45, 49, 52, 57, 61, 64];

export default function SeoGrowthPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">SEO & Growth Intelligence</h1>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Organic Traffic</p><p className="text-2xl">64k</p></div>
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Consultation Conversions</p><p className="text-2xl">186</p></div>
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Top Performing Page</p><p className="text-2xl">/corporate-compliance</p></div>
        <div className="rounded-xl border border-slate-700/40 bg-soft p-4"><p className="text-xs text-slate-400">Weekly Growth</p><p className="text-2xl">+14.3%</p></div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="Technical SEO Tracker">
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            <li>Indexed pages: 482</li><li>Crawl status: Healthy</li><li>Broken links: 7</li><li>Page speed: 89/100</li>
            <li>Mobile usability: 97%</li><li>Sitemap status: Submitted</li><li>robots.txt status: Valid</li><li>Schema coverage: 71%</li><li>Metadata completeness: 88%</li>
          </ul>
        </SectionCard>

        <SectionCard title="Local SEO Module">
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Google Business Profile tracking: Active</li>
            <li>Local keyword rankings: 34 tracked</li>
            <li>Ballito keyword visibility: 62%</li>
            <li>Location landing pages: 9 published</li>
            <li>Review tracking: 4.8★ avg</li>
          </ul>
        </SectionCard>

        <SectionCard title="Content SEO Module">
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Blog/article management: 54 published</li>
            <li>Keyword targeting coverage: 78%</li>
            <li>Internal linking suggestions: 23 pending</li>
            <li>SEO score per article: avg 82</li>
            <li>CTA tracking: enabled on all service blogs</li>
            <li>Organic traffic attribution: by article cluster</li>
          </ul>
        </SectionCard>

        <SectionCard title="Growth Analytics Module">
          <ul className="space-y-1 text-sm text-slate-300">
            <li>Organic traffic: 64,000/mo</li>
            <li>Consultation conversions: 186/mo</li>
            <li>Lead source tracking: Search + Social + Referral</li>
            <li>Campaign attribution: UTM + first touch</li>
            <li>Social media traffic: 18% of total sessions</li>
            <li>Top-performing pages: 12 page watchlist</li>
          </ul>
        </SectionCard>
      </div>

      <SectionCard title="Developer Liaison Board">
        <div className="overflow-auto text-sm">
          <table className="w-full text-left"><thead className="text-slate-400"><tr><th>Objective</th><th>Issue</th><th>Tech Requirements</th><th>Priority</th><th>Impact</th><th>Dev</th><th>Status</th></tr></thead><tbody>
            {devRequests.map((r) => <tr key={r.id} className="border-t border-slate-700/40"><td>{r.business_objective}</td><td>{r.seo_issue}</td><td>{r.technical_requirements}</td><td>{r.priority}</td><td>{r.expected_impact}</td><td>{r.assigned_developer}</td><td>{r.implementation_status}</td></tr>)}
          </tbody></table>
        </div>
      </SectionCard>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="AI SEO Assistant">
          <div className="grid gap-2 sm:grid-cols-2">
            {["Keyword Suggestions", "Meta Description Generation", "SEO Article Outlines", "FAQ Schema Generation", "Technical SEO Explanations", "SEO Task Summaries for Developers"].map((t) => <button key={t} className="rounded-lg bg-accent px-3 py-2 text-sm text-white">{t}</button>)}
          </div>
        </SectionCard>

        <SectionCard title="Weekly SEO Report & Executive Snapshot">
          <p className="mb-3 text-sm text-slate-300">Automated weekly summary with KPI deltas, risk flags, and engineering requests.</p>
          <div className="space-y-2">
            {weekly.map((val, i) => <div key={i} className="flex items-center gap-2"><span className="w-12 text-xs text-slate-400">W{i + 1}</span><div className="h-2 flex-1 rounded bg-slate-700"><div className="h-2 rounded bg-accent" style={{ width: `${val}%` }} /></div><span className="text-xs">{val}</span></div>)}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Future Integrations">
        <p className="text-sm text-slate-300">Connector placeholders ready for Google Search Console, Google Analytics, Meta Ads reporting, and YouTube analytics ingestion pipelines.</p>
      </SectionCard>
    </main>
  );
}
