// import React from 'react'
import './style.css'
import jogIcon from '../../assets/icons/icon.svg'

export const JogCard = () => {
  return (
    <div className="jogs-card m-center">
      <div className="f-center">
        <img src={jogIcon} />
        <div className="jogs-card-body">
          <p className="jogs-card-date">
            20.12.2021
          </p>
          <p className="jogs-card-text">
            <span>Speed</span>: 15
          </p>
          <p className="jogs-card-text">
            <span>Distance</span>: 10 km
          </p>
          <p className="jogs-card-text">
            <span>Time</span>: 60 m
          </p>
        </div>
      </div>
    </div>
  )
}