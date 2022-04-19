import React from 'react'
import {NavLink} from 'react-router-dom'

const NavLinks = () => {

const ContactScroll=()=>{

  window.scrollTo({
    top:3270,
    behavior:"smooth"
  })

}
const TeamScroll=()=>{

  window.scrollTo({
    top:2600,
    behavior:"smooth"
  })

}


  return (
    <ul className="nav-links">
   
    <li>
      <NavLink to='/home-page'  >
         Home
      </NavLink>
    </li>
    <li>
      <NavLink to='/services' >
         Services
      </NavLink>
    </li>
    <li>
      <NavLink to='/products' >
         Products
      </NavLink>
    </li>
    <li>
      <NavLink to='//' onClick={TeamScroll} >
         Our Team
      </NavLink>
    </li>
    <li>
      <NavLink to='/about-us' >
         About Us
      </NavLink>
    </li>
    <li>
      <NavLink to='//' 
      onClick={ContactScroll} >
         Contact Us
      </NavLink>

     
    </li>
    </ul>
  )
}

export default NavLinks