import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" asChild>
        <Link href="/join">JOIN US</Link>
      </Button>
      <Button asChild>
        <Link href="/contact">CONTACT US</Link>
      </Button>
    </div>
  )
}