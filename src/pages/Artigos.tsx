import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { artigos } from "@/data/artigos.js";

const Artigos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Artigos</h1>
              <p className="text-xl text-foreground-secondary">
                Compartilhando conhecimento e experiências em desenvolvimento.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {artigos.map((artigo) => {
                // Formatar data para formato brasileiro
                const dataFormatada = new Date(artigo.data).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                });
                
                return (
                  <ArticleCard
                    key={artigo.slug}
                    title={artigo.titulo}
                    excerpt={artigo.resumo}
                    date={dataFormatada}
                    readTime={artigo.tempoLeitura}
                    href={`/artigos/${artigo.slug}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Artigos;