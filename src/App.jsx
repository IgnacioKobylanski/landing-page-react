import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NuestraEsencia from './components/NuestraEsencia/NuestraEsencia'
import Funcionalidades from './components/Funcionalidades/Funcionalidades'
import Caracteristicas from './components/Caracteristicas/Caracteristicas'
import OtrasFunciones from './components/OtrasFunciones/OtrasFunciones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <NuestraEsencia />
      <Funcionalidades />
      <Caracteristicas />
      <OtrasFunciones />
    </>
  )
}

export default App
