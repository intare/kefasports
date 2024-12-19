"use client"

import { Hero } from "./hero"
import { Content } from "./content"
import { Stats } from "./stats"

export function WhoWeArePage() {
  return (
    <main className="relative">
      <Hero />
      <Content />
      <Stats />
    </main>
  )
}