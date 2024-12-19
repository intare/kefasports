import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutContent() {
  return (
    <div className="flex flex-col justify-center space-y-8 pl-0 lg:pl-8">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
          ABOUT KEFASPORTS
        </h3>
        <h2 className="space-y-2 text-4xl font-bold tracking-tight lg:text-5xl">
          <span className="block">IMAGINE CONCEIVE</span>
          <span className="block">CONSTRUCT</span>
          <span className="block text-primary">PLEASANT</span>
          <span className="block text-primary">SUSTAINABLE</span>
          <span className="block">FACILITIES FOR A</span>
          <span className="block">BRIGHTER FUTURE</span>
        </h2>
      </div>
      <p className="text-lg leading-relaxed text-muted-foreground">
        Our Specialists in residential & commercial sport facilities development.
        Sport Facilities | Pools | Playgrounds.
      </p>
      <div className="flex flex-col gap-4 pt-4 sm:flex-row">
        <Button
          asChild
          className="group relative w-fit bg-primary px-8 py-6 text-sm font-semibold uppercase tracking-wider"
        >
          <Link href="/about">
            Discover the Company
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="group relative w-fit border-2 px-8 py-6 text-sm font-semibold uppercase tracking-wider hover:bg-primary/5"
        >
          <Link href="/brochure">
            Download Our Brochure
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </Button>
      </div>
    </div>
  )
}