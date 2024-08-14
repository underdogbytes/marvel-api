import { useEffect, useState } from "react";
import { Routes } from "../routes/heroes";

export const useRouter = () => {
  const [route, setRoute] = useState<Routes>(Routes.HOME);

  const navigate = (newRoute: Routes) => {
    window.history.pushState({}, '', newRoute); // url
    setRoute(newRoute); // estado da rota
    window.location.reload();
  }

  // mantendo o estado:
  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname as Routes;
      // verificando se a rota existe:
      if (Object.values(Routes).includes(path)) {
        setRoute(path);
      } else {
        setRoute(Routes.ERROR);
      }
    }

    window.addEventListener("popstate", onPopState);
    onPopState();

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return { route, navigate };
}