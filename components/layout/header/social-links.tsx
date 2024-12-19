import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

const socials = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Youtube, label: "YouTube" },
]

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          className="text-muted-foreground/90 transition-colors hover:text-foreground dark:text-white/80 dark:hover:text-white"
        >
          <social.icon className="h-5 w-5" />
          <span className="sr-only">{social.label}</span>
        </Link>
      ))}
    </div>
  )
}