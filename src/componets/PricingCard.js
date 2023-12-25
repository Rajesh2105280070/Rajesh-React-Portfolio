import { Link } from "react-router-dom"
import "./PricingCardStyles.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>--Front-End Knowledge--</h3>
                <span className="bar"></span>
                <p className="btc">HTML, CSS With CSS Classes</p>
                <p>--6 Months Project Knowledge--</p>
                <p>--Using Layout and Best Design using HTML and CSS in Web Desigining--</p>
                <p>--Having Advance Knowledge--</p>
                <p>--Responsive Design--</p>
                <Link to="/contact" className="btn">
                    EXPLORE NOW
                </Link>
            </div>

            <div className="card">
                <h3>--BootStrap Knowledge--</h3>
                <span className="bar"></span>
                <p className="btc">Bootstrap - CSS Library Classes</p>
                <p>--6 Months Project Knowledge--</p>
                <p>--Using Best Designing using Bootstrap--</p>
                <p>--Having Advance Knowledge--</p>
                <p>--Different Styles and Logos--</p>
                <Link to="/contact" className="btn">
                    EXPLORE NOW
                </Link>
            </div>

            <div className="card">
                <h3>--JavaScript and React.JS --</h3>
                <span className="bar"></span>
                <p className="btc">JavaScript and React.JS</p>
                <p>--6 Months Project Knowledge--</p>
                <p>--Using Different events and functions for woeking in Web Designing--</p>
                <p>--Knowledge of various libraries in Javascript and Reacts--</p>
                <p>--Knowledge of various projects--</p>
                <Link to="/contact" className="btn">
                    EXPLORE NOW
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard