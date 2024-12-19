"use client"

import { useState } from "react"
import { ReferenceCard } from "./reference-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const references = [
  {
    title: "GYMNASIUM",
    location: "AVRANCHES (FRANCE)",
    image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=1920&q=80",
    href: "/references/gymnasium-avranches"
  },
  {
    title: "SPORTS CANOPY",
    location: "PARIS (FRANCE)",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1920&q=80",
    href: "/references/sports-canopy-paris"
  },
  {
    title: "TENNIS COMPLEX",
    location: "LYON (FRANCE)",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=1920&q=80",
    href: "/references/tennis-complex-lyon"
  },
  {
    title: "INDOOR COURT",
    location: "MARSEILLE (FRANCE)",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=1920&q=80",
    href: "/references/indoor-court-marseille"
  },
  {
    title: "SPORTS HALL",
    location: "BORDEAUX (FRANCE)",
    image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=1920&q=80",
    href: "/references/sports-hall-bordeaux"
  },
  {
    title: "CLIMBING CENTER",
    location: "NICE (FRANCE)",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1920&q=80",
    href: "/references/climbing-center-nice"
  }
]

export function ReferencesGrid() {
  const [displayCount, setDisplayCount] = useState(6)
  const hasMore = displayCount < references.length

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.slice(0, displayCount).map((reference) => (
            <ReferenceCard key={reference.href} {...reference} />
          ))}
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-4">
          {hasMore && (
            <Button
              variant="outline"
              onClick={() => setDisplayCount(references.length)}
              className="min-w-[200px]"
            >
              LOAD MORE
            </Button>
          )}
          <Button
            asChild
            className="min-w-[200px] bg-primary"
          >
            <Link href="/references">
              + REFERENCES
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}