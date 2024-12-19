import { notFound } from "next/navigation"
import { ReferenceDetailsPage } from "@/components/pages/references/details"
import { references } from "@/lib/references"

export function generateStaticParams() {
  return references.map((reference) => ({
    slug: reference.slug,
  }))
}

interface ReferenceDetailsProps {
  params: { slug: string }
}

export default function ReferenceDetails({ params }: ReferenceDetailsProps) {
  const reference = references.find((ref) => ref.slug === params.slug)
  
  if (!reference) {
    notFound()
  }

  return <ReferenceDetailsPage slug={params.slug} />
}