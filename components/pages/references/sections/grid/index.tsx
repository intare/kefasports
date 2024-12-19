"use client"

import { ReferenceCard } from "./reference-card"
import { ReferenceActions } from "./reference-actions"
import { useReferences } from "./use-references"

export function ReferencesGrid() {
  const { displayedReferences, loadMore, hasMore } = useReferences()

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedReferences.map((reference) => (
            <ReferenceCard key={reference.href} {...reference} />
          ))}
        </div>
        <ReferenceActions onLoadMore={loadMore} hasMore={hasMore} />
      </div>
    </section>
  )
}