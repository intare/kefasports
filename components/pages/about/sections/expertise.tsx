import { Shield, Zap, Heart, Users } from "lucide-react"

const expertise = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous standards and meticulous attention to detail in every project.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge solutions and advanced construction methodologies.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Eco-friendly practices and sustainable building solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong partnerships with clients, architects, and communities.",
  },
]

export function AboutExpertise() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-24">
      <div className="container relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Our Expertise</h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto" />
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl bg-background p-8 shadow-sm transition-all hover:shadow-md"
            >
              <item.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-repeat opacity-5" />
    </section>
  )
}