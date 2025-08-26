import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { artigos } from "@/data/artigos.js";
import ReactMarkdown from "react-markdown";

const ArtigoSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Buscar o artigo pelo slug
  const artigo = artigos.find(item => item.slug === slug);
  
  // Se o artigo não for encontrado, redireciona para 404
  if (!artigo) {
    return <Navigate to="/404" replace />;
  }
  
  // Formatar data para formato brasileiro
  const dataFormatada = new Date(artigo.data).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <article className="section-padding">
          <div className="max-w-3xl mx-auto">
            {/* Header do Artigo */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {artigo.titulo}
              </h1>
              
              {/* Metadados */}
              <div className="flex items-center justify-center gap-6 text-foreground-secondary">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{dataFormatada}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{artigo.tempoLeitura} de leitura</span>
                </div>
              </div>
            </header>
            
            {/* Conteúdo do Artigo */}
            <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto mb-12">
              <ReactMarkdown>{artigo.descricao}</ReactMarkdown>
            </article>
            
            {/* CTA Section */}
            <Separator className="mb-8" />
            
            <div className="text-center bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Gostou deste insight?
              </h3>
              <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                Vamos conversar sobre seus desafios de automação e como podemos 
                transformar seus processos em vantagem competitiva.
              </p>
              <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                <a href="/contato">
                  Vamos conversar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtigoSlug;