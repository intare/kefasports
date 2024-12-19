import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroContent() {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-0">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Experience
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            KefaSports 
          </span>
          <br />
          Like Never Before
        </h1>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg" className="h-12 px-8">
          <Link href="/sports">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {/* 
        <Button asChild size="lg" variant="outline" className="h-12 px-8">
          <Link href="/matches">Live Matches</Link>
        </Button>
        */}
      </div>
    </div>
  )
}