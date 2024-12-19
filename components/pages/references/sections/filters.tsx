"use client"

import { Button } from "@/components/ui/button"

const categories = [
  "STRUCTURES AND ENVELOPES",
  "SPORT & PLAY",
  "EDUCATION",
  "INDUSTRY - SERVICES"
]

export function ReferencesFilters() {
  return (
    <div className="border-b bg-muted/30">
      <div className="container flex gap-4 overflow-x-auto py-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            className="whitespace-nowrap text-sm font-medium"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}