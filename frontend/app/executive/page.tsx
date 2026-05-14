import SectionCard from "../components/SectionCard";

export default function ExecutivePage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">Executive Overview</h1>
      <section className="grid gap-4 md:grid-cols-3">
        <SectionCard title="Operational Health Score">91.4</SectionCard>
        <SectionCard title="Campaign Performance">+18.2%</SectionCard>
        <SectionCard title="Lead Conversion">24.8%</SectionCard>
        <SectionCard title="Engineering Velocity">32 tasks/sprint</SectionCard>
        <SectionCard title="SEO Visibility Trend">+12.6%</SectionCard>
        <SectionCard title="Staff Workload">74% utilized</SectionCard>
      </section>
    </main>
  );
}
