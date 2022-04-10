import React, { useEffect, useState } from 'react'
import MainHeader from './MainHeader'
import MagmaLogo from '../../assets/images/Magma-logo.png';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';
import SideDrawer from './SideDrawer';
import Backdrop from '../UiElement/Backdrop';
const MainNavigation = () => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };



  return (
 <>
  {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        
        <nav className="main-navigation__drawer-nav">
   
         <img     src={MagmaLogo} alt='Magma'/>
 
 
          <NavLinks />
        </nav>
      </SideDrawer>
 <MainHeader>







   <div className='main-content'>

  
     <div className='logo'>
         <img src={MagmaLogo} alt='Magma'/>
     </div>
 
     <nav className='nav-bar'>
     <NavLinks></NavLinks>

     </nav>

     </div>  

     <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
 </MainHeader>
 
 </>
  )
}

export default MainNavigation