import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NuestraEsencia from './components/NuestraEsencia/NuestraEsencia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <NuestraEsencia />
    </>
  )
}

export default App
