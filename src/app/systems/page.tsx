import { systems } from "@/data/systems";
import SystemCard from "@/components/SystemCard";

export const metadata = {
  title: "Deployed AI Systems \u2014 Juan Ruiz Alonso",
  description: "Four production AI systems with live REST APIs, Docker deployments, and CI/CD pipelines.",
};

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#1a56db]">Core Work</p>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Deployed AI Systems</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#555]">Each system is deployed on Render with Docker, CI/CD via GitHub Actions, and a publicly accessible REST API. Click a system to explore its architecture, endpoints, and design tradeoffs.</p>
      <div className="grid gap-4 md:grid-cols-2">{systems.map((s) => (<SystemCard key={s.id} system={s} />))}</div>
    </div>
  );
}
