import React from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
}

export function ProjectCard({ title, description, image, tags, href }: ProjectCardProps) {
  return (
    <div className="group bg-card shadow-card hover:shadow-hover rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-foreground-secondary text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button variant="default" size="default" asChild className="group/button bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 mt-auto">
          <a
            href={href}
            className="inline-flex items-center text-sm font-medium"
          >
            Ver estudo de caso
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </a>
        </Button>
      </div>
    </div>
  )
}