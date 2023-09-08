// import { useState } from 'react'

import { Navbar, Caroussel } from './Components'

import './App.css'
import { About, Domains, Formations, Projects, Skills, Softwares } from './Containers'

function App() {

  return (
    <div className='w-full'>
      <Navbar/>
      <About/>
      <Domains/>
      <Softwares/>
      <Projects/>
      <Skills/>
      <Formations/>
      <Caroussel/>
    </div>
    
  )
}

export default App
