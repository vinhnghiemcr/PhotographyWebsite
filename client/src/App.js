import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import ServicePage from './pages/ServicePage'
import CollectionPage from './pages/ColectionPage'
import UserPage from './pages/UserPage'
import CheckOutPage from './pages/CheckOutPage'

import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  
  const BASE_URL = 'http://localhost:3001/api'
  const [currentUser, setCurrenttUser] = useState(null)
  const [services, setServices] = useState([])
  const [cart, setCart] = useState({packages: [], pictures: []})
  const [isPaid, setIsPaid] = useState(false)
  const [owned, setOwned] = useState(false)
 
  
  useEffect( async () => {
    const response = await axios.get(`api/services`)
    setServices(response.data) 

    if (currentUser) {
      const res = await axios.get(`api/users/${currentUser._id}`)
      setCurrenttUser(res.data)
    }
    
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <Nav cart={cart} currentUser={currentUser} setCurrenttUser={setCurrenttUser} />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<HomePage BASE_URL={BASE_URL} services={services} />} />
          <Route path='collection' element={<CollectionPage setOwned={setOwned} owned={owned} BASE_URL={BASE_URL} setCart={setCart} />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage  />} />
          <Route path='login' element={<LoginPage BASE_URL={BASE_URL} currentUser={currentUser} setCurrenttUser={setCurrenttUser} />} />
          <Route path='service/:id' element={<ServicePage setCart={setCart} services={services}/>} />
          <Route path='profile'  element={<UserPage setOwned={setOwned} owned={owned} BASE_URL={BASE_URL} cart={cart} currentUser={currentUser} setCurrenttUser={setCurrenttUser} />} />
          <Route path='checkout' element={<CheckOutPage isPaid={isPaid} setIsPaid={setIsPaid}  cart={cart} setCart={setCart} currentUser={currentUser}  BASE_URL={BASE_URL} />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
