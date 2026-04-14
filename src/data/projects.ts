export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-review-insights",
    title: "E-commerce Review Insights",
    description: "NLP pipeline that transforms raw customer reviews into actionable business insights. Hybrid sentiment analysis (star rating + VADER), LDA topic modelling, and zero-shot negative review categorization with Streamlit dashboard.",
    techStack: ["Python", "NLTK", "VADER", "scikit-learn", "Hugging Face Transformers", "PyTorch", "pandas"],
    githubUrl: "https://github.com/JRA-CodingLab/ecommerce-review-insights",
    category: "NLP",
  },
  {
    id: "financial-doc-chatbot",
    title: "Financial Doc Chatbot",
    description: "RAG chatbot for financial document question-answering. PDF ingestion, ChromaDB vector search, multi-turn conversation memory, and source citations. Built with FastAPI backend and Streamlit chat UI.",
    techStack: ["Python", "FastAPI", "LangChain", "ChromaDB", "OpenAI", "Streamlit", "PyPDF"],
    githubUrl: "https://github.com/JRA-CodingLab/financial-doc-chatbot",
    category: "RAG",
  },
  {
    id: "ticket-triage-system",
    title: "Ticket Triage System",
    description: "ML-powered customer support ticket classification with urgency detection, priority assignment, and department routing. Dual TF-IDF features (word + character n-grams), SVM classifier, Flask web UI and REST API.",
    techStack: ["Python", "scikit-learn", "Flask", "TF-IDF", "SVM"],
    githubUrl: "https://github.com/JRA-CodingLab/ticket-triage-system",
    category: "ML Classification",
  },
  {
    id: "inventory-forecast-dashboard",
    title: "Inventory Forecast Dashboard",
    description: "Full-stack inventory management dashboard with FastAPI backend, SQLAlchemy ORM, React/Vite/Tailwind frontend. CRUD product catalog, sales tracking, dark/light theme. Architecture prepared for ML demand forecasting.",
    techStack: ["Python", "FastAPI", "SQLAlchemy", "React", "Vite", "Tailwind CSS", "SQLite"],
    githubUrl: "https://github.com/JRA-CodingLab/inventory-forecast-dashboard",
    category: "Full-Stack",
  },
];
