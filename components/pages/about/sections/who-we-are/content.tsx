interface DirectorProps {
  name: string
  role: string
}

function Director({ name, role }: DirectorProps) {
  return (
    <div>
      <h4 className="font-bold">{name}</h4>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  )
}

export function WhoAreWeContent() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        <h3 className="text-xl font-medium">
          KefaSports is a specialist international design & build company headquartered to Omega House, Ground Floor, KN 3 ave, Kiyovu, Kigali, Rwanda.
        </h3>
        
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-muted-foreground">
            Respect for nature lies at the core of our activities. As developers and builders of both simple
            and complex structures we contribute to the provision of spaces that are both sustainable and
            pleasant to use.
          </p>
          
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
        
        <div className="flex flex-wrap justify-between gap-8 pt-8">
          <Director name="Nicolas Robin" role="Managing Director" />
          <Director name="Samuel Guilliermard" role="Deputy Managing Director" />
        </div>
      </div>
    </div>
  )
}
