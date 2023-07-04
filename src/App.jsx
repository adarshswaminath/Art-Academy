import React from 'react'
import Hero from './Componets/Hero'
import About from './Componets/About'
import Design from './Componets/Design'
import Banner from './Componets/Banner'
import Studios from './Componets/Studios'
import Footer from './Componets/Footer'


function App() {
  return (
    <div className='bg-[#01172f]'>
      <Hero/>
      <About/>
      <Design/>
      <Banner/>
      <Studios/>
      <Footer/>
    </div>
  )
}

export default App