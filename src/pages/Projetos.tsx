import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProjectCard } from "@/components/ProjectCard"
import { projetos } from "@/data/projetos.js"
const criptoAnalyzerImage = "/lovable-uploads/86409574-cdb8-4cc7-87e6-164d468a90f9.png"
const eltezKImage = "/lovable-uploads/975a8df5-fdf3-404c-b994-0c64fa40552f.png"
const contentBotImage = "/lovable-uploads/bfb553ae-f0f1-40b5-ad13-49027a69eb11.png"
const assistenteVirtualImage = "/lovable-uploads/ddf5d33b-3dc7-4e28-a5fd-0058691e1797.png"

const Projetos = () => {
  const images = [contentBotImage, assistenteVirtualImage, criptoAnalyzerImage, eltezKImage];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meus Projetos</h1>
              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                Uma coleção dos meus trabalhos e estudos de caso detalhados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetos.map((projeto, index) => (
                <ProjectCard
                  key={projeto.slug}
                  title={projeto.titulo}
                  description={projeto.descricao}
                  image={images[index] || criptoAnalyzerImage}
                  tags={projeto.tecnologias}
                  href={`/projetos/${projeto.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projetos