"use client"

import Image from "next/image"

const images = [
  {
    src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1920&q=80",
    alt: "Sports field front view"
  },
  {
    src: "https://images.unsplash.com/photo-1571053748382-141b7de59b88?auto=format&fit=crop&w=1920&q=80",
    alt: "Sports field side view"
  },
  {
    src: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=1920&q=80",
    alt: "Sports field interior"
  },
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80",
    alt: "Sports field aerial view"
  }
]

export function ReferenceGallery() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="space-y-8">
          <div className="prose max-w-none">
            <p>Construction of a multi-sports arena in a school playground in Hamburg (Germany), the third to be built by SMC2!</p>
            <p>This 502m² project features a mixed timber and steel structure with a textile membrane roof.</p>
            <p>A wooden facade was installed to limit noise pollution, and the building's gable façades are enclosed with ballistic netting.</p>
            <p>In this construction, the courtyard is optimally protected from the elements, while retaining the benefits of natural light during the day thanks to the translucency of the stretched fabric.</p>
            <p>LED lighting is provided for evening use.</p>
            <p>This means the pitch can be used all year round, whatever the weather conditions!</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {images.slice(0, 3).map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}