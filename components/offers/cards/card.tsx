import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface OfferCardProps {
  href: string
  title: React.ReactNode
  features: string[] | string[][]
  image: {
    src: string
    alt: string
  }
  className?: string
}

export function OfferCard({
  href,
  title,
  features,
  image,
  className,
}: OfferCardProps) {
  const isGrid = Array.isArray(features[0])

  return (
    <Link 
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        className
      )}
    >
      <div className="relative z-10 p-8 md:p-12">
        <h3 className="mb-12 text-3xl font-bold text-white drop-shadow-sm">
          {title}
        </h3>
        {isGrid ? (
          <div className="grid gap-4 text-sm font-medium md:grid-cols-2">
            {(features as string[][]).map((row, i) => (
              <div key={i} className="space-y-4">
                {row.map((feature, j) => (
                  <p
                    key={j}
                    className="text-white/90 drop-shadow-sm transition-colors group-hover:text-white"
                  >
                    {feature}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 text-sm font-medium">
            {(features as string[]).map((feature, i) => (
              <p
                key={i}
                className="text-white/90 drop-shadow-sm transition-colors group-hover:text-white"
              >
                {feature}
              </p>
            ))}
          </div>
        )}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
    </Link>
  )
}