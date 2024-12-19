export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] bg-[#0A0F1D] py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-sm font-medium uppercase tracking-wider text-[#3B82F6]">
            OUR RAISON D&apos;ÊTRE
          </h3>
          <div className="mt-8 space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                IMAGINE CONCEIVE
              </h1>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                CONSTRUCT
              </h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight text-[#3B82F6] sm:text-6xl lg:text-7xl">
                PLEASANT
              </h1>
              <h1 className="text-5xl font-bold tracking-tight text-[#3B82F6] sm:text-6xl lg:text-7xl">
                SUSTAINABLE
              </h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                SPACES FOR A
              </h1>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                BRIGHTER FUTURE
              </h1>
            </div>
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-gray-400">
            Your expert in structures and envelopes and in the construction of sports
            buildings and playgrounds.
          </p>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-repeat opacity-[0.02]"
        style={{
          backgroundSize: '100% auto',
          backgroundPosition: 'center'
        }}
      />
    </section>
  )
}