"use client"

import { ReferencesHero } from "./sections/hero"
import { ReferencesFilters } from "./sections/filters"
import { ReferencesGrid } from "./sections/grid"
import { ReferenceCta } from "./sections/cta"

export function ReferencesPage() {
  return (
    <main className="relative">
      <ReferencesHero />
      <ReferencesFilters />
      <ReferencesGrid />
      <ReferenceCta />
    </main>
  )
}