import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "SPORT & PLAY",
    features: [
      ["SPORTS COMPLEXES", "ATHLETICS HALLS"],
      ["TENNIS AND PADEL", "BOULODROMES"],
      ["PREO® CANOPIES", "GRANDSTANDS"],
      ["FOOTBALL PITCHES", "PLAY AREAS"],
    ],
    image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=1920&q=80",
    href: "/services/sport-and-play"
  },
  {
    title: "STRUCTURES & ENVELOPES",
    features: [
      "TIMBER FRAMES",
      "SURFACE TENSILE ENVELOPES",
      "PARAMETRIC ARCHITECTURE",
      "GREEN ENVELOPES",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    href: "/services/structures"
  },
  {
    title: "EDUCATION",
    features: [
      "TIMBER SCHOOL BUILDINGS",
      "SCHOOL CANOPIES",
    ],
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80",
    href: "/services/education"
  }
]

export function Services() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold tracking-tight lg:text-4xl">
          OUR BUILDING CONSTRUCTION OFFER
        </h2>
        
        <div className="grid gap-6">
          {/* Sport & Play - Full width */}
          <ServiceCard {...services[0]} className="md:aspect-[21/9]" />
          
          {/* Structures & Education - Half width */}
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceCard {...services[1]} />
            <ServiceCard {...services[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  title: string
  features: string[] | string[][]
  image: string
  href: string
  className?: string
}

function ServiceCard({ title, features, image, href, className }: ServiceCardProps) {
  const isGrid = Array.isArray(features[0])
  
  return (
    <Link 
      href={href}
      className={cn(
        "group relative aspect-[4/3] overflow-hidden rounded-lg",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 p-8 md:p-12">
        <h3 className="mb-8 text-2xl font-bold text-white">{title}</h3>
        
        {isGrid ? (
          <div className="grid gap-4 text-sm font-medium md:grid-cols-2">
            {(features as string[][]).map((column, i) => (
              <div key={i} className="space-y-4">
                {column.map((feature, j) => (
                  <p key={j} className="text-white/90">{feature}</p>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 text-sm font-medium">
            {(features as string[]).map((feature, i) => (
              <p key={i} className="text-white/90">{feature}</p>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}