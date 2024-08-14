import { useEffect, useState } from "react";
import { useHeroesGetAll } from "../../api/heroes";
import lupa from "../../assets/icons/lupa.png";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination/Pagination";
import { RowHero } from "./components";
import "./index.css";

export function HeroesPage() {
  const [offset, setOffset] = useState(0);
  const { heroes, loading, error, fetchHeroes } = useHeroesGetAll();
  const [nameFilter, setNameFilter] = useState("");

  if (error) {
    alert(`Erro inesperado! Tente novamente mais tarde :(\n\n${error}`);
  }

  useEffect(() => {
    fetchHeroes(offset, nameFilter);
  }, [offset]);
  
  const handleSearch = () => {
    setOffset(0);
    fetchHeroes(0, nameFilter);
  };

  return (
    <>
      {loading ? 
        (<Loading status={loading} />)
        :
        (
          <>
            <header>
              <h1>Busca de personagens</h1>

              <form className="form--heroes__search">
                <label>Nome do personagem</label>
                <div className="form--heroes__search__input-btn">
                  <input
                    type="text"
                    placeholder="Buscar"
                    value={nameFilter}
                    onChange={(event) => setNameFilter(event.target.value)}
                  />
                  <button onClick={handleSearch}>
                    <img src={lupa} alt="Ícone de lupa" />
                  </button>
                </div>
              </form>
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