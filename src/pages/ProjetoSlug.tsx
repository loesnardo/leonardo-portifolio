import { useParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projetos } from "@/data/projetos.js";
const criptoAnalyzerImage = "/lovable-uploads/86409574-cdb8-4cc7-87e6-164d468a90f9.png";
const eltezKImage = "/lovable-uploads/975a8df5-fdf3-404c-b994-0c64fa40552f.png";
import project3 from "@/assets/project3.jpg";
const assistenteVirtualImage = "/lovable-uploads/ddf5d33b-3dc7-4e28-a5fd-0058691e1797.png";

const ProjetoSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Buscar o projeto pelo slug
  const projeto = projetos.find(item => item.slug === slug);
  
  // Se o projeto não for encontrado, redireciona para 404
  if (!projeto) {
    return <Navigate to="/404" replace />;
  }
  
  // Selecionar imagem baseada no índice do projeto (mesma ordem da página de projetos)
  const projetoIndex = projetos.findIndex(item => item.slug === slug);
  const contentBotImage = "/lovable-uploads/bfb553ae-f0f1-40b5-ad13-49027a69eb11.png";
  const images = [contentBotImage, assistenteVirtualImage, criptoAnalyzerImage, eltezKImage];
  const projectImage = images[projetoIndex] || contentBotImage;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <article className="section-padding">
          <div className="container-max">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <img 
                  src={projectImage} 
                  alt={projeto.titulo}
                  className="w-full rounded-2xl shadow-hover"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {projeto.titulo}
                </h1>
                
                <p className="text-xl text-foreground-secondary mb-8 leading-relaxed">
                  {projeto.descricao}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 text-sm font-medium bg-muted text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {projeto.slug === 'cripto-analyzer-plataforma-unificada' ? (
                    <>
                      <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://cripto-analyzer.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Ver projeto live
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://github.com/loesnardo/cripto-analyzer" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          Ver código
                        </a>
                      </Button>
                    </>
                  ) : projeto.slug === 'site-agencia-eltezk' ? (
                    <>
                      <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://www.eltezk.com.br/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Ver projeto live
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://github.com/loesnardo/eltezk" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          Ver código
                        </a>
                      </Button>
                    </>
                  ) : projeto.slug === 'content-bot-automacao-de-conteudo' ? (
                    <>
                      <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://github.com/loesnardo/blog-automatico" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Ver projeto live
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://github.com/loesnardo/blog-automatico" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          Ver código
                        </a>
                      </Button>
                    </>
                  ) : projeto.slug === 'assistente-virtual-consultorios' ? (
                    <>
                      <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://github.com/loesnardo/secretario-assistente-ia" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Ver projeto live
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                        <a href="https://github.com/loesnardo/secretario-assistente-ia" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          Ver código
                        </a>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="lg" className="text-lg px-8 py-6 h-auto">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Ver projeto live
                      </Button>
                      <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                        <Github className="mr-2 h-5 w-5" />
                        Ver código
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-12">
                {projeto.slug === 'cripto-analyzer-plataforma-unificada' ? (
                  <>
                    <h2>Sobre o Projeto</h2>
                    <p className="lead text-xl text-foreground-secondary leading-relaxed">
                      O investidor de criptomoedas moderno vive uma experiência fragmentada. Ele precisa usar uma plataforma como o CoinGecko para pesquisar o mercado e outra, como o Solscan, para monitorar sua carteira Solana. Essa troca constante entre ferramentas é ineficiente. O objetivo do CriptoAnalyzer foi unificar estas duas experiências em uma interface única, coesa e de alta performance.
                    </p>
                    
                    <h2>Desafios Técnicos Superados</h2>
                    <ul>
                      <li>
                        <strong>Integração de Fontes de Dados Distintas:</strong> O principal desafio foi arquitetar um sistema capaz de consumir e normalizar dados de duas fontes diferentes: uma API de mercado global (CoinGecko) e uma API de dados on-chain da Solana (Helius), criando um modelo de dados flexível.
                      </li>
                      <li>
                        <strong>Desenvolvimento do Algoritmo de Risco para Solana:</strong> Para a análise de carteira, foi crucial desenvolver um sistema que classificasse tokens de forma confiável para proteger o utilizador de spam tokens, analisando a liquidez e os metadados de cada ativo.
                      </li>
                      <li>
                        <strong>Design de uma UX Unificada:</strong> O desafio de design foi criar uma interface que acomodasse dois casos de uso distintos (pesquisa de mercado e análise de carteira) sem sobrecarregar o utilizador, utilizando uma busca inteligente e contextual.
                      </li>
                    </ul>
                    
                    <h2>Arquitetura e Decisões Tecnológicas</h2>
                    <p>
                      A aplicação foi construída com React e TypeScript sobre a build tool Vite. Para a UI, utilizei Tailwind CSS com shadcn/ui e Radix UI para criar um design system customizado e acessível. As animações e microinterações foram implementadas com Framer Motion. O gerenciamento de dados de API foi centralizado com o TanStack Query, e a biblioteca Recharts foi utilizada para a renderização dos gráficos.
                    </p>
                    
                    <h2>Principais Destaques e Resultados</h2>
                    <ul>
                      <li><strong>Plataforma 2-em-1:</strong> Unifica a pesquisa de mercado e o rastreamento de carteiras Solana, eliminando a necessidade de o utilizador alternar entre múltiplas ferramentas.</li>
                      <li><strong>Análise de Risco Inteligente:</strong> O sistema de classificação de risco para tokens Solana oferece uma camada de segurança que não existe em exploradores de bloco tradicionais.</li>
                      <li><strong>Performance e UX de Classe Mundial:</strong> A experiência do utilizador é extremamente rápida e fluida, mesmo lidando com dados em tempo real.</li>
                      <li><strong>Dados Abrangentes e Confiáveis:</strong> Consolida as melhores informações de mercado da CoinGecko com os dados on-chain mais precisos da Helius.</li>
                    </ul>
                  </>
                ) : projeto.slug === 'cripto-analyzer-solana' ? (
                  <>
                    <h2>Sobre o Projeto</h2>
                    <p className="lead text-xl text-foreground-secondary leading-relaxed">
                      O ecossistema de criptomoedas, especialmente em blockchains como a Solana, é rápido e inovador, mas também repleto de riscos e informações fragmentadas. Os investidores precisam de consultar múltiplas fontes para analisar o mercado e as suas próprias carteiras, e enfrentam o desafio constante de diferenciar ativos legítimos de possíveis scams. O objetivo do CriptoAnalyzer foi criar uma plataforma unificada que oferecesse não apenas dados, mas também inteligência e segurança para a tomada de decisões.
                    </p>
                    
                    <h2>Desafios Técnicos Superados</h2>
                    <ul>
                      <li>
                        <strong>Desenvolvimento de um Algoritmo de Risco:</strong> O desafio mais complexo foi criar o algoritmo para classificar tokens. A solução envolveu a integração com a Helius API para analisar múltiplos fatores, como a liquidez em DEXs e os metadados do token, atribuindo um score de risco (high-trust, low-trust, high-risk) para cada ativo.
                      </li>
                      <li>
                        <strong>Performance com Dados em Tempo Real:</strong> Para garantir uma experiência fluida, implementei o TanStack Query para um gerenciamento de cache e server state de alta performance. Otimizações como debouncing nas buscas e lazy loading nos gráficos foram cruciais para a responsividade da aplicação.
                      </li>
                      <li>
                        <strong>Arquitetura de Componentes Acessíveis:</strong> Construir uma UI complexa exigiu um foco em acessibilidade. Utilizei o Radix UI como base para todos os componentes interativos, garantindo que a aplicação fosse 100% navegável por teclado e compatível com leitores de tela.
                      </li>
                    </ul>
                    
                    <h2>Arquitetura e Decisões Tecnológicas</h2>
                    <p>
                      A aplicação foi construída com React e TypeScript sobre a build tool Vite. Para a UI, utilizei Tailwind CSS com shadcn/ui e Radix UI para criar um design system customizado. As animações e microinterações foram implementadas com Framer Motion. O gerenciamento de dados de API foi centralizado com o TanStack Query, e a biblioteca Recharts foi utilizada para a renderização dos gráficos.
                    </p>
                    
                    <h2>Principais Destaques e Resultados</h2>
                    <ul>
                      <li>✨ <strong>Análise de Risco Inteligente:</strong> O sistema de classificação de risco oferece uma camada extra de segurança, ajudando os utilizadores a evitar spam tokens.</li>
                      <li>📊 <strong>Visualização de Dados Completa:</strong> A plataforma consolida dados de mercado e dados on-chain de carteiras Solana numa interface única.</li>
                      <li>🚀 <strong>Performance e UX de Classe Mundial:</strong> A experiência do utilizador é extremamente rápida e fluida, mesmo lidando com dados em tempo real.</li>
                      <li>🏗️ <strong>Arquitetura Robusta e Escalável:</strong> O uso de TypeScript e hooks customizados garantem que a aplicação seja de fácil manutenção.</li>
                    </ul>
                  </>
                ) : projeto.slug === 'site-agencia-eltezk' ? (
                  <>
                    <h2>O Desafio: Demonstrar Excelência</h2>
                    <p className="lead text-xl text-foreground-secondary leading-relaxed">
                      O desafio não era apenas criar um site institucional, mas sim construir uma experiência digital que servisse como o próprio portfólio da agência. A aplicação precisava não apenas <em>falar</em> sobre tecnologia de ponta, mas <em>demonstrá-la</em> em cada interação, combinando um design visualmente impactante com performance otimizada e acessibilidade completa.
                    </p>
                    
                    <h2>Desafios Técnicos Superados</h2>
                    <ul>
                      <li>
                        <strong>Criação do Grid 3D Interativo (ChromeGrid):</strong> Um dos desafios mais complexos foi desenvolver o grid de esferas 3D. A solução exigiu a integração do React Three Fiber com Three.js, otimizando a performance com geometria reutilizada e <code>useFrame</code> para garantir uma animação fluida a 60fps.
                      </li>
                      <li>
                        <strong>Desenvolvimento de um Design System Robusto:</strong> Para garantir consistência e escalabilidade, utilizei o Tailwind CSS em conjunto com o Radix UI e shadcn/ui para construir um sistema de componentes de UI customizados e acessíveis, como o <code>GlareCard</code> e o carrossel interativo.
                      </li>
                      <li>
                        <strong>Implementação de Animações Complexas:</strong> Utilizei o Framer Motion para orquestrar transições de página, animações de entrada escalonadas e microinterações em todos os componentes clicáveis, garantindo um feedback visual instantâneo e agradável.
                      </li>
                    </ul>
                    
                    <h2>Arquitetura e Decisões Tecnológicas</h2>
                    <p>
                      A aplicação foi construída com React e TypeScript sobre a build tool Vite, garantindo um desenvolvimento rápido e um código seguro. Para o gerenciamento de dados de API, utilizei o TanStack Query para caching. A estilização foi feita com uma abordagem utility-first com Tailwind CSS, permitindo a criação rápida de um design system customizado.
                    </p>
                    
                    <h2>Principais Destaques e Resultados</h2>
                    <ul>
                      <li>✨ <strong>Experiência de Usuário Premium:</strong> O uso combinado de Framer Motion e React Three Fiber resultou em uma interface memorável e altamente interativa.</li>
                      <li>🚀 <strong>Performance Otimizada:</strong> O site alcançou excelentes métricas de Core Web Vitals (LCP, INP, CLS) graças à otimização de assets, lazy loading e code splitting.</li>
                      <li>♿ <strong>Acessibilidade Completa:</strong> A construção sobre a base do Radix UI garantiu que a aplicação fosse totalmente acessível, com navegação por teclado e semântica correta.</li>
                      <li>📱 <strong>Design Responsivo Mobile-First:</strong> A interface foi projetada para ser perfeita em qualquer dispositivo, com uma navegação mobile adaptada para usabilidade superior.</li>
                    </ul>
                  </>
                ) : projeto.slug === 'criptotracker-analise-de-ativos' ? (
                  <>
                    <h2>Sobre o Projeto</h2>
                    <p className="lead text-xl text-foreground-secondary leading-relaxed">
                      Investidores na rede Solana enfrentam um ecossistema fragmentado, forçando-os a consultar múltiplas plataformas para obter uma visão real de seu patrimônio. O maior desafio, no entanto, é a segurança: a proliferação de spam tokens e ativos de baixa liquidez representa um risco constante. O objetivo deste projeto foi criar a "fonte única da verdade": uma ferramenta que não apenas consolida, mas também protege, oferecendo clareza e confiança para a tomada de decisões.
                    </p>
                    
                    <h2>Desafios Enfrentados</h2>
                    <ul>
                      <li>
                        <strong>Desenvolver um Algoritmo de Risco:</strong> O desafio mais complexo foi criar um sistema de avaliação que classificasse tokens de forma confiável. A solução envolveu o desenvolvimento de um algoritmo que consome dados da Helius API para analisar liquidez, distribuição de holders e metadados, atribuindo um score de risco (high-trust, low-trust, high-risk) para cada ativo.
                      </li>
                      <li>
                        <strong>Performance com Dados em Tempo Real:</strong> Para garantir uma experiência de usuário fluida, implementei o TanStack Query para um gerenciamento de cache e server state de alta performance. Otimizações como debouncing nas buscas e lazy loading nos gráficos foram cruciais para manter a responsividade da aplicação.
                      </li>
                      <li>
                        <strong>Arquitetura de Dados Unificada:</strong> Tive que consolidar e padronizar informações de duas APIs distintas (CoinGecko e Helius), garantindo que os dados fossem consistentes em toda a aplicação.
                      </li>
                    </ul>
                    
                    <h2>Soluções Implementadas</h2>
                    <p>
                      A interface foi construída com React e TypeScript, garantindo um código robusto e escalável. Para a UI, utilizei Tailwind CSS com Radix UI para componentes acessíveis, criando um design moderno com efeitos de glass morphism e animações fluidas com Framer Motion. A comunicação com as APIs e o gerenciamento de estado de servidor foram orquestrados pelo TanStack Query. Os gráficos interativos, o coração da análise de dados, foram renderizados com a biblioteca Recharts.
                    </p>
                    
                    <h2>Resultados Obtidos</h2>
                    <ul>
                      <li>✅ <strong>Visão Unificada e Completa:</strong> Oferece um dashboard consolidado de todos os ativos (SOL, Tokens SPL, NFTs), eliminando a necessidade de múltiplas ferramentas.</li>
                      <li>✅ <strong>Navegação Segura no Ecossistema:</strong> O sistema de avaliação de risco e a filtragem automática de spam tokens são um diferencial raro, protegendo ativamente o usuário.</li>
                      <li>✅ <strong>Performance de Nível Profissional:</strong> A experiência do usuário é extremamente rápida e fluida, mesmo lidando com dados em tempo real.</li>
                      <li>✅ <strong>Insights para Decisões Inteligentes:</strong> Os KPIs e gráficos interativos fornecem uma análise aprofundada para uma gestão de portfólio mais eficaz.</li>
                    </ul>
                  </>
                ) : projeto.slug === 'content-bot-automacao-de-conteudo' ? (
                  <>
                    <h2>Sobre o Projeto</h2>
                    <p className="lead text-xl text-foreground-secondary leading-relaxed">
                      Criadores de conteúdo e equipas de marketing enfrentam um desafio constante: a necessidade de publicar conteúdo de alta qualidade de forma consistente. Este processo, desde a pesquisa de ideias até a formatação e publicação, é demorado e repetitivo. O objetivo deste projeto foi criar uma solução que automatizasse todo o ciclo de vida de um post de blog, transformando um processo de horas em uma conversa de minutos.
                    </p>
                    
                    <h2>Desafios Enfrentados</h2>
                    <ul>
                      <li>
                        <strong>Incompatibilidade de Formatação entre APIs:</strong> O principal desafio técnico surgiu na comunicação entre a Gemini API e o Telegram. A IA frequentemente retornava sugestões de texto formatadas em Markdown (usando <code>**</code> para negrito). No entanto, a API do Telegram possui regras de parsing estritas e rejeitava essas mensagens, causando a interrupção abrupta do fluxo conversacional e prejudicando a experiência do utilizador.
                        <ul>
                          <li><strong>A Solução:</strong> Para resolver isso, implementei uma função intermediária de "sanitização" de texto no n8n. Utilizando um nó de código com JavaScript e expressões regulares (regex), a função analisa a resposta da IA e remove ou substitui a formatação Markdown antes de a mensagem ser enviada ao Telegram. Isso garantiu 100% de confiabilidade na comunicação e a resiliência de todo o workflow.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Personalização do Conteúdo da IA:</strong> Para garantir que a Gemini API gerasse conteúdo alinhado à marca do utilizador, criei um sistema no Airtable onde o utilizador pode definir as suas preferências de estilo, tom de voz e palavras-chave de SEO. O n8n utiliza esses dados para enriquecer os prompts enviados à IA, resultando em conteúdo muito mais relevante.
                      </li>
                    </ul>
                    
                    <h2>Soluções Implementadas</h2>
                    <p>
                      A solução foi arquitetada de forma modular em <strong>três workflows interligados no n8n</strong> para otimizar a manutenção e a clareza do processo:
                    </p>
                    <ul>
                      <li><strong>Workflow Principal (Conversacional):</strong> Gere a interação com o utilizador via <strong>Telegram</strong>, consulta a <strong>Gemini API</strong> para ideação e estrutura, e gere o estado da conversa e as preferências do utilizador no <strong>Airtable</strong>.</li>
                      <li><strong>Workflow de Imagem:</strong> Um fluxo secundário, acionado após a aprovação do tema, que gera a imagem via IA, faz o upload para a biblioteca de média do <strong>WordPress</strong> e retorna o ID da imagem.</li>
                      <li><strong>Workflow de Publicação:</strong> O fluxo final que recebe o texto completo em HTML da Gemini, combina-o com o ID da imagem e publica o post completo como um rascunho no WordPress via API.</li>
                    </ul>
                    
                    <h2>Resultados Obtidos</h2>
                    <ul>
                      <li><strong>Redução de 80% no tempo médio gasto para criar o rascunho de um post de blog.</strong></li>
                      <li><strong>Consistência de Marca e SEO garantida,</strong> graças ao uso de preferências e palavras-chave armazenadas no Airtable.</li>
                      <li><strong>Interface Conversacional Intuitiva,</strong> que permite a qualquer pessoa, mesmo sem conhecimentos técnicos, criar conteúdo de alta qualidade.</li>
                      <li><strong>Arquitetura Modular e Resiliente,</strong> garantindo um funcionamento robusto e de fácil manutenção.</li>
                    </ul>
                  </>
                ) : projeto.slug === 'assistente-virtual-consultorios' ? (
                  <>
                    <h2>Sobre o Projeto</h2>
                    <p className="lead text-xl text-foreground-secondary leading-relaxed">
                      Profissionais de saúde em consultórios gastam uma quantidade enorme de tempo em tarefas administrativas repetitivas: agendar, remarcar e confirmar consultas, e gerir a sua própria agenda. O objetivo do projeto foi criar um sistema de 'dupla interface' que automatizasse tanto a comunicação externa com os pacientes quanto a gestão interna para o profissional.
                    </p>
                    
                    <h2>Desafios Técnicos Superados</h2>
                    <ul>
                      <li>
                        <strong>Implementação de uma Interface Conversacional Bimodal (Áudio e Texto):</strong> O maior desafio foi criar um assistente que pudesse entender e responder tanto por texto quanto por áudio via WhatsApp. A solução exigiu a integração de APIs de Speech-to-Text e Text-to-Speech, orquestrando tudo dentro do n8n para que a conversa fluísse naturalmente em ambos os formatos.
                      </li>
                      <li>
                        <strong>Arquitetura de Dupla Interface:</strong> Foi preciso arquitetar dois fluxos de trabalho distintos, mas sincronizados. A solução foi usar o Supabase como um banco de dados central que servisse como 'fonte única da verdade' para os agendamentos, garantindo que as modificações feitas pelo profissional no Telegram fossem refletidas instantaneamente nas confirmações enviadas ao paciente.
                      </li>
                      <li>
                        <strong>Integração com a Evolution API:</strong> Diferente de APIs oficiais, a integração com o WhatsApp via Evolution API exigiu uma configuração mais complexa do ambiente, incluindo a gestão de webhooks e o tratamento de diferentes tipos de media para garantir uma comunicação robusta.
                      </li>
                    </ul>
                    
                    <h2>Soluções Implementadas</h2>
                    <p>
                      A solução foi orquestrada pelo n8n e dividida em dois sistemas principais:
                    </p>
                    <ul>
                      <li><strong>Assistente do Paciente (WhatsApp):</strong> Interage com os pacientes via Evolution API (áudio/texto), utiliza a Gemini API para entender as solicitações, agenda consultas no Google Calendar e envia documentos do Google Drive.</li>
                      <li><strong>Central de Gestão (Telegram):</strong> Oferece um bot de gestão interna para o profissional que permite visualizar e modificar agendamentos, criar tarefas no Google Tasks, ler e-mails não lidos e notifica sempre que um paciente solicita ajuda humana.</li>
                    </ul>
                    
                    <h2>Resultados Obtidos</h2>
                    <ul>
                      <li>Automação de 90% das tarefas de agendamento e comunicação com pacientes.</li>
                      <li>Redução de 25% na taxa de 'no-show' (não comparecimento) graças aos lembretes automáticos.</li>
                      <li>Centralização da Gestão: O profissional passou a gerir a sua agenda, tarefas e e-mails a partir de uma única interface no Telegram.</li>
                      <li>Melhoria na Experiência do Paciente, oferecendo um canal de comunicação moderno e flexível (WhatsApp com áudio/texto) que funciona 24/7.</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <h2>Sobre o Projeto</h2>
                    <p className="lead text-xl text-foreground-secondary leading-relaxed">
                      {projeto.descricao}
                    </p>
                    
                    <h3>Desafios Enfrentados</h3>
                    <p>
                      Durante o desenvolvimento deste projeto, diversos desafios técnicos e de negócio 
                      foram superados através de soluções inovadoras e implementação de melhores práticas 
                      de desenvolvimento.
                    </p>
                    
                    <h3>Soluções Implementadas</h3>
                    <p>
                      As soluções desenvolvidas focaram em automação inteligente, integração de sistemas 
                      e otimização de processos, resultando em melhorias significativas de eficiência 
                      e produtividade.
                    </p>
                    
                    <h3>Resultados Obtidos</h3>
                    <p>
                      O projeto demonstrou resultados mensuráveis em termos de redução de tempo de 
                      processamento, aumento de precisão e melhoria da experiência do usuário final.
                    </p>
                    
                    <h3>Tecnologias Utilizadas</h3>
                    <p>
                      O projeto foi desenvolvido utilizando as seguintes tecnologias: {projeto.tecnologias.join(', ')}.
                      Cada tecnologia foi escolhida estrategicamente para atender aos requisitos específicos 
                      do projeto e garantir escalabilidade e manutenibilidade.
                    </p>
                  </>
                )}
              </div>
              
              {/* CTA Section */}
              <Separator className="mb-8" />
              
               <div className="text-center bg-muted/50 rounded-lg p-8">
                {projeto.slug === 'cripto-analyzer-plataforma-unificada' ? (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      O que você achou deste projeto?
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                      Gostaria de discutir como minhas habilidades em engenharia de software e análise de dados podem agregar valor à sua equipe?
                    </p>
                    <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                      <a href="/contato">
                        Entre em Contato
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </>
                ) : projeto.slug === 'cripto-analyzer-solana' ? (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      O que você achou deste projeto?
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                      Gostaria de discutir como minhas habilidades em engenharia de software e análise de dados podem agregar valor à sua equipe?
                    </p>
                    <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                      <a href="/contato">
                        Entre em Contato
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </>
                ) : projeto.slug === 'site-agencia-eltezk' ? (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      O que você achou deste projeto?
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                      Gostaria de discutir como minhas habilidades em engenharia de software podem agregar valor à sua equipe?
                    </p>
                    <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                      <a href="/contato">
                        Entre em Contato
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </>
                ) : projeto.slug === 'criptotracker-analise-de-ativos' ? (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      O que você achou deste projeto?
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                      Gostaria de discutir como minhas habilidades podem agregar valor à sua equipe?
                    </p>
                    <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                      <a href="/contato">
                        Entre em Contato
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </>
                ) : projeto.slug === 'content-bot-automacao-de-conteudo' ? (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      O que você achou deste projeto?
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                      Gostaria de discutir como minhas habilidades em IA e automação podem agregar valor à sua equipe?
                    </p>
                    <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                      <a href="/contato">
                        Entre em Contato
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </>
                ) : projeto.slug === 'assistente-virtual-consultorios' ? (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      O que você achou deste projeto?
                    </h2>
                    <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                      Gostaria de discutir como minhas habilidades em IA e automação podem agregar valor à sua equipe?
                    </p>
                    <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                      <a href="/contato">
                        Entre em Contato
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">
                      Interessado em um projeto similar?
                    </h3>
                    <p className="text-lg text-foreground-secondary mb-6 max-w-xl mx-auto">
                      Vamos conversar sobre como posso ajudar você a implementar soluções 
                      de automação customizadas para seu negócio.
                    </p>
                    <Button size="lg" asChild className="text-lg px-8 py-6 h-auto">
                      <a href="/contato">
                        Iniciar conversa
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjetoSlug;