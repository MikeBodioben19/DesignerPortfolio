


import { Suspense, lazy } from 'react'
import './App.css'

import { Navbar,  Footer, Loader } from './Components'

const About = lazy(()=> import ("./Containers/About"))
const Domains = lazy(()=> import ("./Containers/Domains"))
const Formations = lazy(()=> import ("./Containers/Formations"))
const Projects = lazy(()=> import ("./Containers/Projects"))
const Skills = lazy(()=> import ("./Containers/Skills"))
const Softwares = lazy(()=> import ("./Containers/Softwares"))


function App() {

  return (
    <Suspense fallback={<Loader/>}>

      <Navbar/>
      <About/>
      <Domains/>
      <Softwares/>
      <Projects/>
      <Skills/>
      <Formations/>
      {/* <Caroussel/> */}
      <Footer/> 
    
    </Suspense>
    
  )
}

export default App
