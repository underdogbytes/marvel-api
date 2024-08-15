import { Logo } from "../Logo";
import "./index.css";

export function Navbar() {
  return (
    <>
      <nav>
        <a href="/"><Logo /></a>
        
        {/* TODO: mobile toggle and improve code */}
        <div className="navbar__menu mobile">
          <span></span>
        </div>

        <div className="navbar__menu desktop">
          <a
            href="https://underdogbytes.com"
            target="_blank"
            rel="noreferrer"
          >
            Beatriz Pereira Lima
          </a>

          <a
            href="https://rh-objective.s3.amazonaws.com/teste-front-end-react-projeto-code-hero-marvel-v2.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Teste de Front-end
          </a>

          <span className="nav__user-avatar">BL</span>
        </div>
      </nav>
    </>
  )
}