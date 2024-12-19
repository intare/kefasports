import { Users, Trophy, Timer } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "2M+",
    label: "Active Users",
  },
  {
    icon: Trophy,
    value: "50K+",
    label: "Live Matches",
  },
  {
    icon: Timer,
    value: "24/7",
    label: "Support",
  },
]

export function AboutStats() {
  return (
    <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg border bg-card p-8 shadow-sm transition-colors hover:bg-accent/50"
        >
          <stat.icon className="mb-4 h-8 w-8 text-primary" />
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}