import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Workflow, BrainCircuit, TrendingUp, CodeSquare, Server, CloudCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleCard } from "@/components/ArticleCard";
import { artigos } from "@/data/artigos.js";
import { projetos } from "@/data/projetos.js";
const profilePhoto = "/lovable-uploads/d35930f5-13f5-4504-b083-1d5b353b2040.png";
const criptoAnalyzerImage = "/lovable-uploads/86409574-cdb8-4cc7-87e6-164d468a90f9.png";
const eltezKImage = "/lovable-uploads/975a8df5-fdf3-404c-b994-0c64fa40552f.png";
const contentBotImage = "/lovable-uploads/bfb553ae-f0f1-40b5-ad13-49027a69eb11.png";
const assistenteVirtualImage = "/lovable-uploads/ddf5d33b-3dc7-4e28-a5fd-0058691e1797.png";
const Index = () => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollToSlide = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }, [api])

  return <TooltipProvider>
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding min-h-screen flex items-center">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Especialista em
              <span className="text-primary block">IA e Automação</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Desenvolvendo sistemas autônomos que reduzem custos, aumentam a eficiência e liberam equipes para a inovação.</h2>
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]"
              onClick={() => {
                document.getElementById('projetos-destaque')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Veja meus projetos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos-destaque" className="bg-background-alt section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente, demonstrando diferentes tecnologias e abordagens.
            </p>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <Carousel 
              setApi={setApi}
              opts={{
                align: "start",
                loop: true
              }} 
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projetos.filter(projeto => projeto.emDestaque).map((projeto, index) => {
                  const images = [contentBotImage, assistenteVirtualImage, criptoAnalyzerImage, eltezKImage];
                  return <CarouselItem key={projeto.slug} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="h-full">
                          <ProjectCard title={projeto.titulo} description={projeto.descricao} image={images[index] || criptoAnalyzerImage} tags={projeto.tecnologias} href={`/projetos/${projeto.slug}`} />
                        </div>
                      </CarouselItem>;
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 h-12 w-12 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
              <CarouselNext className="hidden md:flex -right-4 lg:-right-6 h-12 w-12 border-2 border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
            </Carousel>
            
            {/* Indicadores de paginação */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {Array.from({ length: count }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === current 
                        ? "bg-primary scale-125 shadow-lg shadow-primary/30" 
                        : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="text-lg px-8 py-4 h-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]">
              <a href="/projetos">
                Ver todos os projetos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Artigos</h2>
            <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">Meus insights e guias práticos sobre IA, automação e estratégia de negócio.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(() => {
              // Ordenar artigos por data decrescente e pegar os 2 mais recentes
              const artigosRecentes = [...artigos].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()).slice(0, 2);
              return artigosRecentes.map(artigo => {
                // Formatar data para formato brasileiro
                const dataFormatada = new Date(artigo.data).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                });
                return <ArticleCard key={artigo.slug} title={artigo.titulo} excerpt={artigo.resumo} date={dataFormatada} readTime={artigo.tempoLeitura} href={`/artigos/${artigo.slug}`} />;
              });
            })()}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="text-lg px-8 py-4 h-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]">
              <a href="/artigos">
                Ver todos os artigos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background-alt section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src={profilePhoto} alt="João Silva" className="rounded-2xl shadow-hover w-full max-w-md mx-auto lg:mx-0" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Olá, eu sou Leonardo </h3>
              <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">Minha missão é ser a ponte entre a engenharia de software e a estratégia de negócio. Eu arquiteto sistemas de automação inteligentes que convertem complexidade operacional em performance e dados brutos em clareza estratégica, impulsionando a capacidade de inovação do seu negócio.</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-help">
                      <Workflow className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Automação de Processos</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Crio fluxos que otimizam operações e reduzem o trabalho manual.</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-help">
                      <BrainCircuit className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Inteligência Artificial</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Utilizo modelos de IA para criar soluções mais inteligentes e preditivas.</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="text-center cursor-help">
                      <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium">Impacto de Negócio</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Foco em gerar resultados que impulsionam o crescimento e a eficiência.</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/curriculo.pdf';
                    link.download = 'curriculo-leonardosouza.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  Baixar CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies and Skills Section */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Tecnologias e Competências</h2>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">O arsenal tecnológico que aplico para transformar desafios de negócio em soluções eficientes e automatizadas.</p>
          </div>
          
          {/* Main Skills Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Linguagens & Fundamentos */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 animate-fade-in relative overflow-hidden group" style={{
              animationDelay: '0ms'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <CodeSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Linguagens & Fundamentos</h3>
                </div>
                <div className="w-full space-y-6">
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Python</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Linguagem core para back-end e IA.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">JavaScript/TypeScript</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Desenvolvimento full-stack e integrações complexas.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">SQL</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Domínio de modelagem e otimização de consultas.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Git & GitHub</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Versionamento de código e fluxos de trabalho colaborativos (GitFlow).
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">HTML5 & CSS3</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Estruturação semântica e estilização moderna de interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Back-end & Frameworks */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 animate-fade-in relative overflow-hidden group" style={{
              animationDelay: '100ms'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Back-end & Frameworks</h3>
                </div>
                <div className="w-full space-y-6">
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">React & Next.js</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Construção de aplicações web interativas e de alta performance.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Node.js</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Back-ends escaláveis e APIs no ecossistema JavaScript.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">FastAPI & Flask</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Desenvolvimento de APIs Python de alta performance.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">REST APIs & GraphQL</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Arquitetura e consumo de APIs para integrações robustas.
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Pandas</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Manipulação e análise de dados de alto volume em Python.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Dados, Cloud & DevOps */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 animate-fade-in relative overflow-hidden group" style={{
              animationDelay: '200ms'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <CloudCog className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Dados, Cloud & DevOps</h3>
                </div>
                <div className="w-full space-y-6">
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">AWS</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Arquitetura de soluções com serviços (S3, EC2, Lambda).
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Docker</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Conteinerização de aplicações para portabilidade e escalabilidade.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">PostgreSQL & Supabase</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Bancos de dados relacionais e plataformas BaaS.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">CI/CD (GitHub Actions)</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Automação de pipelines de build, teste e deploy.
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Terraform (IaC)</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Gerenciamento de infraestrutura como código.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Automação & Inteligência Artificial */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10 animate-fade-in relative overflow-hidden group" style={{
              animationDelay: '300ms'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Inteligência Artificial & Automação  
                  </h3>
                </div>
                <div className="w-full space-y-6">
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">n8n</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Plataforma core para orquestração de workflows complexos.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">OpenAI & Gemini APIs</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Integração de modelos de IA Generativa em soluções de negócio.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">LangChain</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Desenvolvimento de aplicações complexas com LLMs.
                    </p>
                  </div>
                  <div className="border-b border-border/50 pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Vector Databases</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Implementação de RAG e memória semântica (Pinecone, ChromaDB).
                    </p>
                  </div>
                  <div className="pb-4">
                    <h4 className="text-foreground hover:text-primary transition-colors duration-200 font-medium mb-2 text-base">Web Scraping & APIs</h4>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      Extração de dados de fontes estruturadas e não estruturadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
              Estou ativamente buscando novas oportunidades para integrar equipes inovadoras. Se minha experiência se alinha com os desafios da sua empresa, adoraria conectar e explorar como posso agregar valor.
            </p>
            <Button size="lg" asChild className="text-lg px-8 py-4 h-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]">
              <a href="/contato">
                Ver Opções de Contato
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </TooltipProvider>;
};
export default Index;