import { NavLinks } from "./nav-links"
import { MobileNav } from "./mobile-nav"

export function Navigation() {
  return (
    <div className="flex h-14 items-center justify-between">
      <NavLinks />
      <MobileNav />
    </div>
  )
}