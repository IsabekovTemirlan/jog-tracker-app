import React from 'react'
import './style.css'
import bearFace from '../../assets/icons/bear-face.svg'

export const Greating = () => {
  return (
    <div className="greating-card">
      <div className="greating-body">
        <img className="greating-img" src={bearFace} />
        <button className="greating-btn m-center">Let me in</button>
      </div>
    </div>
  )
}