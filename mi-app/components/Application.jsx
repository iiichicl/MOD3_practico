import { useState } from "react";
import HeroeCard from "./HeroeCard";
import "./Superheroes.css";

export default function Superheroes({
  heroes,
  search,
}) {
  const [favoritos, setFavoritos] = useState([]);

  const heroesFiltrados = heroes.filter((hero) =>
    hero.nombre
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const toggleFavorito = (heroId) => {
    setFavoritos((prev) =>
      prev.includes(heroId)
        ? prev.filter((id) => id !== heroId)
        : [...prev, heroId]
    );
  };

  return (
    <div className="contenedor">
      {heroesFiltrados.length === 0 ? (
        <p className="error">
          ☹︎ No tenemos a ese superhéroe...
        </p>
      ) : (
        heroesFiltrados.map((hero) => (
          <HeroeCard
            key={hero.id}
            hero={hero}
            isFavorito={favoritos.includes(hero.id)}
            toggleFavorito={toggleFavorito}
          />
        ))
      )}
    </div>
  );
}