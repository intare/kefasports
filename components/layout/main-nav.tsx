"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/config/navigation"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const socials = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-12">
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-20">
          <Image
            src="/logo.png"
            alt="KefaSports Logo"
            fill
            className="object-contain dark:invert"
            priority
          />
        </div>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-8">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground/90"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="text-muted-foreground/90 transition-colors hover:text-foreground"
          >
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}