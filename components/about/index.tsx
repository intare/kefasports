import { AboutContent } from "./content"
import { AboutImage } from "./image"

export function About() {
  return (
    <section className="relative -mt-20 bg-gradient-to-b from-transparent to-white pb-16 pt-32 dark:to-background">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  )
}