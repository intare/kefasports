import Image from "next/image"

export function AboutVision() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=1920&auto=format&fit=crop"
              alt="Modern sports facility"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Vision
              </h3>
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                Creating Spaces That Inspire Excellence
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We envision a future where every community has access to world-class sports 
              facilities that promote health, wellness, and athletic achievement. Our 
              commitment to innovation and sustainability drives us to create spaces that 
              not only meet today&apos;s needs but anticipate tomorrow&apos;s challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}