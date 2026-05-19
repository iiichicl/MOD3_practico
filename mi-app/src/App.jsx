import { useState } from "react";
import './App.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Superheroes from '../components/Superheroes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Superheroes></Superheroes>
    <div className="aviso">
      <p className="notas">Notas:</p>
      <p>Las tarjetas con borde morado y fondo lila son favoritas. El buscador filtra en tiempo real por nombre</p>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
