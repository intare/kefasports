"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Logo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR and hydration, render a placeholder to avoid mismatch
  if (!mounted) {
    return (
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-32">
          <Image
            src="/logo.png"
            alt="KefaSports Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
      </Link>
    )
  }

  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-12 w-32">
        <Image
          src={resolvedTheme === 'dark' ? "/logo-white.png" : "/logo.png"}
          alt="KefaSports Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 128px"
        />
      </div>
    </Link>
  )
}