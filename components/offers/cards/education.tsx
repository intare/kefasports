import { OfferCard } from "./card"

const features = [
  "TIMBER SCHOOL BUILDINGS",
  "SCHOOL CANOPIES",
]

export function Education() {
  return (
    <OfferCard
      href="/education"
      title="EDUCATION"
      features={features}
      image={{
        src: "/gallery/kids.jpg?auto=format&fit=crop&w=1920&q=80",
        alt: "School classroom",
      }}
    />
  )
}