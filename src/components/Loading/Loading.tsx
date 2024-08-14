import deadpool from "../../assets/deadpool.gif"
import "./index.css"

interface Loading {
  status: boolean
}
export function Loading({status}: Loading) {
  return (
    <div className="loading">
      {status == true ?
        (
          <div>
            <img src={deadpool} alt="Ícone de carregamento" />
            <p>Aguarde...</p>
          </div>
        )
      : "não"}
    </div>
  )
}