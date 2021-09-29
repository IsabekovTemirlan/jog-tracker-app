import React from 'react'
import { Link } from 'react-router-dom'
import { MobileMenu } from '..'
import logo from '../../assets/icons/logo.svg'
import filterIcon from '../../assets/icons/filter-active.svg'
import menuIcon from '../../assets/icons/menu.png'
import './style.css'

export const Navbar = () => {
  return (
    <>
      <div className="navbar f-between">
        <div className="logo">
          <Link to="/jogs"><img src={logo}/> </Link>
        </div>
        <ul className="nav-list f-center">
          <li className="nav-item active"><Link to="/jogs">Jogs</Link></li>
          <li className="nav-item"><Link to="/info">Info</Link></li>
          <li className="nav-item"><Link to="/contact-us">Contact Us</Link></li>
          <img className="nav-icon" src={filterIcon}/>
          <img className="nav-icon mobile-menu-icon" src={menuIcon}/>
        </ul>
      </div>
      {/* <MobileMenu /> */}
    </>
  )
}
