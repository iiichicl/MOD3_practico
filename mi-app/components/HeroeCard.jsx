export default function HeroeCard({hero,isFavorito,toggleFavorito,}) {
  return (
    <div
      className={`tarjeta ${
        isFavorito ? "favorito" : ""
      }`}
    >
      <div
        className={
          isFavorito
            ? "icono icono-favorito"
            : "icono"
        }
      >
        {hero.inicial}
      </div>

      <h3>{hero.nombre}</h3>

      <p className="poder">
        {hero.poder}
      </p>

      <button
        className={
          isFavorito
            ? "btn-favorito"
            : "btn-normal"
        }
        onClick={() =>
          toggleFavorito(hero.id)
        }
      >
        {isFavorito
          ? "♥ Favorito"
          : "♡ Favorito"}
      </button>
    </div>
  );
}