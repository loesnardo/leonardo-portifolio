import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
const profilePhoto = "/lovable-uploads/d35930f5-13f5-4504-b083-1d5b353b2040.png"

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Header Section */}
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                O Código e o Contexto
              </h1>
              <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
                Como a minha jornada entre a Engenharia da Computação e a Filosofia molda a minha abordagem para resolver problemas complexos com IA e Automação.
              </p>
            </div>
          </div>
        </div>

        {/* Main Section - Two Columns */}
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={profilePhoto}
                    alt="Leonardo Souza"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Olá, eu sou o Leonardo
                </h2>
                
                <div className="space-y-4 text-foreground-secondary leading-relaxed">
                  <p>
                    A minha base profissional foi forjada na Engenharia da Computação no UniCEUB, onde aprendi a construir sistemas e a transformar desafios em soluções lógicas. Foi aplicando esse conhecimento em experiências práticas, como no Ministério Público do Trabalho, que percebi o verdadeiro poder dos dados. Lá, desenvolvi dashboards em Power BI que otimizaram processos e reduziram o tempo de análise em 70%.
                  </p>
                  
                  <p>
                    Mas a engenharia ensina-nos o 'como'; eu senti a necessidade de aprofundar os 'porquês'. Por isso, este semestre, comecei a minha licenciatura em Filosofia na UnB. O meu objetivo é claro: unir o rigor técnico da engenharia com a clareza do pensamento crítico. É essa união que me permite ir além da análise de dados tradicional, utilizando a Inteligência Artificial para criar automações que não são apenas eficientes, mas estrategicamente inteligentes.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 pt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/leonardo-usouza/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://github.com/loesnardo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Trajectory Section */}
        <div className="section-padding bg-alt">
          <div className="container-max">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Trajetória Profissional
            </h3>
            
            <div className="space-y-8 max-w-3xl mx-auto">
              {/* MPT Experience */}
              <div className="bg-card rounded-lg p-6 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-semibold text-card-foreground">
                    Ministério Público do Trabalho
                  </h4>
                  <span className="text-sm text-foreground-secondary mt-1 sm:mt-0">
                    Jan 2024 - Set 2024
                  </span>
                </div>
                <p className="text-foreground-secondary leading-relaxed">
                  Desenvolvi e implementei uma solução de visualização de dados com Power BI que reduziu em 70% o tempo de geração de relatórios, agilizando a tomada de decisão estratégica do setor.
                </p>
              </div>

              {/* New Form Experience */}
              <div className="bg-card rounded-lg p-6 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-semibold text-card-foreground">
                    New Form
                  </h4>
                  <span className="text-sm text-foreground-secondary mt-1 sm:mt-0">
                    2023 - 2024
                  </span>
                </div>
                <p className="text-foreground-secondary leading-relaxed">
                  Implementei relatórios de controlo de estoque que garantiram a disponibilidade de matéria-prima e melhoraram o cumprimento de prazos com clientes.
                </p>
              </div>

              {/* Rocha Bressan Experience */}
              <div className="bg-card rounded-lg p-6 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h4 className="text-xl font-semibold text-card-foreground">
                    Rocha Bressan
                  </h4>
                  <span className="text-sm text-foreground-secondary mt-1 sm:mt-0">
                    2022 - 2023
                  </span>
                </div>
                <p className="text-foreground-secondary leading-relaxed">
                  Realizei a análise técnica de especificações de componentes para sistemas de CFTV, garantindo a compatibilidade e o alinhamento com os requisitos de editais de licitação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Vamos Conversar?
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-8">
                Se a minha abordagem – que une profundidade analítica com execução técnica – se alinha com os desafios da sua equipa, adoraria conectar e explorar como podemos construir soluções inteligentes juntos.
              </p>
              <Button asChild size="lg" className="group">
                <a href="/contato" className="inline-flex items-center">
                  Entre em Contato →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Sobre