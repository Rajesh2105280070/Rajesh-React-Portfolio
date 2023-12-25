import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../asserts/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'AM RAJESH.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
            <div className="resume">
            <Link to="https://rajesh2105280070.github.io/Rajesh-Portfolio/public/docs/rajesh-resume.pdf">
                <button className="btn">Download CV</button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg