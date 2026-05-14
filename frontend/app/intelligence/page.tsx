import SectionCard from "../components/SectionCard";

export default function IntelligencePage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">Operational Intelligence Center</h1>
      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="Real-time Activity Engine">
          <ul className="text-sm text-slate-300 space-y-1"><li>Tasks, SEO changes, leads, content publishing, AI actions, engineering updates all emit timeline events.</li><li>Centralized timeline feed with actor + entity + timestamp.</li></ul>
        </SectionCard>
        <SectionCard title="Notification System">
          <ul className="text-sm text-slate-300 space-y-1"><li>Overdue task alerts</li><li>Lead follow-up reminders</li><li>SEO issue alerts</li><li>Engineering request updates</li><li>Weekly summary notifications</li></ul>
        </SectionCard>
        <SectionCard title="Content-to-Lead Attribution">
          <ul className="text-sm text-slate-300 space-y-1"><li>Post-to-inquiry tracking</li><li>Campaign conversion mapping</li><li>WhatsApp originated lead flags</li><li>Instagram/Facebook conversion paths</li><li>YouTube traffic attribution</li></ul>
        </SectionCard>
        <SectionCard title="WhatsApp CRM Intake">
          <ul className="text-sm text-slate-300 space-y-1"><li>Inquiry capture architecture</li><li>Lead tagging + consultation intake</li><li>Automated follow-up preparation state</li></ul>
        </SectionCard>
        <SectionCard title="SEO Automation + AI Executive Reporting">
          <ul className="text-sm text-slate-300 space-y-1"><li>Metadata audits, internal links, duplicate metadata, schema validation, broken links, optimization scoring.</li><li>Weekly operational/SEO/marketing summaries with bottleneck and conversion analysis.</li></ul>
        </SectionCard>
        <SectionCard title="Analytics Layer + Integration Readiness">
          <ul className="text-sm text-slate-300 space-y-1"><li>Trend visualizations, KPI comparisons, campaign charts, velocity metrics.</li><li>Prepared modular connectors: Meta API, WhatsApp Business API, YouTube API, GSC, GA.</li></ul>
        </SectionCard>
      </div>
    </main>
  );
}
