import { navigationLinks } from "@/config/navigation"
import { LinkItem } from "./link-item"

export function NavLinks() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <LinkItem {...link} />
          </li>
        ))}
      </ul>
    </nav>
  )
}