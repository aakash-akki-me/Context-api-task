import { useState } from 'react'
import './App.css'
import CartContext from './cartContext/CartContext'
import { BrowserRouter, Outlet, Route, Routes, } from 'react-router-dom'
import Layout from './assets/Layout'
import Home from './Page/Home'
import NoPage from './Page/NoPage'
import Chackout from './Page/Chackout'
function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='checkout' element={<Chackout />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
