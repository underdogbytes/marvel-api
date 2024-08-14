import "./index.css";

interface HeroProps {
  heroData: {
    name: string,
    series: {
      items: { name: string }[];
    },
    events: {
      items: { name: string }[];
    },
    thumbnail: {
      extension: string,
      path: string
    };
  }
}

export function RowHero({ heroData }: HeroProps) {
  const { thumbnail, name, series, events } = heroData;
  return (
    <>
      <tr>
        <td>
          <div>
            <img
              className="table--heroes__avatar"
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={`Foto de ${name}`}
            />
            <span className="table--heroes__name">{name}</span>
          </div>
        </td>
        <td>
          {series.items.length > 0 ? (
            <ul className="table--heroes__list">
              {series.items.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <span>Sem séries.</span>
          ) }
        </td>
        <td>
          {events.items.length > 0 ? (
            <ul className="table--heroes__list">
              {events.items.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          ) : (
              <span>Sem eventos.</span>
          )}
        </td>
      </tr>
    </>
  )
}