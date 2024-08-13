import { RowHero } from "./components";
import "./index.css";

export function HeroesPage() {
  const fakeData = [
    {
      imgSrc: 'teste',
      name: 'Bruce Banner',
      series: ['exemplo 1'],
      events: ['exemplo 2'],
    },
    {
      imgSrc: 'teste',
      name: 'Bruce Banner',
      series: ['exemplo 1'],
      events: ['exemplo 2'],
    }
  ]
  return (
    <>
      <header>
        <h1>Busca de personagens</h1>

        <div className="form--heroes__search">
          <label>Nome do personagem</label>
          <input type="text" placeholder="Buscar" />
        </div>
      </header>

      <table className="table--heroes">
        <thead>
          <tr>
            <th>Personagem</th>
            <th>Séries</th>
            <th>Eventos</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((element, index) => (
            <RowHero
              key={index}
              heroData={element}
            />
          ))}
        </tbody>
      </table>

      <div>
        paginação
      </div>
    </>
  )
}