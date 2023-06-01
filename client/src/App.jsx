import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/Login'
import Store from './pages/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage/>
      <Store />
    </>
  )
}

export default App
