import { Shield, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Platform",
    description:
      "Advanced security measures to protect your data and ensure a safe viewing experience.",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Streaming",
    description:
      "Low-latency streaming technology for real-time sports action without delays.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description:
      "Tailored content and recommendations based on your favorite sports and teams.",
  },
]

export function AboutFeatures() {
  return (
    <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group rounded-lg border bg-card p-8 shadow-sm transition-colors hover:bg-accent/50"
        >
          <feature.icon className="mb-4 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <h3 className="mb-2 font-semibold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}