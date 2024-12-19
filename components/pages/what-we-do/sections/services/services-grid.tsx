import { ServiceCard } from "./service-card"
import { services } from "./services-data"

export function ServicesGrid() {
  return (
    <div className="grid gap-6">
      {/* Sport & Play - Full width */}
      <ServiceCard {...services[0]} className="md:aspect-[21/9]" />
      
      {/* Structures & Education - Half width */}
      <div className="grid gap-6 md:grid-cols-2">
        <ServiceCard {...services[1]} />
        <ServiceCard {...services[2]} />
      </div>
    </div>
  )
}