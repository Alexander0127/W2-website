import React from 'react'
import MainDiv from './MainDiv'
import Hero from './Hero'
import MarcasSlider from './MarcasSlider'
import Counts from './Counts'
import Dirigido from './Dirigido'
import Testimonio from './Testimonio'
import Faq from './Faq'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <div className='flex flex-col' >
      <Navbar/>
      <MainDiv/>
      <Hero />
      <MarcasSlider/>
      <Counts />
      <Dirigido/>
      <Testimonio/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home