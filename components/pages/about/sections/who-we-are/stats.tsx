import { Building, Globe, Users, ChartBar, Layout, Ruler } from "lucide-react"

const stats = [
  {
    icon: Building,
    title: "FOUNDED IN 2003",
    value: "",
  },
  {
    icon: Globe,
    title: "6 OFFICES IN FRANCE",
    subtitle: "GERMANY, UNITED KINGDOM, NORTH AMERICA",
    value: "3 SATELITE COMPANIES",
  },
  {
    icon: ChartBar,
    title: "IN SALES REVENUES",
    value: "> 30 M€",
  },
  {
    icon: Users,
    title: "EMPLOYEES",
    value: "> DE 80",
  },
  {
    icon: Layout,
    title: "REFERENCES",
    value: "> 1000 +",
  },
  {
    icon: Ruler,
    title: "OF SURFACE COVERED",
    value: "1 000 000 M²",
  }
]

export function WhoAreWeStats() {
  return (
    <div className="bg-primary py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-white">KefaSports IN NUMBERS</h2>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center text-white">
              <stat.icon className="mx-auto mb-4 h-12 w-12" />
              <div className="space-y-2">
                {stat.value && (
                  <p className="text-2xl font-bold">{stat.value}</p>
                )}
                <p className="text-sm font-medium">{stat.title}</p>
                {stat.subtitle && (
                  <p className="text-xs text-white/80">{stat.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
