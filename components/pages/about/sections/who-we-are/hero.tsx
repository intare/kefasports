export function WhoAreWeHero() {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1920&q=80"
          alt="Sports facility"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container relative z-10 flex h-full flex-col justify-center">
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-primary">SMC2 > WHO ARE WE ?</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">WHO ARE WE ?</h1>
          </div>
          <h2 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            THE SPACE<br />
            TAKES<br />
            SHAPE
          </h2>
        </div>
      </div>
    </div>
  )
}