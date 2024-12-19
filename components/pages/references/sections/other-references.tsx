"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

const otherReferences = [
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
  }
]

export function OtherReferences() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-2xl font-bold">OUR OTHER REFERENCES</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherReferences.map((reference) => (
            <Link
              key={reference.href}
              href={reference.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={reference.image}
                alt={`${reference.title} - ${reference.location}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
              
              {/* Plus icon - bottom right */}
              <div className="absolute bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Plus className="h-6 w-6 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}