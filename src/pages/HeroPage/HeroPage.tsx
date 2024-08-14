interface HeroPageProps {
  heroId: string
}

export function HeroPage({ heroId }: HeroPageProps) {
  return (
    <>
      hero id:
      {heroId}
    </>
  )
}