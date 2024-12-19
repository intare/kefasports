import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaContent() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Have a Project in Mind?
      </h2>
      <p className="mb-8 text-lg text-white/90">
        Let&apos;s bring your vision to life. Our team of experts is ready to help you create the perfect space.
      </p>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="group h-12 border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-primary"
      >
        <Link href="/contact">
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  )
}