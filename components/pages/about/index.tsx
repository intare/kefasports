import { AboutHero } from "./sections/hero"
import { AboutVision } from "./sections/vision"
import { AboutExpertise } from "./sections/expertise"
import { AboutTeam } from "./sections/team"
import { AboutCta } from "./sections/cta"

export function AboutPage() {
  return (
    <main className="relative">
      <AboutHero />
      <AboutVision />
      <AboutExpertise />
      <AboutTeam />
      <AboutCta />
    </main>
  )
}