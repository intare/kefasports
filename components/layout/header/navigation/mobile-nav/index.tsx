"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TriggerButton } from "./trigger-button"
import { SheetContent as MobileNavContent } from "./sheet-content"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <TriggerButton />
      </SheetTrigger>
      <SheetContent side="right">
        <MobileNavContent />
      </SheetContent>
    </Sheet>
  )
}