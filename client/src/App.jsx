import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './contexts/AuthProvider'
import LoginPage from './pages/Login'
import Store from './pages/Store'
import NavBar from './components/Navbar'
import LandingPage from './pages/Landing'
import AccountPage from './pages/Account'
import CartPage from './pages/Cart'
import Success from './pages/Success'
import Cancel from './pages/Cancel'

function App() {
  const [count, setCount] = useState(0)
  const { user } = useAuth()
  const [ selectedPage, setSelectedPage ] = useState('home')

  return (
    <>
    <NavBar user={user} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<LoginPage user={user}/>} />
        <Route path="/account" element={<AccountPage user={user}/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
    </Routes>
    </>
  )
}

export default App
