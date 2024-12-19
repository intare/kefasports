import { ServicesHeader } from "./services-header"
import { ServicesGrid } from "./services-grid"

export function Services() {
  return (
    <section className="py-24">
      <div className="container">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  )
}