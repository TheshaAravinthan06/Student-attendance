import './App.css'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Attendencepage from './pages/attendencepage'
import Notfound from './pages/notfound'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  
      <Routes>
        <Route path='/Students-attendance' element={<Dashboard />} />
        <Route path='/Students-attendance/student' element={<Attendencepage />} />
        <Route path='*' element={<Notfound />} />
      </Routes> 
   
    
    </>
  )
}

export default App
