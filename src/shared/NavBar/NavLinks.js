import React from 'react'
import {NavLink} from 'react-router-dom'

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
      <NavLink to='/our-team' >
         Our Team
      </NavLink>
    </li>
    <li>
      <NavLink to='/about-us' >
         About Us
      </NavLink>
    </li>
    <li>
      <NavLink to='/contact-us' >
         Contact Us
      </NavLink>
    </li>
    </ul>
  )
}

export default NavLinks