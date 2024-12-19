import { Logo } from "./logo"
import { TopBarActions } from "./actions"

export function TopBar() {
  return (
    <div className="flex h-16 items-center justify-between border-b">
      <Logo />
      <TopBarActions />
    </div>
  )
}