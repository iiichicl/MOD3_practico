import { useState } from "react";
import NavBar from "./NavBar";
import "./Superheroes.css";

export default function Superheroes() {

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const heroes = [
    {
      id: 1,
      name: "Batman",
    },
    {
      id: 2,
      name: "Superman",
    },
    {
      id: 3,
      name: "Spider-Man",
    },
    {
      id: 4,
      name: "Iron Man",
    },
    {
      id: 5,
      name: "Hulk",
    }
    ,
    {
      id: 6,
      name: "Wonder Woman",
    }
    ,
    {
      id: 7,
      name: "Black Widow",
    }
    ,
    {
      id: 8,
      name: "Thor",
    }
    ,
    {
      id: 9,
      name: "Doctor Strange",
    }
    ,
    {
      id: 10,
      name: "Captain America",
    }
    ,
    {
      id: 11,
      name: "Black Panther",
    }
    ,
    {
      id: 12,
      name: "Deadpool",
    }
    ,
    {
      id: 13,
      name: "Nightwing",
    }

  ];

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (heroId) => {
    setFavorites((prev) =>
      prev.includes(heroId)
        ? prev.filter((id) => id !== heroId)
        : [...prev, heroId]
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar superhéroe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="container">

        {filteredHeroes.map((hero) => (

          <div
            key={hero.id}
            className={`card ${
              favorites.includes(hero.id)
                ? "favorite"
                : ""
            }`}
          >

            <h3>{hero.name}</h3>

            <button
              onClick={() =>
                toggleFavorite(hero.id)
              }
            >
              {favorites.includes(hero.id)
                ? "♥ Favorito"
                : "▢ Favorito"}
            </button>

          </div>
        ))}

      </div>
    </>
  );
}