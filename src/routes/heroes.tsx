export enum Routes {
  HOME = "/",
  HERO = "hero",
  ERROR = "error"
}

export function getHeroRoute(id: string | number) {
  return `${Routes.HERO}/${id}`;
}