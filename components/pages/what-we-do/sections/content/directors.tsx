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

export function Directors() {
  return (
    <div className="flex flex-wrap justify-between gap-8 border-t pt-8">
      <Director name="Nicolas Robin" role="Managing Director" />
      <Director name="Samuel Guilliermard" role="Deputy Managing Director" />
    </div>
  )
}