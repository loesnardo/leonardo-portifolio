import React from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  href: string
}

export function ArticleCard({ title, excerpt, date, readTime, href }: ArticleCardProps) {
  return (
    <article className="group bg-card shadow-card hover:shadow-hover rounded-lg p-6 transition-all duration-300">
      <div className="flex items-center text-xs text-foreground-secondary mb-3">
        <Calendar className="w-3 h-3 mr-1" />
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{readTime}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-foreground-secondary text-sm mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      <Button variant="default" size="sm" asChild className="group/button bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 scale-[0.8]">
        <a
          href={href}
          className="inline-flex items-center text-xs font-medium"
        >
          Ler artigo
          <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/button:translate-x-1" />
        </a>
      </Button>
    </article>
  )
}