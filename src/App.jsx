import { useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programs from './Components/Programs'
import Footer from './Components/Footer'
import EducationalAdventures from './Components/Educational'

import KidsPreschool from './Components/kidnew'
import About from './Components/About'
import Brain from './Components/BrainPage'
import AboutSection from './Components/AboutSection';
import AdmissionForm from './Components/AddmissionForm';





function App() {
  const [count, setCount] = useState(0)

  return (

<HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <EducationalAdventures />
              <KidsPreschool />
              <Brain />
              <About /> {/* keep if About is also on home */}
              <Programs />
             
            </>
          }
        />

         <Route path="/AboutSection" element={<AboutSection />} />
         <Route path="/AddmissionForm" element={<AdmissionForm />} />
         {/* <Footer /> */}
       
      </Routes>
      <Footer />
  </HashRouter>
  );
}

    // <>
    //   <Navbar  />
    //   <Hero />
      
    //   <EducationalAdventures />
    //   <KidsPreschool />
    //   <Brain />
    //   <About />
    //   <Programs />
    //   <Footer />
    // </>
  // )
// }

export default App;
