import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Juan Ruiz Alonso \u2014 Applied AI Engineer",
  description: "Production ML systems, RAG pipelines, LLM applications, and backend AI architecture. Portfolio of deployed AI systems with live APIs.",
  keywords: ["Applied AI Engineer", "Machine Learning", "RAG", "LLM", "FastAPI", "Python", "AI Systems"],
  authors: [{ name: "Juan Ruiz Alonso" }],
  openGraph: {
    title: "Juan Ruiz Alonso \u2014 Applied AI Engineer",
    description: "Production ML systems, RAG pipelines, LLM applications, and backend AI architecture.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-[#1a1a1a]">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
