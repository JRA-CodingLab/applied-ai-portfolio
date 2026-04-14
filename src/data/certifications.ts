export interface Certification {
  title: string;
  issuer: string;
  category: string;
}

export const certifications: Certification[] = [
  { title: "AI Fundamentals", issuer: "IBM", category: "AI" },
  { title: "Generative AI Fundamentals", issuer: "IBM", category: "GenAI" },
  { title: "Applied Generative AI", issuer: "IBM", category: "GenAI" },
  { title: "AI for Business", issuer: "IBM", category: "AI" },
  { title: "Prompt Engineering for Generative AI", issuer: "IBM", category: "GenAI" },
  { title: "Generative AI for Software Developers", issuer: "Microsoft", category: "GenAI" },
  { title: "GitHub Copilot", issuer: "GitHub", category: "AI Tools" },
  { title: "Weaviate Vector Database", issuer: "Weaviate", category: "Vector DB" },
  { title: "Machine Learning: Statistical Foundations", issuer: "Wolfram", category: "ML" },
  { title: "Machine Learning with Python", issuer: "Anaconda", category: "ML" },
  { title: "Small Language Model Training", issuer: "Google DeepMind", category: "ML" },
  { title: "Building AI Applications with LangChain", issuer: "IBM", category: "LLM" },
  { title: "AI Agent Development", issuer: "IBM", category: "AI Agents" },
  { title: "Responsible AI Practices", issuer: "IBM", category: "AI Ethics" },
];

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Excel VBA"],
  mlAndAI: ["scikit-learn", "SHAP", "LangChain", "ChromaDB", "OpenAI API", "Hugging Face", "PyTorch", "NLTK", "MLflow"],
  backend: ["FastAPI", "Flask", "REST APIs", "SQLAlchemy", "Redis"],
  frontend: ["React", "Vite", "Tailwind CSS", "Streamlit"],
  infrastructure: ["Docker", "GitHub Actions", "CI/CD", "Render", "Git"],
  data: ["pandas", "NumPy", "SciPy", "matplotlib", "seaborn"],
};
