"use client"

export function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=1920&auto=format&fit=crop"
          alt="Sports facility"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      
      <div className="container relative z-10 flex h-full flex-col justify-center">
        <div className="space-y-2">
          <p className="text-sm font-medium text-primary">SMC2 > WHO ARE WE ?</p>
          <h1 className="text-3xl font-bold text-white">WHO ARE WE ?</h1>
          <h2 className="mt-8 text-6xl font-bold text-white md:text-7xl lg:text-8xl">
            THE SPACE<br />
            TAKES<br />
            SHAPE
          </h2>
        </div>
      </div>
    </section>
  )
}