import { useCallback } from "react"

export interface Reference {
  title: string
  location: string
  image: string
  href: string
}

const references: Reference[] = [
  {
    title: "GYMNASIUM",
    location: "AVRANCHES (FRANCE)",
    image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=1920&q=80",
    href: "/references/gymnasium-avranches",
  },
  {
    title: "SPORTS CANOPY",
    location: "PARIS (FRANCE)",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=1920&q=80",
    href: "/references/sports-canopy-paris",
  },
  {
    title: "TENNIS COMPLEX",
    location: "LYON (FRANCE)",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=1920&q=80",
    href: "/references/tennis-complex-lyon",
  },
  {
    title: "INDOOR COURT",
    location: "MARSEILLE (FRANCE)",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?auto=format&fit=crop&w=1920&q=80",
    href: "/references/indoor-court-marseille",
  },
  {
    title: "SPORTS HALL",
    location: "BORDEAUX (FRANCE)",
    image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=1920&q=80",
    href: "/references/sports-hall-bordeaux",
  },
  {
    title: "CLIMBING CENTER",
    location: "NICE (FRANCE)",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1920&q=80",
    href: "/references/climbing-center-nice",
  },
  {
    title: "AQUATIC CENTER",
    location: "TOULOUSE (FRANCE)",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=80",
    href: "/references/aquatic-center-toulouse",
  },
  {
    title: "FITNESS CENTER",
    location: "LILLE (FRANCE)",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
    href: "/references/fitness-center-lille",
  },
  {
    title: "DANCE STUDIO",
    location: "NANTES (FRANCE)",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=80",
    href: "/references/dance-studio-nantes",
  },
]

export function useReferences() {
  const getReferences = useCallback(() => references, [])

  return {
    references: getReferences(),
  }
}