export const metadata = {
  title: "Contact \u2014 Juan Ruiz Alonso",
  description: "Get in touch for AI engineering projects, consulting, or collaboration.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#1a56db]">Contact</p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Get in Touch</h1>
      <p className="mb-10 max-w-xl text-sm leading-relaxed text-[#555]">Available for AI engineering projects, consulting on ML system design, and full-time opportunities. Based in Hamburg, Germany.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <a href="mailto:juanruizalonso1944@gmail.com" className="group block border border-[#e5e7eb] p-6 transition-all hover:border-[#1a56db]">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[#999]">Email</div>
          <div className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#1a56db]">juanruizalonso1944@gmail.com</div>
        </a>
        <a href="tel:+4915292613731" className="group block border border-[#e5e7eb] p-6 transition-all hover:border-[#1a56db]">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[#999]">Phone</div>
          <div className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#1a56db]">+49 1529 2613731</div>
        </a>
        <a href="https://github.com/JRA-CodingLab" target="_blank" rel="noopener noreferrer" className="group block border border-[#e5e7eb] p-6 transition-all hover:border-[#1a56db]">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[#999]">GitHub</div>
          <div className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#1a56db]">github.com/JRA-CodingLab</div>
        </a>
        <div className="border border-[#e5e7eb] p-6">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-[#999]">Location</div>
          <div className="text-sm font-medium text-[#1a1a1a]">Hamburg, Germany</div>
        </div>
      </div>
      <section className="mt-16 border-t border-[#e5e7eb] pt-12">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">AI Engineering Services</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">LLM Application Development</h3><p className="text-xs leading-relaxed text-[#555]">Custom RAG systems, chatbots, content generation pipelines, and LLM integration.</p></div>
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">ML Model Deployment</h3><p className="text-xs leading-relaxed text-[#555]">FastAPI APIs, Docker containerization, CI/CD setup, and monitoring.</p></div>
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">Data Pipeline Engineering</h3><p className="text-xs leading-relaxed text-[#555]">ETL/ELT pipelines, feature engineering, and real-time data processing.</p></div>
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">AI System Architecture</h3><p className="text-xs leading-relaxed text-[#555]">End-to-end system design for ML workflows, from ingestion to serving.</p></div>
        </div>
      </section>
    </div>
  );
}
