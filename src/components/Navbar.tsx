import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
const navItems = [{
  name: "Início",
  href: "/"
}, {
  name: "Projetos",
  href: "/projetos"
}, {
  name: "Artigos",
  href: "/artigos"
}, {
  name: "Sobre",
  href: "/sobre"
}, {
  name: "Contato",
  href: "/contato"
}];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold text-primary">Leonardo Souza</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground-secondary"}`}>
                {item.name}
              </Link>)}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="h-9 w-9">
              {isMobileMenuOpen ? <X className="h-[1.2rem] w-[1.2rem]" /> : <Menu className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-1">
              {navItems.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href ? "text-primary" : "text-foreground-secondary"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>
    {/* Gradient separator line */}
    <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
  </>;
}