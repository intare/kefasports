import { CtaContent } from "./content"
import { CtaBackground } from "./background"

export function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 py-24">
        <CtaContent />
      </div>
      <CtaBackground />
    </section>
  )
}