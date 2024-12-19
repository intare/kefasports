import { Building, Globe, Users, ChartBar, Layout, Ruler } from "lucide-react"

const stats = [
  {
    icon: Building,
    value: "",
    label: "FOUNDED IN 2003"
  },
  {
    icon: Globe,
    value: "3 SATELITE COMPANIES",
    label: "6 OFFICES IN FRANCE",
    sublabel: "GERMANY, UNITED KINGDOM, NORTH AMERICA"
  },
  {
    icon: ChartBar,
    value: "> 30 M€",
    label: "IN SALES REVENUES"
  },
  {
    icon: Users,
    value: "> DE 80",
    label: "EMPLOYEES"
  },
  {
    icon: Layout,
    value: "> 1000 +",
    label: "REFERENCES"
  },
  {
    icon: Ruler,
    value: "1 000 000 M²",
    label: "OF SURFACE COVERED"
  }
]

export function Stats() {
  return (
    <section className="bg-[#E31E24] py-24">
      <div className="container">
        <h2 className="text-center text-3xl font-bold text-white">SMC2 IN NUMBERS</h2>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <stat.icon className="mx-auto mb-4 h-12 w-12 opacity-90" />
              <div className="space-y-2">
                {stat.value && (
                  <p className="text-2xl font-bold">{stat.value}</p>
                )}
                <p className="text-sm font-medium">{stat.label}</p>
                {stat.sublabel && (
                  <p className="text-xs text-white/80">{stat.sublabel}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}