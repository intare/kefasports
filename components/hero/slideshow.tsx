"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { slideshowImages } from "./slideshow-data"

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      {slideshowImages.map((image, index) => (
        <div
          key={image.url}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="relative h-full w-full">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn(
                "object-cover object-center",
                isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
              )}
              priority={index === 0}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
    </div>
  )
}