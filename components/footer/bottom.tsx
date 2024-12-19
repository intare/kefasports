import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const socials = [
  { name: "Facebook", icon: Facebook, href: "#facebook" },
  { name: "Twitter", icon: Twitter, href: "#twitter" },
  { name: "Instagram", icon: Instagram, href: "#instagram" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
]

export function FooterBottom() {
  return (
    <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {" "}
        <Link href="/" className="hover:underline">
        kefa Sports Limited
        </Link>
        . All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <Link
              key={social.name.toLowerCase()}
              href={social.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}