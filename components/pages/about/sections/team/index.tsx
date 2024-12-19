import { TeamHeader } from "./team-header"
import { TeamGrid } from "./team-grid"

export function AboutTeam() {
  return (
    <section className="py-24">
      <div className="container">
        <TeamHeader />
        <TeamGrid />
      </div>
    </section>
  )
}