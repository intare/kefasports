"use client"

import { LucideIcon } from "lucide-react"

interface StatsItemProps {
  Icon: LucideIcon
  label: string
  value: string
  sublabel?: string
}

export function StatsItem({ Icon, label, value, sublabel }: StatsItemProps) {
  return (
    <div className="text-center text-white">
      <Icon className="mx-auto mb-4 h-12 w-12 opacity-90" />
      <div className="space-y-2">
        {value && (
          <p className="text-2xl font-bold">{value}</p>
        )}
        <p className="text-sm font-medium">{label}</p>
        {sublabel && (
          <p className="text-xs text-white/80">{sublabel}</p>
        )}
      </div>
    </div>
  )
}