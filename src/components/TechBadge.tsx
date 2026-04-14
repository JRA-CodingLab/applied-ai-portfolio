export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block border border-[#e5e7eb] bg-[#f8f9fa] px-2.5 py-1 text-xs font-medium text-[#555]">
      {label}
    </span>
  );
}
