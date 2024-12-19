import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

export function Logo() {
  const { theme } = useTheme()

  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-12 w-20">
        <Image
          src={theme === 'dark' ? "/logo-white.png" : "/logo.png"}
          alt="KefaSports Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}