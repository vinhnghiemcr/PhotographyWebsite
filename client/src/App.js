import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'

import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  
  const BASE_URL = 'http://localhost:3001/api'
  const [user, setUser] = useState({})
  const [services, setServices] = useState([])
  
  useEffect( async () => {
    const response = await axios.get(`${BASE_URL}/services`)
    setServices(response.data)    
  }, [])

  console.log(services, "SERVICES");
  

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage BASE_URL={BASE_URL} services={services}/>} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />

        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
