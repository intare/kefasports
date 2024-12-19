import { Reference } from "@/lib/references"

interface ReferenceHeaderProps {
  reference: Reference
}

export function ReferenceHeader({ reference }: ReferenceHeaderProps) {
  return (
    <div className="bg-muted/30 py-8">
      <div className="container">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            SMC2 > {reference.title}
          </p>
          <h1 className="text-4xl font-bold">
            {reference.title}
          </h1>
        </div>
      </div>
    </div>
  )
}