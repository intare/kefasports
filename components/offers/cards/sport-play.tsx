import { OfferCard } from "./card"

const features = [
  ["SWIMMING POOLS"],
  ["TENNIS AND PADEL"],
  ["BASKETBALL COURTS"],
  ["FOOTBALL PITCHES"],
]

export function SportAndPlay() {
  return (
    <div className="relative flex">
      {/* Left Card with Features and Blended Overlay */}
      <div
        className="relative z-10 w-1/2 text-white p-4"
        style={{ backgroundColor: '#3B82F6', opacity: 0.8 }}
      >
        <h2 className="text-2xl font-bold">SPORT & PLAY</h2>
        <ul className="mt-2 space-y-2">
          {features.map((featureGroup, index) => (
            <li key={index} className="flex justify-between">
              <span>{featureGroup[0]}</span>
              <span>{featureGroup[1]}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Card with Image */}
      <div className="relative z-0 w-1/2">
        <img
          src="/gallery/court1.jpg"
          alt="Children playing sports"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}