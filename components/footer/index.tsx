import { FooterTop } from "./top"
import { FooterBottom } from "./bottom"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <FooterTop />
      <div className="border-t border-muted">
        <FooterBottom />
      </div>
    </footer>
  )
}