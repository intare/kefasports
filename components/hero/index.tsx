import { HeroContent } from "./content"
import { HeroSlideshow } from "./slideshow"

export function Hero() {
  return (
    <section className="container relative h-[calc(100vh-3.5rem)]">
      <div className="grid h-full grid-cols-1 md:grid-cols-[0.8fr,1fr] lg:grid-cols-[0.7fr,1fr]">
        <div className="flex items-center justify-center md:justify-start">
          <HeroContent />
        </div>
        <div className="relative hidden h-full md:block">
          <HeroSlideshow />
        </div>
      </div>
    </section>
  )
}