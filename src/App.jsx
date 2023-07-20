import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App
