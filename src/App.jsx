import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Recepies from './components/Recipes'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/:id' element={<Recepies />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App