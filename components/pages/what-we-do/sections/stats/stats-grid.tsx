"use client"

import { StatsItem } from "./stats-item"
import { stats } from "./stats-data"

export function StatsGrid() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <StatsItem key={stat.label} {...stat} />
      ))}
    </div>
  )
}