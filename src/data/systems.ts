export interface AISystem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  architecture: string[];
  techStack: string[];
  endpoints: { method: string; path: string; description: string }[];
  tradeoffs: string[];
  githubUrl: string;
  liveUrl: string;
  swaggerUrl: string;
  deploymentStack: string;
  featured: boolean;
}

export const systems: AISystem[] = [
  {
    id: "fraud-risk-analyzer",
    title: "Fraud Risk Analyzer",
    tagline: "Real-time ML fraud detection & risk scoring API",
    description: "End-to-end machine-learning pipeline for detecting fraudulent financial transactions. From raw CSV to trained model, cost-optimised threshold, SHAP explanations and an interactive analyst dashboard.",
    problem: "Financial institutions process millions of transactions daily. Manual review is impractical \u2014 a system must classify transactions in real-time, minimizing false positives (customer friction) while maximizing fraud capture (loss prevention).",
    architecture: [
      "Data Preparation \u2192 Stratified train/test split preserving class ratios",
      "Feature Pipeline \u2192 sklearn ColumnTransformer + RandomForest in a single serialisable pipeline",
      "Cost-Weighted Threshold \u2192 Grid search over 0.05\u20130.95 minimising FN\u00d710 + FP\u00d71",
      "Explainability \u2192 SHAP global feature-importance + per-transaction bar charts",
      "Serving \u2192 FastAPI REST API with /predict, /predict/batch, /explain endpoints",
      "Dashboard \u2192 Streamlit app for threshold tuning, risk distribution, drill-down",
    ],
    techStack: ["Python", "scikit-learn", "SHAP", "FastAPI", "Streamlit", "Docker", "pandas", "NumPy", "matplotlib"],
    endpoints: [
      { method: "POST", path: "/predict", description: "Score a single transaction" },
      { method: "POST", path: "/predict/batch", description: "Batch score transactions" },
      { method: "POST", path: "/explain", description: "SHAP explanation for a transaction" },
      { method: "GET", path: "/health", description: "Health check" },
    ],
    tradeoffs: [
      "Speed vs. accuracy: Real-time constraints prioritize low-latency inference over ensemble complexity",
      "Cost-sensitive threshold: Custom loss function weighs false negatives 10\u00d7 higher than false positives",
      "Explainability overhead: SHAP adds ~200ms per explanation but is critical for compliance",
      "Model drift: Batch retraining strategy balances freshness against compute cost",
    ],
    githubUrl: "https://github.com/JRA-CodingLab/fraud-risk-analyzer",
    liveUrl: "https://fraud-risk-analyzer-api.onrender.com",
    swaggerUrl: "https://fraud-risk-analyzer-api.onrender.com/docs",
    deploymentStack: "Docker + Render (free tier) + GitHub CI/CD auto-deploy",
    featured: true,
  },
  {
    id: "document-qa-system",
    title: "Document QA System",
    tagline: "RAG pipeline for document question-answering with source citations",
    description: "A Retrieval-Augmented Generation system for document question-answering. Upload PDFs, Markdown, or text files, then ask natural-language questions and receive grounded answers with source citations.",
    problem: "Organizations hold critical knowledge in unstructured documents \u2014 PDFs, reports, manuals. Extracting specific answers requires reading entire documents. A RAG system enables natural-language queries with cited, grounded responses.",
    architecture: [
      "Ingestion \u2192 Document loaders + text chunking with overlapping windows",
      "Embedding \u2192 OpenAI / HuggingFace embedding models",
      "Vector Store \u2192 ChromaDB for semantic similarity search",
      "Retrieval \u2192 TF-IDF + embedding-based hybrid search",
      "Generation \u2192 LLM answer synthesis with source citations via LangChain",
      "Evaluation \u2192 MLflow-tracked metrics (faithfulness, relevancy, recall)",
      "Serving \u2192 FastAPI REST API + Streamlit web UI",
    ],
    techStack: ["Python", "LangChain", "ChromaDB", "FastAPI", "Streamlit", "MLflow", "OpenAI", "Docker"],
    endpoints: [
      { method: "POST", path: "/api/v1/ingest", description: "Upload and index documents" },
      { method: "POST", path: "/api/v1/query", description: "Ask a question" },
      { method: "GET", path: "/api/v1/models", description: "List available LLM providers" },
      { method: "GET", path: "/api/v1/documents/count", description: "Count indexed documents" },
      { method: "DELETE", path: "/api/v1/documents", description: "Clear all documents" },
    ],
    tradeoffs: [
      "Chunk size: Smaller chunks increase precision but lose context; larger chunks preserve context but dilute relevance",
      "Embedding model: OpenAI (higher quality, hosted cost) vs. open-source (lower latency, self-hosted)",
      "Retrieval strategy: Hybrid (semantic + keyword) outperforms pure semantic but adds complexity",
      "Evaluation: MLflow tracking adds overhead but enables systematic quality measurement",
    ],
    githubUrl: "https://github.com/JRA-CodingLab/document-qa-system",
    liveUrl: "https://document-qa-system.onrender.com",
    swaggerUrl: "https://document-qa-system.onrender.com/docs",
    deploymentStack: "Docker + Render (free tier) + GitHub CI/CD auto-deploy",
    featured: true,
  },
  {
    id: "hybrid-recommender-engine",
    title: "Hybrid Recommender Engine",
    tagline: "ALS collaborative filtering + association rules recommendation API",
    description: "A production-ready hybrid product recommendation engine that blends ALS collaborative filtering, association-rule mining, and popularity/recency signals behind a FastAPI REST API with an interactive dashboard.",
    problem: "Recommendation systems must balance personalization depth with cold-start resilience. Pure collaborative filtering fails for new users; content-based alone misses behavioral patterns. A hybrid approach blends multiple signals for robust recommendations.",
    architecture: [
      "Collaborative Filtering \u2192 ALS via implicit library for latent factor decomposition",
      "Association Rules \u2192 Apriori algorithm with lift/confidence scoring via mlxtend",
      "Hybrid Blending \u2192 Configurable weight mix (collaborative 50% + association 30% + popularity 20%)",
      "Serving \u2192 FastAPI REST API with /recommend, /similar-items, /frequently-bought-together",
      "Caching \u2192 Redis for frequently requested recommendations",
      "Dashboard \u2192 Interactive HTML single-page frontend",
    ],
    techStack: ["Python", "FastAPI", "NumPy", "SciPy", "implicit", "mlxtend", "Docker", "Redis"],
    endpoints: [
      { method: "POST", path: "/recommend", description: "Get personalised recommendations" },
      { method: "POST", path: "/similar-items", description: "Find similar items" },
      { method: "POST", path: "/frequently-bought-together", description: "Complementary products" },
      { method: "GET", path: "/metrics", description: "System & model metrics" },
      { method: "GET", path: "/dashboard", description: "Interactive HTML dashboard" },
    ],
    tradeoffs: [
      "ALS dimensionality: Higher latent factors improve accuracy but increase training time and memory",
      "Cold-start strategy: Popularity fallback for new users, association rules for new items",
      "Cache freshness: Redis caching reduces latency but stale recommendations need TTL management",
      "Retraining frequency: Daily retraining balances model freshness against compute budget",
    ],
    githubUrl: "https://github.com/JRA-CodingLab/hybrid-recommender-engine",
    liveUrl: "https://hybrid-recommender-engine.onrender.com",
    swaggerUrl: "https://hybrid-recommender-engine.onrender.com/docs",
    deploymentStack: "Docker + Render (free tier) + GitHub CI/CD auto-deploy",
    featured: true,
  },
  {
    id: "news-digest-engine",
    title: "News Digest Engine",
    tagline: "LLM-powered news aggregation, summarization & quality auditing",
    description: "AI-powered daily news aggregation, summarization, and briefing system with built-in LLM usage monitoring, budget tracking, and quality certification.",
    problem: "Information overload makes staying current impossible. Manually reading dozens of sources wastes hours. An automated pipeline that fetches, deduplicates, summarizes, and ranks news \u2014 with cost controls and quality auditing \u2014 solves this at scale.",
    architecture: [
      "Ingestion \u2192 Multi-source RSS fetching from 8 configurable news sources via feedparser",
      "Summarization \u2192 Concise AI summaries via OpenAI GPT-4o-mini",
      "Ranking \u2192 Articles scored by relevance and importance",
      "Budget Monitoring \u2192 Track LLM API costs with configurable limits",
      "Quality Auditing \u2192 Confidence thresholds and certification reports",
      "Serving \u2192 FastAPI REST API + web dashboard with sentiment indicators",
    ],
    techStack: ["Python", "FastAPI", "feedparser", "OpenAI", "Rich CLI", "Streamlit", "Docker"],
    endpoints: [
      { method: "GET", path: "/digest", description: "Today\u2019s top articles" },
      { method: "GET", path: "/articles", description: "Paginated list with filters" },
      { method: "GET", path: "/articles/{id}", description: "Single article detail" },
      { method: "POST", path: "/ingest", description: "Trigger RSS ingestion" },
      { method: "GET", path: "/metrics", description: "Pipeline stats + sentiment distribution" },
      { method: "GET", path: "/dashboard", description: "Visual news dashboard" },
    ],
    tradeoffs: [
      "LLM cost vs. quality: GPT-4o-mini balances summarization quality against per-article cost",
      "Batch vs. real-time: Scheduled ingestion reduces API calls but introduces latency",
      "Budget controls: Hard limits prevent cost overruns but may skip articles during high-volume days",
      "Quality auditing: LLM-based verification adds cost but catches hallucinated summaries",
    ],
    githubUrl: "https://github.com/JRA-CodingLab/news-digest-engine",
    liveUrl: "https://news-digest-engine.onrender.com",
    swaggerUrl: "https://news-digest-engine.onrender.com/docs",
    deploymentStack: "Docker + Render (free tier) + GitHub CI/CD auto-deploy",
    featured: true,
  },
];
