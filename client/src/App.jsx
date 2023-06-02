import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuth } from './contexts/AuthProvider'
import LoginPage from './pages/Login'
import Store from './pages/Store'
import NavBar from './components/Navbar'
import LandingPage from './pages/Landing'
import AccountPage from './pages/Account'
import CartPage from './pages/Cart'


function App() {
  const [count, setCount] = useState(0)
  const { user } = useAuth()

  return (
    <>
    <NavBar user={user} />
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
    </Routes>
    </>
  )
}

export default App
