import { useState } from "react";
import HeroCard from "./HeroeCard";
import "./Superheroes.css";

export default function Superheroes({
  heroes,
  search,
}) {
  const [favorites, setFavorites] = useState([]);

  const filteredHeroes = heroes.filter((hero) =>
    hero.nombre
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const toggleFavorite = (heroId) => {
    setFavorites((prev) =>
      prev.includes(heroId)
        ? prev.filter((id) => id !== heroId)
        : [...prev, heroId]
    );
  };

  return (
    <div className="container">
      {filteredHeroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          isFavorite={favorites.includes(hero.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}