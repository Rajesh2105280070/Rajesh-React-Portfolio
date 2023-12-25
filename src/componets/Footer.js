import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom"


const Fotter = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                      <p>MA-8, G.G.P Colony, Rasulgarh, Bhubaneswar</p>
                      <p>Odisha, India.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4>
                  <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                  +91-8658-2411-26
                  </h4>
                </div>
                <div className="mail">
                  <h4>
                  <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                  rajesh.pattanaik2000@gmail.com
                  </h4>
                </div>
            </div>

            <div className="right">
            <h4>About Me</h4>
            <p>I am a Fresher but holding the knowledge of HTML, CSS, JavaScript with React.js and Bootstrap of 6 months and done different type of Projects.</p>
            <div className="social">
            <Link to="https://www.facebook.com/rajesh.pattnaik.336?mibextid=qWsEUC"><FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} /></Link>
            <Link to="https://github.com/Rajesh2105280070"><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} /></Link>
            <Link to="https://www.linkedin.com/in/rajesh-kumar-pattanaik-032b64243"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} /></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter