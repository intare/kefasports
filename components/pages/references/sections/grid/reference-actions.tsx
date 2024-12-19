"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ReferenceActionsProps {
  onLoadMore: () => void
  hasMore: boolean
}

export function ReferenceActions({ onLoadMore, hasMore }: ReferenceActionsProps) {
  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      {hasMore && (
        <Button
          variant="outline"
          onClick={onLoadMore}
          className="min-w-[200px]"
        >
          LOAD MORE
        </Button>
      )}
      <Button
        asChild
        className="min-w-[200px] bg-primary"
      >
        <Link href="/references">
          + REFERENCES
        </Link>
      </Button>
    </div>
  )
}