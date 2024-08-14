import { useRouter } from "../../hooks/router";
import { Routes } from "../../routes/heroes";

export function ErrorPage() {
  const { navigate } = useRouter();
  return (
    <>
      <h1>Ooops, 404!</h1>
      <p>Essa página não existe :)</p>
      <button onClick={() => navigate(Routes.HOME)}>Retornar a home</button>
    </>
  )
}