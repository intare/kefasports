"use client"

import { Logo } from "./logo"
import { NavLinks } from "./nav-links"
import { SocialLinks } from "./social-links"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-background/95 via-background/90 to-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-8 lg:flex">
            <NavLinks />
            <div className="flex items-center gap-4">
              <SocialLinks />
              <ThemeToggle />
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">CONTACT US</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">CONTACT US</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}