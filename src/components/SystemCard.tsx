import Link from "next/link";
import type { AISystem } from "@/data/systems";

export default function SystemCard({ system }: { system: AISystem }) {
  return (
    <Link href={`/systems/${system.id}`} className="group block border border-[#e5e7eb] bg-white p-6 transition-all hover:border-[#1a56db] hover:shadow-sm">
      <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[#1a56db]">Deployed System</div>
      <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a] group-hover:text-[#1a56db]">{system.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-[#555]">{system.tagline}</p>
      <div className="flex flex-wrap gap-1.5">
        {system.techStack.slice(0, 5).map((t) => (<span key={t} className="bg-[#f3f4f6] px-2 py-0.5 text-xs font-medium text-[#555]">{t}</span>))}
        {system.techStack.length > 5 && <span className="px-2 py-0.5 text-xs text-[#999]">+{system.techStack.length - 5}</span>}
      </div>
    </Link>
  );
}
