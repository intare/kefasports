import { WhoAreWeHero } from "./hero"
import { WhoAreWeContent } from "./content"
import { WhoAreWeStats } from "./stats"

export function WhoAreWe() {
  return (
    <section className="relative">
      <WhoAreWeHero />
      <WhoAreWeContent />
      <WhoAreWeStats />
    </section>
  )
}