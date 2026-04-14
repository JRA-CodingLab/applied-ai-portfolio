import { certifications, skills } from "@/data/certifications";

export const metadata = {
  title: "About \u2014 Juan Ruiz Alonso",
  description: "Applied AI Engineer based in Hamburg, Germany. Background, skills, education, and certifications.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#1a56db]">About</p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Juan Ruiz Alonso</h1>
      <section className="mb-12">
        <p className="mb-4 text-sm leading-relaxed text-[#555]">Applied AI Engineer based in Hamburg, Germany. I design and deploy production ML systems, RAG pipelines, and backend AI architecture \u2014 from data ingestion to live REST APIs with Docker and CI/CD.</p>
        <p className="mb-4 text-sm leading-relaxed text-[#555]">Currently working as a Werkstudent in Data Automation &amp; Claims Analytics at Aon, building Excel VBA automations for large claims datasets (&gt;1,000 entries), system export processing, and monitoring reports.</p>
        <p className="text-sm leading-relaxed text-[#555]">Studying International Business &amp; Management at SRH University Hamburg, with parallel degrees in Financial Management and FinTech at IU International University.</p>
      </section>
      <section className="mb-12">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Technical Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#999]">{category.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}</h3>
              <div className="flex flex-wrap gap-1.5">{items.map((item) => (<span key={item} className="border border-[#e5e7eb] bg-[#f8f9fa] px-2 py-0.5 text-xs font-medium text-[#555]">{item}</span>))}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Education</h2>
        <div className="space-y-4">
          {[{degree:"B.A. International Business & Management",school:"SRH University, Hamburg",period:"2024 \u2013 2027"},{degree:"B.A. Financial Management",school:"IU International University (Remote)",period:"2024 \u2013 2026"},{degree:"B.Sc. FinTech",school:"IU International University (Remote)",period:"2024 \u2013 2026"},{degree:"B.Sc. Chemical & Bioengineering",school:"Technical University Hamburg (TUHH)",period:"2023 \u2013 2024"},{degree:"T-Kurs (University Preparation)",school:"Studienkolleg, University of Paderborn",period:"2022 \u2013 2023"}].map((edu) => (
            <div key={edu.degree} className="flex flex-col border-l-2 border-[#e5e7eb] pl-4 md:flex-row md:items-baseline md:gap-4">
              <div className="shrink-0 text-xs text-[#999] md:w-24">{edu.period}</div>
              <div><div className="text-sm font-medium text-[#1a1a1a]">{edu.degree}</div><div className="text-xs text-[#555]">{edu.school}</div></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Languages</h2>
        <div className="grid grid-cols-3 gap-4">
          {[{lang:"Spanish",level:"Native"},{lang:"English",level:"C1"},{lang:"German",level:"C1 / B2 writing"}].map((l) => (<div key={l.lang} className="text-center"><div className="text-sm font-medium text-[#1a1a1a]">{l.lang}</div><div className="text-xs text-[#555]">{l.level}</div></div>))}
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Certifications ({certifications.length})</h2>
        <div className="grid gap-2 md:grid-cols-2">
          {certifications.map((c) => (<div key={c.title} className="flex items-baseline justify-between border-b border-[#f3f4f6] py-2"><span className="text-sm text-[#555]">{c.title}</span><span className="shrink-0 text-xs text-[#999]">{c.issuer}</span></div>))}
        </div>
      </section>
    </div>
  );
}
