import Link from "next/link"
import { Reference } from "@/lib/references"

interface NavigationItemProps {
  label: string
  reference: Reference | null
  type: "previous" | "next"
}

function NavigationItem({ label, reference, type }: NavigationItemProps) {
  if (!reference) return null

  return (
    <Link 
      href={`/references/${reference.slug}`}
      className={`block flex-1 bg-muted/30 p-6 transition-colors hover:bg-muted/50 ${
        type === "next" ? "text-right" : ""
      }`}
    >
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{reference.title}</p>
      </div>
    </Link>
  )
}

interface ReferenceNavigationProps {
  previous: Reference | null
  next: Reference | null
}

export function ReferenceNavigation({ previous, next }: ReferenceNavigationProps) {
  return (
    <div className="flex gap-px">
      <NavigationItem
        label="Previous reference"
        reference={previous}
        type="previous"
      />
      <NavigationItem
        label="Next reference"
        reference={next}
        type="next"
      />
    </div>
  )
}