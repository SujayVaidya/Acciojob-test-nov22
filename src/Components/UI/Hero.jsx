import React from 'react';
import './CSS/Hero.css'

const Hero = () => {
  return (
   <>
      <section className='hero-main'>
            <div className="row-container">
                <div className="hero-main-flyer">
                   <section className='h5-sum'><h5>SUMMER 2020</h5></section>  
                  <section className='h1-new'><h1>NEW COLLECTION</h1></section>   
                  <section className='h4-para'><h4>We know how large objects will act, but things on a  small scale.</h4></section>   
                  <section className='btn-cta'><button className='btn-shop'><h3><div  className="shp-now">SHOP NOW</div></h3></button></section>

                </div>  
                <div className="hero-images">
                    <div className="tech-1">
                       <div className="main-img"></div>
                    </div>
                </div>
            </div>
        </section>
   
   
   </>
  )
}

export default Hero
