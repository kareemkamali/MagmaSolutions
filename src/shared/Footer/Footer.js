import React from 'react'
import ImageBackground from "../../assets/images/Footerbackground.png";
import ImageBackgroundMobile from "../../assets/images/MobileImages/FooterBgMobile.png";
import footerImage from "../../assets/images/FooterLogo.png";
import firstbackground from '../../assets/images/contact-section-bkg.png';
import { Link } from 'react-router-dom';
import SocialMedia from '../UiElement/SocialMedia';
const Footer = () => {
  return (
   <section id='footer'>
     <div className='footer-section'>
       <img className='footer-bg' src={firstbackground} alt='bg'></img>
        <img  className='footer-bg' src={ImageBackground} alt='footer-background'></img>
        <img  className='footer-bg-m' src={ImageBackgroundMobile} alt='footer-background'></img>
        <div className='footer-image'>
         <img className='logo-footer' src={footerImage} alt='Logo'/>
        </div>

        <div className='container-footer-wrapper'>

     
<div className='container-footer'>
          <div className='footer-nav'>
            <div className='footer-nav-title'>
              <h1>Pages</h1>
            </div>
            <div className='footer-nav-links'>
              <div className='footer-nav-col1'>
              <Link to=''>Home</Link>
              <Link to=''>Our Team</Link>
              <Link to=''>About Us</Link>
              </div>
          
              <div className='footer-nav-col1'>
              <Link to=''>Contact Us</Link>
            <Link to=''>Our Services</Link>
              <Link to=''>Our Products</Link>
              </div>
              </div>
          </div>
         
          <div className='footer-nav'>
            <div className='footer-nav-title'>
              <h1>Contact Us</h1>
            </div>
            <div className='footer-nav-links'>
              <div className='footer-nav-col1'>
              <Link to=''>Karim_kamali@gmail.com</Link>
              <Link to=''>+961 76168142</Link>
              <Link to=''>06 438454</Link>
              </div>
          
  
              </div>
          </div>
          <SocialMedia className='footer-icons'/>


</div>

<h2>© All Rights Reserved. Magma Solutions 2022</h2>
</div>

        </div>



     
           
      
    
   </section>
  )
}

export default Footer