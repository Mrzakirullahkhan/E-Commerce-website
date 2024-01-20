import React from 'react'
import "./Hero.css"
import HandIcon from "../Assets/hand_icon.png"
import arrowIcon from "../Assets/arrow.png"
import HeroImg from "../Assets/hero_image.png"
function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>new arrival only </h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={HandIcon} alt="" />
            </div>
              <p>collection</p>
              <p>for every one </p>
        </div>
        <div className="hero-latest-btn">
            <div>latest collection </div>
            <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
         <img src={HeroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
