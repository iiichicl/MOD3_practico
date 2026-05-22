export default function HeroeCard({hero,isFavorite,toggleFavorite,}) {
  return (
    <div
      className={`card ${
        isFavorite ? "favorite" : ""
      }`}
    >
      <h3>{hero.nombre}</h3>
      <p className="poder">{hero.poder}</p>
      <button
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