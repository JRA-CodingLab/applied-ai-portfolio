import { systems } from "@/data/systems";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return systems.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const system = systems.find((s) => s.id === id);
  if (!system) return {};
  return { title: `${system.title} \u2014 Juan Ruiz Alonso`, description: system.tagline };
}

export default async function SystemDetail({ params }: Props) {
  const { id } = await params;
  const system = systems.find((s) => s.id === id);
  if (!system) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/systems" className="mb-8 inline-block text-sm text-[#555] transition-colors hover:text-[#1a1a1a]">\u2190 All Systems</Link>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#1a56db]">Deployed System</p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight">{system.title}</h1>
      <p className="mb-8 text-lg leading-relaxed text-[#555]">{system.tagline}</p>
      <div className="mb-10 flex flex-wrap gap-3">
        <a href={system.swaggerUrl} target="_blank" rel="noopener noreferrer" className="bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white hover:bg-[#333]">Live API \u2197</a>
        <a href={system.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-[#e5e7eb] px-4 py-2 text-sm font-medium text-[#1a1a1a] hover:border-[#555]">Source Code \u2197</a>
      </div>
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Problem</h2>
        <p className="text-sm leading-relaxed text-[#555]">{system.problem}</p>
      </section>
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Architecture</h2>
        <div className="space-y-2">{system.architecture.map((step, i) => (<div key={i} className="flex gap-3 text-sm"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#f3f4f6] text-xs font-medium text-[#555]">{i + 1}</span><p className="leading-relaxed text-[#555]">{step}</p></div>))}</div>
      </section>
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">API Endpoints</h2>
        <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b border-[#e5e7eb] text-left"><th className="pb-2 pr-4 font-medium text-[#1a1a1a]">Method</th><th className="pb-2 pr-4 font-medium text-[#1a1a1a]">Path</th><th className="pb-2 font-medium text-[#1a1a1a]">Description</th></tr></thead><tbody>{system.endpoints.map((ep, i) => (<tr key={i} className="border-b border-[#f3f4f6]"><td className="py-2 pr-4"><code className="bg-[#f3f4f6] px-1.5 py-0.5 text-xs font-medium">{ep.method}</code></td><td className="py-2 pr-4 font-mono text-xs text-[#555]">{ep.path}</td><td className="py-2 text-[#555]">{ep.description}</td></tr>))}</tbody></table></div>
      </section>
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">{system.techStack.map((t) => (<span key={t} className="border border-[#e5e7eb] bg-[#f8f9fa] px-2.5 py-1 text-xs font-medium text-[#555]">{t}</span>))}</div>
      </section>
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Design Tradeoffs</h2>
        <ul className="space-y-2">{system.tradeoffs.map((t, i) => (<li key={i} className="flex gap-3 text-sm leading-relaxed text-[#555]"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ccc]" />{t}</li>))}</ul>
      </section>
      <section className="border-t border-[#e5e7eb] pt-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Deployment</h2>
        <p className="text-sm text-[#555]">{system.deploymentStack}</p>
      </section>
    </div>
  );
}
