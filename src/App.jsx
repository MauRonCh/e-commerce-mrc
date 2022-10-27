import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProductId from './pages/ProductId'
import { useEffect } from 'react'
import axios from 'axios'
import LoginScreen from './pages/LoginScreen'
import Header from './components/shared/Header'
import getConfig from './utils/getConfig'


function App() {

  useEffect (() => {
    const data = {
      firstName: "Mauricio",
      lastName: "Ronceros",
      email: "mrc@gmail.com",
      password: "pass1234",
      phone: "1234567891",
      role: "admin"
    }
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

    axios.post(URL, getConfig(), data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductId />}/>
        <Route path='/login' element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
