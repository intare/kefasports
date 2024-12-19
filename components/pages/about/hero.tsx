export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Building Excellence in Sports Infrastructure
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            With over two decades of experience, we&apos;ve been at the forefront of sports facility construction, 
            creating spaces that inspire athletic achievement and community engagement.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-repeat opacity-10" />
    </section>
  )
}