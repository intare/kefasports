import { Building, Globe, Users, ChartBar, Layout, Ruler } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface StatItem {
  Icon: LucideIcon
  label: string
  value: string
  sublabel?: string
}

export const stats: StatItem[] = [
  {
    Icon: Building,
    label: "FOUNDED IN 2003",
    value: "",
  },
  {
    Icon: Globe,
    label: "6 OFFICES IN FRANCE",
    sublabel: "GERMANY, UNITED KINGDOM, NORTH AMERICA",
    value: "3 SATELITE COMPANIES",
  },
  {
    Icon: ChartBar,
    label: "IN SALES REVENUES",
    value: "> 30 M€",
  },
  {
    Icon: Users,
    label: "EMPLOYEES",
    value: "> DE 80",
  },
  {
    Icon: Layout,
    label: "REFERENCES",
    value: "> 1000 +",
  },
  {
    Icon: Ruler,
    label: "OF SURFACE COVERED",
    value: "1 000 000 M²",
  }
]