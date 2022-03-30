import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import ServicePage from './pages/ServicePage'
import CollectionPage from './pages/ColectionPage'
import UserPage from './pages/UserPage'

import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  
  const BASE_URL = 'http://localhost:3001/api'
  const [currentuser, setCurrenttUser] = useState(null)
  const [services, setServices] = useState([])
  const [cart, setCart] = useState({packages: [], pictures: []})
  console.log(currentuser, "CUSER");
  
  useEffect( async () => {
    const response = await axios.get(`${BASE_URL}/services`)
    setServices(response.data)    
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <Nav cart={cart} currentuser={currentuser} setCurrenttUser={setCurrenttUser} />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage BASE_URL={BASE_URL} services={services} />} />
          <Route path='collection' element={<CollectionPage BASE_URL={BASE_URL} setCart={setCart} />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage BASE_URL={BASE_URL} setCurrenttUser={setCurrenttUser} />} />
          <Route path='service/:id' element={<ServicePage setCart={setCart} services={services}/>} />
          <Route path='profile' element={<UserPage setCart={setCart} services={services}/>} />

        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
