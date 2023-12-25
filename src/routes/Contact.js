import React from 'react'

import Navbar from '../componets/Navbar'

import Footer from "../componets/Footer"
import HeroImg2 from '../componets/HeroImg2'
import Form from "../componets/Form"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat." />
      <Form />  
      <Footer />
    </div>
  )
}

export default Contact