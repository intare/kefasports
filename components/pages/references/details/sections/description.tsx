import { Reference } from "@/lib/references"

interface ReferenceDescriptionProps {
  reference: Reference
}

export function ReferenceDescription({ reference }: ReferenceDescriptionProps) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="prose max-w-none">
          {reference.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}