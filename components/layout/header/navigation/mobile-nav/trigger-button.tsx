"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TriggerButton() {
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="lg:hidden"
      aria-label="Open menu"
    >
      <Menu className="h-6 w-6" />
    </Button>
  )
}