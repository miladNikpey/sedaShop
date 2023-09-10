import { useState } from 'react'

import './App.css'
import Halobar from './components/Halobar/Halobar'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Partition from './components/Partition/Partition'
import Newest from './components/Newest/Newest'

function App() {

  return (
      <div>
        <Navbar/>
        <Halobar/>
        <Slider/>
        <Partition/>
        <Newest/>
      </div>
  )
}

export default App
