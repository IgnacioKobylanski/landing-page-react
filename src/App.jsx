import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Nosotros from './components/Nosotros/Nosotros'
import Beneficios from './components/Beneficios/Beneficios'
import Caracteristicas from './components/Caracteristicas/Caracteristicas'
import CasoDeExito from './components/CasoDeExito/CasoDeExito'
import Ventajas from './components/Ventajas/Ventajas'
import Contacto from './components/Contancto/Contancto'
import Footer from './components/Footer/Footer'
import BotonScroll from './components/BotonScroll/BotonScroll'
import CirculoProgreso from './components/CirculoProgreso/CirculoProgreso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Nosotros />
      <Caracteristicas />
      <Beneficios />
      <CasoDeExito />
      <Ventajas />
      <Contacto />
      <Footer />
      <BotonScroll />
    </>
  )
}

export default App
