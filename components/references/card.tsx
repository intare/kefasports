import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

interface ReferenceCardProps {
  title: string
  location: string
  image: string
  href: string
}

export function ReferenceCard({
  title,
  location,
  image,
  href,
}: ReferenceCardProps) {
  return (
    <Link
      href={href}
      className="group relative aspect-[4/3] overflow-hidden rounded-lg"
    >
      <Image
        src={image}
        alt={`${title} - ${location}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
      
      {/* Text content - top left */}
      <div className="absolute inset-x-0 top-0 p-6">
        <div className="translate-y-[-1rem] space-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/90">{location}</p>
        </div>
      </div>

      {/* Plus icon - bottom right */}
      <div className="absolute bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
        <Plus className="h-6 w-6 text-white" />
      </div>
    </Link>
  )
}