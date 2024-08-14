import { useEffect, useState } from "react";
import { useHeroesGetAll } from "../../api/heroes";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination/Pagination";
import { RowHero } from "./components";
import "./index.css";

export function HeroesPage() {
  const [offset, setOffset] = useState(0);
  const { heroes, loading, error, fetchHeroes } = useHeroesGetAll();

  if (error) {
    alert(`Erro inesperado! Tente novamente mais tarde :(\n\n${error}`);
  }

  useEffect(() => {
    fetchHeroes(offset);
  }, [ offset]);

  return (
    <>
      {loading ? 
        (<Loading status={loading} />)
        :
        (
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
                {heroes && heroes.results.length > 0 ? (
                  heroes.results.map((element, index) => (
                    <RowHero
                      key={index}
                      heroData={element}
                    />
                  ))
                ) : <></>}
              </tbody>
            </table>
            {heroes && heroes.results.length > 0 ? (
              <Pagination
                limit={heroes.limit}
                total={heroes.total}
                offset={offset}
                setOffset={setOffset}
              />
            ) : <></>}
          </>
        )
      }
    </>
  )
}