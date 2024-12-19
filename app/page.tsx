import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Offers } from "@/components/offers"
import { References } from "@/components/references"
import { Cta } from "@/components/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Offers />
      <References />
      <Cta />
    </>
  )
}