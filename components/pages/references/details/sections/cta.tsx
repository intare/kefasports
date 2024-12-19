import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReferenceCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <div className="container relative z-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">A PROJECT ?</h2>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-primary"
          >
            <Link href="/contact">CONTACT US!</Link>
          </Button>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-[url('/patterns/circuit.svg')] bg-repeat opacity-10"
      />
    </section>
  )
}