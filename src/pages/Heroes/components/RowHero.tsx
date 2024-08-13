import "./index.css";

interface HeroProps {
  heroData: {
    imgSrc: string,
    name: string,
    series: string[],
    events: string[]
  }
}

export function RowHero({ heroData }: HeroProps) {
  const { imgSrc, name, series, events } = heroData;
  return (
    <>
      <tr>
        <td>
          <img
            className="table--heroes__avatar"
            src={imgSrc} alt="Imagem do personagem"
          />
          <span className="table--heroes__name">{name}</span>
        </td>
        <td>{ series.join(', ') }</td>
        <td>{ events.join(', ') }</td>
      </tr>
    </>
  )
}