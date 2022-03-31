import React from 'react'
import {NavLink} from 'react-router-dom'

const NavLinks = () => {
  return (
    <ul className="nav-links">
   
    <li>
      <NavLink to='/'  exact>
         Home
      </NavLink>
    </li>
    <li>
      <NavLink to='/services' >
         Services
      </NavLink>
    </li>
    <li>
      <NavLink to='/products' exact>
         Products
      </NavLink>
    </li>
    <li>
      <NavLink to='/our-team' exact>
         Our Team
      </NavLink>
    </li>
    <li>
      <NavLink to='/about-us' exact>
         About Us
      </NavLink>
    </li>
    <li>
      <NavLink to='/contact-us' exact>
         Contact Us
      </NavLink>
    </li>
    </ul>
  )
}

export default NavLinks