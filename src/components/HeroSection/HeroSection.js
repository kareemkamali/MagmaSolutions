import React,{useEffect} from 'react'
import HeroImage from '../../assets/images/hero-vector.png';
import Button from '../../shared/FormElements/Button';
import HeroBackground from '../../assets/images/hero-bg.jpg';
import HeroBackgroundMobile from '../../assets/images/MobileImages/HeroBg.png';
import TextImage from '../../assets/images/ellipses.png';
import AOS from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>

        <div className="hero-section">
        <img className="hero-bg" src={HeroBackground}/>
        {/* mobile change bg */}
        <img className="hero-bg-m" src={HeroBackgroundMobile}/>
    
        <div  className="hero-content">
          <img className='behind-text' src={TextImage}></img>
        <div className='hero-text'>
              <h1>Only One Creative way</h1>
              <h2>To Do Things Perfectly ...</h2>
              <div className='hero-btn'>
              <Button to='/home' size='big' >Get A Quote</Button>
              </div></div>
            <div data-aos="zoom-in" className='hero-image'> <img src={HeroImage} alt=""/></div>
        </div>
    </div>
   

        {/* <section id='Hero-Section'>

          <div className='hero-k'>
              <img className='hero-bg' src={HeroBackground}></img>  
         <div className='hero-container'>
            <div className='hero-text'>
              <h1>Only One Creative way</h1>
              <h2>To Do Things Perfectly ...</h2>
              <div className='hero-btn'>
              <Button >Get A Quote</Button>
              </div>
            </div>
<div className='hero-image-right'>
<img className='hero-image' src={HeroImage} alt='Hero Image'></img>

</div>
          
          </div>  
          
          </div>
        </section> */}
      
        </>
  )
}

export default HeroSection