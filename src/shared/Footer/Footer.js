import React from 'react'
import ImageBackground from "../../assets/images/FooterBackground.png";
import footerImage from "../../assets/images/FooterLogo.png";
import firstbackground from '../../assets/images/contact-section-bkg.png';
const Footer = () => {
  return (
   <section id='footer'>
     <div className='footer-section'>
       <img src={firstbackground} alt='bg'></img>
        <img src={ImageBackground} alt='footer-background'></img>

        <div className='footer-image'>
          
        </div>


     </div>

           
      
    
   </section>
  )
}

export default Footer