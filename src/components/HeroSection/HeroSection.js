import React from 'react'
import HeroImage from '../../assets/images/hero-vector.png';
import Button from '../../shared/FormElements/Button';
import HeroBackground from '../../assets/images/hero-bg.jpg';
import Div100vh from 'react-div-100vh';

const HeroSection = () => {
  return (
    <>

        <section id='Hero-Section'>

          <div className='hero-k'>
          <img className='hero-bg' src={HeroBackground}></img>  
         <div className='hero-container'>
            <div className='hero-text'>
              <h1>Only One Creative way</h1>
              <h2>To Do Things Perfectly ...</h2>
              <Button >Get A Quote</Button>
            </div>

            <img className='hero-image' src={HeroImage} alt='Hero Image'></img>

          </div>  
          
          </div>
        </section>
      
        </>
  )
}

export default HeroSection