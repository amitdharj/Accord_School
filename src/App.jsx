import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import Footer from './Components/Footer'
import EducationalAdventures from './Components/Educational'

import KidsPreschool from './Components/kidnew'
import About from './Components/About'
import Brain from './Components/BrainPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <EducationalAdventures />
      
      
      <KidsPreschool />
      <Brain />
      <About />
      <Programs />
      <Footer />
    </>
  )
}

export default App
