import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-[#f8f9fa]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-[#555] md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Juan Ruiz Alonso</p>
        <div className="flex gap-6">
          <a href="https://github.com/JRA-CodingLab" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a]">GitHub</a>
          <a href="https://substack.com/@therecapjra" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a]">Substack</a>
          <a href="https://www.youtube.com/channel/UCC5vH3f7pwde_Pzkg47D0gg" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a1a]">YouTube</a>
          <Link href="/contact" className="hover:text-[#1a1a1a]">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
