import Link from "next/link"
import { siteConfig } from "@/config/site"

const company = [
  { id: "about", label: "About", href: "/about" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "news", label: "News", href: "/news" },
  { id: "contact", label: "Contact", href: "/contact" },
]

const services = [
  { id: "sport-play", label: "Sport & Play", href: "/sport-and-play" },
  { id: "structures", label: "Structures", href: "/structures" },
  { id: "education", label: "Education", href: "/education" },
  { id: "references", label: "References", href: "/references" },
]

const contact = [
  { id: "phone", label: "+250 787 666 677", href: "tel:+250 787 666 677" },
  { id: "email", label: "info@kefasports.com", href: "mailto:info@kefasports.com" },
  { id: "address3", label: "Omega House, Ground Floor, KN 3 ave, Kiyovu, Kigali", href: "#address" },
  { id: "address2", label: "Kigali, Rwanda", href: "#address" },
 
]

export function FooterTop() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
          <p className="text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            kefa sports
          </h3>
          <ul className="space-y-3">
            {company.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider">
            Contact
          </h3>
          <ul className="space-y-3">
            {contact.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}