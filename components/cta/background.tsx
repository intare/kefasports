export function CtaBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary" />
    </>
  )
}