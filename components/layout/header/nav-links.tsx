"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/config/navigation"

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-foreground dark:text-white"
                  : "text-muted-foreground dark:text-white/80"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}