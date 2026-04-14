import Link from "next/link";
import { systems } from "@/data/systems";
import SystemCard from "@/components/SystemCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="pb-16 pt-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#1a56db]">Applied AI Engineer</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1a1a1a] md:text-5xl">Juan Ruiz Alonso</h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#555]">I build production ML systems, RAG pipelines, and backend AI architecture. Four deployed systems with live APIs, eight open-source projects, and fourteen AI/ML certifications.</p>
        <div className="flex gap-4">
          <Link href="/systems" className="bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#333]">View Systems</Link>
          <a href="https://github.com/JRA-CodingLab" target="_blank" rel="noopener noreferrer" className="border border-[#e5e7eb] px-5 py-2.5 text-sm font-medium text-[#1a1a1a] transition-colors hover:border-[#555]">GitHub</a>
        </div>
      </section>
      <section className="border-t border-[#e5e7eb] py-16">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999]">Core Work</div>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">Deployed AI Systems</h2>
        <p className="mb-8 text-sm text-[#555]">Production systems with live REST APIs, Docker deployments, and CI/CD pipelines.</p>
        <div className="grid gap-4 md:grid-cols-2">{systems.map((s) => (<SystemCard key={s.id} system={s} />))}</div>
      </section>
      <section className="border-t border-[#e5e7eb] py-16">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999]">Applied AI & Automation</div>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">Additional AI Projects</h2>
        <p className="mb-6 text-sm text-[#555]">Beyond open-source repositories, I work on practical AI and automation systems across business, finance, and content workflows.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">Newsletter & Publishing Automation</h3><p className="text-xs leading-relaxed text-[#555]">Automated creation and distribution of newsletters, article publishing pipelines, and content delivery systems using AI-driven generation and scheduling.</p></div>
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">Trading Bots & Financial Automation</h3><p className="text-xs leading-relaxed text-[#555]">Development of algorithmic trading bots and financial automation tools for market analysis and execution.</p></div>
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">Archiving & Compliance Automation</h3><p className="text-xs leading-relaxed text-[#555]">Automation and partial automation of archiving and compliance processes for enterprise data management workflows.</p></div>
          <div className="border border-[#e5e7eb] p-5"><h3 className="mb-2 text-sm font-semibold text-[#1a1a1a]">AI-Driven Business Analysis & Book Publishing</h3><p className="text-xs leading-relaxed text-[#555]">AI-powered business analysis tools and end-to-end conceptualization, creation, and publication of AI-generated books.</p></div>
        </div>
      </section>
      <section className="border-t border-[#e5e7eb] py-16">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999]">Engineering Capabilities</div>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">Systems & Architecture</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">ML Pipelines</h3>
            <ul className="space-y-1.5 text-sm text-[#555]"><li>Fraud detection (RandomForest, SHAP)</li><li>NLP classification (SVM, TF-IDF)</li><li>Recommendation engines (ALS, Apriori)</li><li>Sentiment analysis (VADER, zero-shot)</li></ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">LLM Systems</h3>
            <ul className="space-y-1.5 text-sm text-[#555]"><li>RAG pipelines (LangChain, ChromaDB)</li><li>Document QA with source citations</li><li>LLM summarization with budget controls</li><li>Quality auditing & certification</li></ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a]">Backend & MLOps</h3>
            <ul className="space-y-1.5 text-sm text-[#555]"><li>FastAPI & Flask REST APIs</li><li>Docker containerization</li><li>GitHub Actions CI/CD</li><li>MLflow experiment tracking</li></ul>
          </div>
        </div>
      </section>
      <section className="border-t border-[#e5e7eb] py-16">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#999]">Technical Writing</div>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">Writing & Research</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a href="https://substack.com/@therecapjra" target="_blank" rel="noopener noreferrer" className="group block border border-[#e5e7eb] p-6 transition-all hover:border-[#555]">
            <h3 className="mb-2 text-base font-semibold group-hover:text-[#1a56db]">Substack</h3>
            <p className="text-sm text-[#555]">Regular updates and analysis on AI developments with a strong focus on their impact on business, finance, and economics.</p>
          </a>
          <a href="https://www.youtube.com/channel/UCC5vH3f7pwde_Pzkg47D0gg" target="_blank" rel="noopener noreferrer" className="group block border border-[#e5e7eb] p-6 transition-all hover:border-[#555]">
            <h3 className="mb-2 text-base font-semibold group-hover:text-[#1a56db]">YouTube</h3>
            <p className="text-sm text-[#555]">AI-generated podcast-style discussions based on books exploring topics in AI, business, finance, and economics.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
