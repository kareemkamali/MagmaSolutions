import React from 'react'
import {NavLink} from 'react-router-dom'
import { HashLink as ScrollLink } from "react-router-hash-link";

const NavLinks = () => {
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
      <ScrollLink smooth to="/home-page/#our-team-section" >
         Our Team
      </ScrollLink>
    </li>
    <li>
      <NavLink to='/about-us' >
         About Us
      </NavLink>
    </li>
    <li>
      <ScrollLink smooth to='/home-page/#contact-us' 

      >
         Contact Us
      </ScrollLink>
    </li>
    </ul>
  )
}

export default NavLinks