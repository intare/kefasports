"use client"

import { Description } from "./description"
import { Directors } from "./directors"

export function Content() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-12">
          <Description />
          <Directors />
        </div>
      </div>
    </section>
  )
}