export default function HeroCard({
  hero,
  isFavorite,
  toggleFavorite,
}) {
  return (
    <div
      className={`card ${
        isFavorite ? "favorite" : ""
      }`}
    >
      <h3>{hero.nombre}</h3>

      <p>Poder: {hero.poder}</p>

      <p>Categoría: {hero.categoria}</p>

      <button
        onClick={() =>
          toggleFavorite(hero.id)
        }
      >
        {isFavorite
          ? "♥ Favorito"
          : "▢ Favorito"}
      </button>
    </div>
  );
}