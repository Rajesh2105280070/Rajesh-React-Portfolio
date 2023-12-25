import { Link } from "react-router-dom"
import "./AboutContentStyles.css"


import React from 'react'
import React1 from "../asserts/react1.jpg"
import React2 from "../asserts/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>I am a UI Full Stack and React Front-End Developer. I create responsive secure websites for my projects</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack bottom">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack top">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent