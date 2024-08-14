import { Hero } from "../../../interfaces/Hero";
import "./index.css";

interface RowHeroProps {
  heroData: Hero;
  getModal?: (id: number) => void;
}

export function RowHero({ heroData, getModal }: RowHeroProps) {
  const { id, thumbnail, name, series, events } = heroData;
  const handleModal = () => {
    if (getModal) {
      getModal(id);
    }
  };
  return (
    <>
      <tr onClick={handleModal}>
        <td>
          <div>
            <img
              className="table--heroes__avatar"
              src={`${thumbnail?.path}.${thumbnail?.extension}`}
              alt={`Foto de ${name}`}
            />
            <span className="table--heroes__name">{name}</span>
          </div>
        </td>
        <td>
          {series?.items && series.items.length > 0 ? (
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
          {events?.items && events.items.length > 0 ? (
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