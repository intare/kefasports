import { Award, Heart, Lightbulb, Recycle } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every project, ensuring the highest quality standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing new technologies and methods to create cutting-edge sports facilities.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "Committed to environmental responsibility in all our construction practices.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building spaces that bring people together and foster community engagement.",
  },
]

export function AboutValues() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto" />
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-lg bg-background p-8 shadow-sm transition-colors hover:bg-accent"
            >
              <value.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}