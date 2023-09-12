// import { useState } from 'react'

import { Navbar, Caroussel, Footer, Loader } from './Components'

import './App.css'
import { About, Domains, Formations, Projects, Skills, Softwares } from './Containers'

function App() {

  return (
    <div className='w-full relative'>
      <Navbar/>
      <About/>
      <Domains/>
      <Softwares/>
      <Projects/>
      <Skills/>
      <Formations/>
      <Caroussel/>
      <Loader/>
      <Footer/>
    </div>
    
  )
}

export default App
