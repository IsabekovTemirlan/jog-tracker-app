// import React from 'react'
import './style.css'
import jogIcon from '../../assets/icons/icon.svg'

export const JogCard = ({date, distance, time, speed, open}) => {
  return (
    <div className="jogs-card" onClick={open}>
      <div className="jogs-card-wrap f-center">
        <img src={jogIcon} />
        <span className="spacer"></span>
        <div className="jogs-card-body">
          <p className="jogs-card-date">
            {date}
          </p>
          <p className="jogs-card-text">
            <span>Speed</span>: {speed} km/h
          </p>
          <p className="jogs-card-text">
            <span>Distance</span>: {distance} km
          </p>
          <p className="jogs-card-text">
            <span>Time</span>: {time} m
          </p>
        </div>
      </div>
    </div>
  )
}