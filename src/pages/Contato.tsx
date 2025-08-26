import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Mail, Linkedin, MessageCircle } from "lucide-react"

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Estou ativamente buscando novas oportunidades para integrar equipes inovadoras como Especialista em Automação e IA. Se minha experiência se alinha com os desafios da sua empresa, adoraria conectar e explorar como posso agregar valor.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Email Card */}
              <div className="group p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-hover text-center flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enviar um E-mail</h3>
                <p className="text-foreground-secondary mb-4 flex-grow">Contato direto e profissional</p>
                <button 
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                  onClick={() => {
                    navigator.clipboard.writeText('usouzaleonardo@gmail.com').then(() => {
                      alert('Email copiado para a área de transferência!');
                    }).catch(() => {
                      alert('Não foi possível copiar. Email: usouzaleonardo@gmail.com');
                    });
                  }}
                >
                  Enviar E-mail
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="group p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-hover text-center flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conectar no LinkedIn</h3>
                <p className="text-foreground-secondary mb-4 flex-grow">Rede profissional e networking</p>
                <a 
                  href="https://www.linkedin.com/in/leonardo-usouza/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                >
                  Ver Perfil
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="group p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-hover text-center flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mensagem via WhatsApp</h3>
                <p className="text-foreground-secondary mb-4 flex-grow">Para um contato rápido e direto.</p>
                <a 
                  href="https://wa.me/5561982708809" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                >
                  Iniciar Conversa
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contato