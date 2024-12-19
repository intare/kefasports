"use client"

import Image from "next/image"
import { Reference } from "@/lib/references"

interface ReferenceGalleryProps {
  reference: Reference
}

export function ReferenceGallery({ reference }: ReferenceGalleryProps) {
  const allImages = [...reference.images, reference.mainImage]

  return (
    <section className="py-12">
      <div className="container">
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {reference.images.map((image, index) => (
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
              src={reference.mainImage.src}
              alt={reference.mainImage.alt}
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