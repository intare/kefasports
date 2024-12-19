import { OffersHeader } from "./header"
import { OffersGrid } from "./grid"

export function Offers() {
  return (
    <section className="py-24">
      <div className="container">
        <OffersHeader />
        <OffersGrid />
      </div>
    </section>
  )
}