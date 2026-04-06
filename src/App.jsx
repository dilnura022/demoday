import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Explore from './page/Explore'
import Collection from './page/Collection'
import Footer from './components/Footer'
import Basket from './page/Basket'
import Drops from './page/Drops'
import More from './page/More'
import Home from './page/Home'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/collection" element={<Collection />} />
        <Route path='/drops' element={<Drops/>}/>
        <Route path='/basket' element={<Basket />} />
        <Route path='/more' element={<More/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App