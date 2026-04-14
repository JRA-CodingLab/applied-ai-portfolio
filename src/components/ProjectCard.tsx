import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group block border border-[#e5e7eb] bg-white p-6 transition-all hover:border-[#555] hover:shadow-sm">
      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[#999]">{project.category}</div>
      <h3 className="mb-2 text-base font-semibold text-[#1a1a1a] group-hover:text-[#1a56db]">{project.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-[#555]">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((t) => (<span key={t} className="bg-[#f3f4f6] px-2 py-0.5 text-xs font-medium text-[#555]">{t}</span>))}
      </div>
    </a>
  );
}
