"use client"

import { Hero } from "./hero"
import { Content } from "./content"
import { Stats } from "./stats"

export function WhoWeAre() {
  return (
    <section className="relative">
      <Hero />
      <Content />
      <Stats />
    </section>
  )
}