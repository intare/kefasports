"use client"

import { useState } from "react"
import { references } from "./references-data"

const INITIAL_COUNT = 6

export function useReferences() {
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT)
  const hasMore = displayCount < references.length

  const loadMore = () => {
    setDisplayCount(references.length)
  }

  return {
    displayedReferences: references.slice(0, displayCount),
    loadMore,
    hasMore
  }
}