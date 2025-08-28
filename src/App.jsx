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
import AccordAdvantage from './Components/AccordAdvantage';





function App() {
  const [count, setCount] = useState(0)

  return (

<HashRouter>
  <div></div>
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
         <Route path="/AccordAdvantage" element={<AccordAdvantage />} />
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
