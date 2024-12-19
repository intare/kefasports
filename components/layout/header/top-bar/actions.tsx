import { SocialLinks } from "./social-links"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TopBarActions() {
  return (
    <div className="flex items-center gap-8">
      <SocialLinks />
      <Button asChild>
        <Link href="/contact">CONTACT US</Link>
      </Button>
    </div>
  )
}