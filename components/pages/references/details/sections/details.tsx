import { Reference } from "@/lib/references"

interface DetailItemProps {
  label: string
  value: string
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-medium uppercase">{label}</span>
      <span className="text-primary">{value}</span>
    </div>
  )
}

interface ReferenceDetailsProps {
  reference: Reference
}

export function ReferenceDetails({ reference }: ReferenceDetailsProps) {
  return (
    <section className="bg-muted/30 py-8">
      <div className="container">
        <div className="space-y-2">
          <DetailItem label="LOCATION" value={reference.location} />
          <DetailItem label="COMPLETION DATE" value={reference.completionDate} />
          <DetailItem label="SURFACE AREA" value={reference.surfaceArea} />
        </div>
      </div>
    </section>
  )
}