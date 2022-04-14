import React, { useEffect, useState } from 'react'
import MainHeader from './MainHeader'
import MagmaLogo from '../../assets/images/Magma-logo.png';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';
import SideDrawer from './SideDrawer';
import Backdrop from '../UiElement/Backdrop';

import styled from '../../index.css';
const MainNavigation = () => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const transformBurgerspan1='40deg';


const Logo={

}


useEffect(()=>{

  if(drawerIsOpen){

    document.documentElement.style.setProperty('--firstburgerspan','31deg');
    document.documentElement.style.setProperty('--secondburgerspan','-31deg');
  
      }
      else{
  
        document.documentElement.style.setProperty('--firstburgerspan','0deg');
      document.documentElement.style.setProperty('--secondburgerspan','0deg');
      }

},[drawerIsOpen])










  const openDrawerHandler = () => {
    setDrawerIsOpen(inverse =>!inverse);
  };

  const closeDrawerHandler = () => {

    setDrawerIsOpen(false);
  };



  return (
 <>
  {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer  show={drawerIsOpen} onClick={closeDrawerHandler}>
        
        <nav className="main-navigation__drawer-nav">
   
          <NavLinks />
        </nav>
      </SideDrawer>
 <MainHeader>







   <div className='main-content'>

  
     <div style={{margin: drawerIsOpen?'12vw':0}}   className='logo'>
         <img  src={MagmaLogo} alt='Magma'/>
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
      {!drawerIsOpen && <span />}
      {drawerIsOpen && <span style={{'display':'none'}} />}
          <span  />
        </button>
 </MainHeader>
 
 </>
  )
}

export default MainNavigation