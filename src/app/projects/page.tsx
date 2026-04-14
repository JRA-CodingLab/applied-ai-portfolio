import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects \u2014 Juan Ruiz Alonso",
  description: "Open-source AI/ML projects covering NLP, RAG, classification, and full-stack systems.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999]">Open Source</p>
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Supporting Projects</h1>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-[#555]">Additional AI/ML systems demonstrating breadth across NLP, RAG, classification, and full-stack development. All open-source on GitHub.</p>
      <div className="grid gap-4 md:grid-cols-2">{projects.map((p) => (<ProjectCard key={p.id} project={p} />))}</div>
    </div>
  );
}
