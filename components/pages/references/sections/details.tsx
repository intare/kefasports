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

export function ReferenceDetails() {
  return (
    <section className="bg-muted/30 py-8">
      <div className="container">
        <div className="space-y-2">
          <DetailItem label="LOCATION" value="HAMBOURG (GERMANY)" />
          <DetailItem label="COMPLETION DATE" value="2024" />
          <DetailItem label="SURFACE AREA" value="502 M²" />
        </div>
      </div>
    </section>
  )
}