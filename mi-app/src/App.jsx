import { useState, useEffect } from "react";
import './App.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Application from '../components/Application';
import NavBar from "../components/NavBar";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/heroes.json")
      .then((res) => res.json())
      .then((data) => setHeroes(data));
  }, []);

  return (
   <>
      <Header />
      <NavBar
        search={search}
        setSearch={setSearch}
      />

      <Application
        heroes={heroes}
        search={search}
      />
      <div className="aviso">
        <p className="notas">Notas:</p>
        <p>
          Las tarjetas con borde morado y fondo lila son favoritas.
          El buscador filtra en tiempo real por nombre
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App
