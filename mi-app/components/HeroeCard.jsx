export default function HeroeCard({hero,isFavorite,toggleFavorite,}) {
  return (
    <div
      className={`card ${
        isFavorite ? "favorite" : ""
      }`}
    >
      <div
        className={
          isFavorite
            ? "icono icono-favorito"
            : "icono"
        }
      >
        {hero.inicial}
      </div>
      <h3>{hero.nombre}</h3>
      <p className="poder">{hero.poder}</p>
      <button
        className={
          isFavorite
            ? "btn-favorito"
            : "btn-normal"
        }
        onClick={() =>
          toggleFavorite(hero.id)
        }
      >
        {isFavorite
          ? "♥ Favorito"
          : "♡ Favorito"}
      </button>
    </div>
  );
}