"use client"

import { Hero } from "./sections/hero"
import { Content } from "./sections/content"
import { Stats } from "./sections/stats"

export function WhatWeDoPage() {
  return (
    <main className="relative">
      <Hero />
      <Content />
      <Stats />
    </main>
  )
}