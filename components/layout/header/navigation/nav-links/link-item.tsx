"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface LinkItemProps {
  href: string
  label: string
}

export function LinkItem({ href, label }: LinkItemProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href
          ? "text-foreground"
          : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  )
}