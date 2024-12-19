"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  features: string[] | string[][]
  image: string
  href: string
  className?: string
}

export function ServiceCard({ title, features, image, href, className }: ServiceCardProps) {
  const isGrid = Array.isArray(features[0])
  
  return (
    <Link 
      href={href}
      className={cn(
        "group relative aspect-[4/3] overflow-hidden rounded-lg",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 p-8 md:p-12">
        <h3 className="mb-8 text-2xl font-bold text-white">{title}</h3>
        
        {isGrid ? (
          <div className="grid gap-4 text-sm font-medium md:grid-cols-2">
            {(features as string[][]).map((column, i) => (
              <div key={i} className="space-y-4">
                {column.map((feature, j) => (
                  <p key={j} className="text-white/90">{feature}</p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 text-sm font-medium">
            {(features as string[]).map((feature, i) => (
              <p key={i} className="text-white/90">{feature}</p>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}