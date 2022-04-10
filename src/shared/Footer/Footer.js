import React from 'react'
import ImageBackground from "../../assets/images/FooterBackground.png";
import footerImage from "../../assets/images/FooterLogo.png";
import firstbackground from '../../assets/images/contact-section-bkg.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   <section id='footer'>
     <div className='footer-section'>
       <img className='footer-bg' src={firstbackground} alt='bg'></img>
        <img  className='footer-bg' src={ImageBackground} alt='footer-background'></img>
        
        <div className='footer-image'>
         <img className='logo-footer' src={footerImage} alt='Logo'/>
        </div>

<div className='footer-container'>
        <div className='footer-container-content'>
          <div className='footer-nav'>
            <h1>Pages</h1>
            <div className='footer-nav-links'>
            <Link>Home</Link>
            <Link>Our Team</Link>
            </div>
            <div className='footer-nav-links'>
            <Link>Services</Link>
            <Link>About Us</Link>
            </div>
            <div className='footer-nav-links'>
            <Link>Products</Link>
            <Link>Contact Us</Link>
            </div>
        
          </div>
<div className='line-footer-between-nav'></div>
          <div className='footer-nav'>
            <h1>Contact</h1>
            <div className='footer-nav-links'>
          <h2>karim_kamali@htomail.com</h2>
            </div>
            <div className='footer-nav-links'>
            <h2>+961 76 168 142</h2>
            </div>
            <div className='footer-nav-links'>
         <h2>06 438 454</h2>
            </div>
        
          </div>


<div className='footer-icons'>

</div>





        </div>

<h3>© All Rights Reserved. Magma Solutions 2022</h3>

</div>


     </div>
  
           
      
    
   </section>
  )
}

export default Footer