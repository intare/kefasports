"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Reference } from "@/lib/references"

interface OtherReferencesProps {
  references: Reference[]
}

export function OtherReferences({ references }: OtherReferencesProps) {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-2xl font-bold">OUR OTHER REFERENCES</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((reference) => (
            <Link
              key={reference.slug}
              href={`/references/${reference.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={reference.mainImage.src}
                alt={`${reference.title} - ${reference.location}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
              
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