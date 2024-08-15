import { useEffect } from "react";
import { useGetComics, useGetHero } from "../../api/heroes";
import stanlee from "../../assets/stanlee.gif";
import { Loading } from "../../components/Loading";
import "./index.css";

interface HeroPageProps {
  heroId: string
}

export function HeroPage({ heroId }: HeroPageProps) {
  const { hero, loading: heroLoading, error: heroError, fetchHero } = useGetHero(Number(heroId));
  const { comics, loading: comicsLoading, error: comicsError, fetchComics } = useGetComics(Number(heroId));

  useEffect(() => {
    fetchHero(Number(heroId));
    fetchComics(Number(heroId));
  }, []);

  if (heroError) {
    return <div>Erro ao buscar o herói: {heroError.message}</div>;
  }
  return (
    <>
      {heroLoading ? (
        <Loading status={heroLoading} />
      ) : (
          <div>
            <div
              className="hero__header"
              style={{ backgroundImage: `url(${hero?.thumbnail.path}.${hero?.thumbnail.extension})` }}
            >
              <div>
                <h2>{hero?.name}</h2>
                <p>{hero?.description ? hero.description : "A API não nos contou nada sobre, mas temos certeza que foi um grande personagem :D"}</p>
              </div>
            </div>

            {/* QUADRINHOS */}
            <div>
              <div className="hero__header--sub">
                <h3>HQs</h3>
                <small>{hero?.comics?.available} quadrinhhos</small>
              </div>
              <div>
                {comicsLoading ? (
                  <div>
                    <h4>Aguarde, estamos caçando os quadrinhos!</h4>
                    <img src={stanlee} alt="" />
                    <br />
                    <small>Não desista, a API demora mas funciona :D</small>
                  </div>
                  ) :
                  <div>
                    {comics && Array.isArray(comics) && comics.length > 0 ? (
                      <ul className="hero__hqs">
                        {comics.map((item, index) => (
                          <li key={index}>
                            <h5>{item.title}</h5>
                            {item["images"].map((img: any, i: number) => (
                              <img key={i} src={`${img.path}.${img.extension}`} alt={`Comic image ${i}`} />
                            ))}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span>Este personagem ainda não tem quadrinhos :(</span>
                    )}
                  </div>
                }
              </div>
            </div>

            {/* SÉRIES */}
            <div>
              <div className="hero__header--sub">
                <h3>Séries</h3>
                <small>{hero?.series?.available} séries</small>
              </div>
              <div>
                {hero?.series?.items && hero?.series.items.length > 0 ? (
                  <ul className="table--heroes__list">
                    {hero?.series.items.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                ) : (
                  <span>Este personagem ainda não tem séries :(</span>
                )}
              </div>
            </div>

            {/* HISTÓRIAS */}
            <div>
              <div className="hero__header--sub">
                <h3>Histórias</h3>
                <small>{hero?.stories?.available} histórias</small>
              </div>
              <div>
                {hero?.stories?.items && hero?.stories.items.length > 0 ? (
                  <ul className="table--heroes__list">
                    {hero?.stories.items.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                ) : (
                  <span>Este personagem ainda não tem histórias :(</span>
                )}
              </div>
            </div>
          </div>
      )}
    </>
  )
}