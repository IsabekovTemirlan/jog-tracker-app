import React from 'react'
import { Link } from 'react-router-dom'
import closeBtn from '../../assets/icons/mobile-cancel.svg'
import logo from '../../assets/icons/logo2.png'
import './style.css'

export const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <div className="menu-top f-between">
        <img className="menu-logo" src={logo} />
        <img className="menu-close" src={closeBtn} />
      </div>
      <ul className="menu-list">
        <li className="menu-item menu-item-active" ><Link to="/jogs">Jogs</Link></li>
        <li className="menu-item" ><Link to="/info">Info</Link></li>
        <li className="menu-item" ><Link to="/contact-us">Contact Us</Link></li>
      </ul>
    </div>
  )
}