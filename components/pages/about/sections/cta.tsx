import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/90">
            Let&apos;s discuss your project and create spaces that inspire.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-2 px-8 text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10" />
    </section>
  )
}