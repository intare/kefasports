export function ReferencesBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-muted/20" />
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-repeat-y bg-contain opacity-20"
          style={{ 
            backgroundSize: "100% auto",
            backgroundPosition: "center"
          }} 
        />
      </div>
    </>
  )
}