export interface Reference {
  slug: string
  title: string
  location: string
  completionDate: string
  surfaceArea: string
  description: string[]
  images: {
    src: string
    alt: string
  }[]
  mainImage: {
    src: string
    alt: string
  }
}

export const references: Reference[] = [
  {
    slug: "sports-field-hambourg",
    title: "SPORT FIELD - HAMBOURG (GERMANY)",
    location: "HAMBOURG (GERMANY)",
    completionDate: "2024",
    surfaceArea: "502 M²",
    description: [
      "Construction of a multi-sports arena in a school playground in Hamburg (Germany), the third to be built by SMC2!",
      "This 502m² project features a mixed timber and steel structure with a textile membrane roof.",
      "A wooden facade was installed to limit noise pollution, and the building's gable façades are enclosed with ballistic netting.",
      "In this construction, the courtyard is optimally protected from the elements, while retaining the benefits of natural light during the day thanks to the translucency of the stretched fabric.",
      "LED lighting is provided for evening use.",
      "This means the pitch can be used all year round, whatever the weather conditions!"
    ],
    images: [
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
      }
    ],
    mainImage: {
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80",
      alt: "Sports field aerial view"
    }
  },
  {
    slug: "sports-canopy-paris",
    title: "SPORTS CANOPY - PARIS (FRANCE)",
    location: "PARIS (FRANCE)",
    completionDate: "2023",
    surfaceArea: "450 M²",
    description: [
      "Design and construction of a sports canopy in Paris, featuring an innovative tensile structure.",
      "The project combines modern architectural design with practical functionality.",
      "The canopy provides year-round protection while maintaining excellent natural lighting.",
      "Special attention was paid to acoustic performance and environmental integration."
    ],
    images: [
      {
        src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1920&q=80",
        alt: "Sports canopy front view"
      },
      {
        src: "https://images.unsplash.com/photo-1571053748382-141b7de59b88?auto=format&fit=crop&w=1920&q=80",
        alt: "Sports canopy side view"
      },
      {
        src: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=1920&q=80",
        alt: "Sports canopy interior"
      }
    ],
    mainImage: {
      src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80",
      alt: "Sports canopy aerial view"
    }
  },
  // Add more references as needed...
]

export function getReference(slug: string) {
  return references.find(ref => ref.slug === slug)
}

export function getAdjacentReferences(slug: string) {
  const index = references.findIndex(ref => ref.slug === slug)
  
  return {
    previous: index > 0 ? references[index - 1] : null,
    next: index < references.length - 1 ? references[index + 1] : null
  }
}

export function getOtherReferences(slug: string, limit = 3) {
  return references
    .filter(ref => ref.slug !== slug)
    .slice(0, limit)
}