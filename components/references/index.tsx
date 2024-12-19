import { ReferencesHeader } from "./header"
import { ReferencesGrid } from "./grid"
import { ReferencesBackground } from "./background"

export function References() {
  return (
    <section className="relative py-24">
      <ReferencesBackground />
      <div className="container relative z-10">
        <ReferencesHeader />
        <ReferencesGrid />
      </div>
    </section>
  )
}