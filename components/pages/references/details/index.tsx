"use client"

import { useEffect, useState } from "react"
import { ReferenceHeader } from "./sections/header"
import { ReferenceDetails } from "./sections/details"
import { ReferenceDescription } from "./sections/description"
import { ReferenceGallery } from "./sections/gallery"
import { ReferenceNavigation } from "./sections/navigation"
import { OtherReferences } from "./sections/other-references"
import { ReferenceCta } from "./sections/cta"
import { Reference, getReference, getAdjacentReferences, getOtherReferences } from "@/lib/references"

interface ReferenceDetailsPageProps {
  slug: string
}

export function ReferenceDetailsPage({ slug }: ReferenceDetailsPageProps) {
  const [reference, setReference] = useState<Reference | null>(null)
  const [adjacentRefs, setAdjacentRefs] = useState<{
    previous: Reference | null
    next: Reference | null
  }>({ previous: null, next: null })
  const [otherRefs, setOtherRefs] = useState<Reference[]>([])

  useEffect(() => {
    const ref = getReference(slug)
    if (ref) {
      setReference(ref)
      setAdjacentRefs(getAdjacentReferences(slug))
      setOtherRefs(getOtherReferences(slug))
    }
  }, [slug])

  if (!reference) return null

  return (
    <main className="relative">
      <ReferenceHeader reference={reference} />
      <ReferenceDetails reference={reference} />
      <ReferenceDescription reference={reference} />
      <ReferenceGallery reference={reference} />
      <ReferenceNavigation previous={adjacentRefs.previous} next={adjacentRefs.next} />
      <OtherReferences references={otherRefs} />
      <ReferenceCta />
    </main>
  )
}