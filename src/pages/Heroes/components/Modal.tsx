import { useRouter } from "../../../hooks/router";
import { getHeroRoute } from "../../../routes/heroes";

interface ModalProps {
  hero: any,
  changeStatus: (status: boolean) => void;
}
export function Modal({ hero, changeStatus }: ModalProps) {
  const { navigate } = useRouter();
  const handleModal = () => {
    changeStatus(false);
  }
  const goToCharacterPage = () => {
    navigate(getHeroRoute(hero.id))
  }
  return (
    <div className="modal">
      <div className="modal__content">
        <span
          className="modal__close"
          onClick={handleModal}
        >
          &times;
        </span>
        
        <div
          className="modal--hero__header"
          style={{ backgroundImage: `url(${hero.thumbnail.path}.${hero.thumbnail.extension})` }}
        >
          <div>
            <h2>{hero.name}</h2>
            <p>{hero.description ? hero.description : "A API não nos contou nada sobre, mas temos certeza que foi um grande personagem :D"}</p>
          </div>
        </div>

        <button
          onClick={goToCharacterPage}
          style={{ width: "100%", borderRadius: "0" }}>
          Ir para a página do personagem
        </button>
      </div>
    </div>
  )
}