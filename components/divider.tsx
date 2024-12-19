export function Divider() {
  return (
    <div className="relative py-12">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-muted" />
      </div>
      <div className="relative flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-muted bg-background">
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>
      </div>
    </div>
  )
}