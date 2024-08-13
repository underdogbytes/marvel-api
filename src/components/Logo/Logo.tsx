import logoImg from "../../assets/logo.png";
import "./index.css";

export function Logo() {
  return (
    <img
      src={logoImg}
      alt="Logo Objective"
      className="navbar__logo"
    />
  )
}