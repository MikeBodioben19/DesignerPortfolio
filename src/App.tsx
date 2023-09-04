// import { useState } from 'react'

import { Navbar } from './Components'

import './App.css'
import { About, Domains, Softwares } from './Containers'

function App() {

  return (
    <div className='w-full'>
      <Navbar/>
      <About/>
      <Domains/>
      <Softwares/>
    </div>
    
  )
}

export default App
