"use client"

import { StatsHeader } from "./stats-header"
import { StatsGrid } from "./stats-grid"

export function Stats() {
  return (
    <section className="bg-[#E31E24] py-24">
      <div className="container">
        <StatsHeader />
        <StatsGrid />
      </div>
    </section>
  )
}