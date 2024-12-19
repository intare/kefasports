import { Shield, Zap, Heart, Users, Recycle, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous standards and meticulous attention to detail in every project."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge solutions and advanced construction methodologies."
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Dedicated support and personalized solutions for every client."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled professionals with extensive industry experience."
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "Eco-friendly practices and sustainable building solutions."
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Industry certifications and proven track record of success."
  }
]

export function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our commitment to excellence sets us apart
          </p>
          <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg bg-muted/40 p-8 transition-colors hover:bg-muted/60"
            >
              <feature.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}