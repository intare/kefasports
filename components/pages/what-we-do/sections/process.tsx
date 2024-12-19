import { CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Consultation & Planning",
    description: "In-depth analysis of requirements and development of comprehensive project plans."
  },
  {
    number: "02",
    title: "Design & Engineering",
    description: "Innovative design solutions backed by expert engineering and sustainability principles."
  },
  {
    number: "03",
    title: "Construction",
    description: "Efficient execution with strict quality control and safety measures."
  },
  {
    number: "04",
    title: "Delivery & Support",
    description: "Thorough testing, documentation, and ongoing maintenance support."
  }
]

export function Process() {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-24 md:py-32">
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A systematic approach to delivering excellence
          </p>
          <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-lg bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                <span className="text-lg font-bold">{step.number}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-repeat opacity-[0.02]"
        style={{
          backgroundSize: '100% auto',
          backgroundPosition: 'center'
        }}
      />
    </section>
  )
}