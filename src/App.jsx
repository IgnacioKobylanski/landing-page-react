import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NuestraEsencia from './components/NuestraEsencia/NuestraEsencia'
import Funcionalidades from './components/Funcionalidades/Funcionalidades'
import Caracteristicas from './components/Caracteristicas/Caracteristicas'
import OtrasFunciones from './components/OtrasFunciones/OtrasFunciones'
import Soluciones from './components/Soluciones/Soluciones'
import Contacto from './components/Contancto/Contancto'
import Footer from './components/Footer/Footer'
import BotonScroll from './components/BotonScroll/BotonScroll'

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
      <Soluciones />
      <Contacto />
      <Footer />
      <BotonScroll />
    </>
  )
}

export default App
