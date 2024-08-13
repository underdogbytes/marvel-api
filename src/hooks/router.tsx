import { useEffect, useState } from "react";
import { Routes } from "../routes/heroes";

export const useRouter = () => {
  const [route, setRoute] = useState<Routes>(Routes.HOME);

  const navigate = (newRoute: Routes) => {
    setRoute(newRoute);
    window.history.pushState(null, "", newRoute)
  }

  // keep the state to the "Return page" btn:
  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname.slice(1) as Routes;
      setRoute(path || Routes.HOME);
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return { route, navigate };
}