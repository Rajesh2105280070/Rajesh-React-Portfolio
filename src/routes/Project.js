import React from 'react'

import Navbar from '../componets/Navbar'
import Footer from "../componets/Footer"
import HeroImg2 from '../componets/HeroImg2'
import PricingCard from '../componets/PricingCard'
import Work from '../componets/Work'


const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default project