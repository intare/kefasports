import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            Let&apos;s discuss your vision and create spaces that inspire athletic excellence.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-[url('/patterns/circuit.svg')] bg-repeat opacity-10"
      />
    </section>
  )
}