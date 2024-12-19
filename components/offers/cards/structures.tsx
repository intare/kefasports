import { OfferCard } from "./card"

const features = [
  "TIMBER FRAMES",
  "SURFACE TENSILE ENVELOPES",
  "PARAMETRIC ARCHITECTURE",
  "GREEN ENVELOPES",
]

export function Structures() {
  return (
    <div className="relative">
      <OfferCard
        href="/structures"
        title={
          <>
            STRUCTURES<br />& ENVELOPES
          </>
        }
        features={features}
        image={{
          src: "/gallery/gymnasiumd.jpeg",
          alt: "Modern building structure",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        
      </div>
    </div>
  )
}