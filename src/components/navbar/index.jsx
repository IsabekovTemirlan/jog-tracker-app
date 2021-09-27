import React from 'react'
import logo from '../../assets/icons/logo.svg'
import filterIcon from '../../assets/icons/filter-active.svg'
import './style.css'

export const Navbar = () => {
  return (
    <div className="navbar f-center">
      <div className="logo">
        <img src={logo} />
      </div>
      <ul className="nav-list f-center">
        <li className="nav-item active" >Jogs</li>
        <li className="nav-item" >Info</li>
        <li className="nav-item" >Contact Us</li>
        <img className="nav-icon" src={filterIcon} />
      </ul>
    </div>
  )
}
