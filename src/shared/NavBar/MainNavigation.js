import React from 'react'
import MainHeader from './MainHeader'
import MagmaLogo from '../../assets/images/Magma-logo.png';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';
const MainNavigation = () => {
  return (
 <>
 <MainHeader>
   <div className='main-content'>

  
     <div className='logo'>
         <img src={MagmaLogo} alt='Magma'/>
     </div>
 
     <nav className='nav-bar'>
     <NavLinks></NavLinks>

     </nav>

     </div>  
 </MainHeader>
 
 </>
  )
}

export default MainNavigation