import { SportAndPlay } from "./cards/sport-play"
import { Structures } from "./cards/structures"
import { Education } from "./cards/education"

export function OffersGrid() {
  return (
    <div className="grid gap-6">
      <SportAndPlay />
      <div className="grid gap-6 md:grid-cols-2">
        <Structures />
        <Education />
      </div>
    </div>
  )
}