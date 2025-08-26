import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Footer() {
  return <>
    {/* Gradient separator line */}
    <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    <footer className="bg-background border-t border-border">
      <div className="container-max">
        <div className="flex flex-col items-center justify-between py-8 px-4 sm:px-6 lg:px-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-primary">Leonardo Souza</h3>
            <p className="text-sm text-foreground-secondary mt-1">Especialista em IA e Automação </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
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
    </footer>
  </>;
}