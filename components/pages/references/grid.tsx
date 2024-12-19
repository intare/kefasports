"use client"

import { ReferenceCard } from "@/components/references/card"
import { useReferences } from "@/hooks/use-references"

export function ReferencesGrid() {
  const { references } = useReferences()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {references.map((reference) => (
        <ReferenceCard key={reference.href} {...reference} />
      ))}
    </div>
  )
}