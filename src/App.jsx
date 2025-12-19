import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Attendencepage from './pages/attendencepage'
import {Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Notfound from './pages/notfound'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Attendencepage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Notfound />} />
      </Routes> 
    
    </>
  )
}

export default App
