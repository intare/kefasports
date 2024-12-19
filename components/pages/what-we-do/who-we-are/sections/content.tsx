export function Content() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-xl font-medium leading-relaxed">
            SMC2 is a specialist international design & build company headquartered near to Lyon in
            France with offices in Frankfurt, London and Montreal.
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Respect for nature lies at the core of our activities. As developers and builders of both simple
                and complex structures we contribute to the provision of spaces that are both sustainable and
                pleasant to use.
              </p>
              <p className="text-muted-foreground">
                Every day, our teams provide aesthetic functional buildings to private and public sector clients
                matching ecologically responsibility with affordability.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                New ideas are the foundation of our creativity. We express this desire in our dialogue and
                exchanges with our partners whether they be architects, consultancy firms, municipalities,
                private institutions, suppliers or manufacturers.
              </p>
              <p className="text-muted-foreground">
                Our foremost commitment is in accompanying our clients from a project's conception through to
                its successful fruition.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-between gap-8 border-t pt-8">
            <div>
              <h3 className="font-bold">Nicolas Robin</h3>
              <p className="text-sm text-muted-foreground">Managing Director</p>
            </div>
            <div>
              <h3 className="font-bold">Samuel Guilliermard</h3>
              <p className="text-sm text-muted-foreground">Deputy Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}