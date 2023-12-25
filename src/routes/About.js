import React from 'react'

import Navbar from '../componets/Navbar'

import Footer from "../componets/Footer"
import HeroImg2 from '../componets/HeroImg2'
import AboutContent from '../componets/AboutContent'

const about = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default about