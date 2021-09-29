import React from 'react'
import { Button } from '../'
import './style.css'

export const Greating = () => {
  return (
    <div className="greating-card f-center">
      <div className="greating-body">
        <div className="greating-img"></div>
        <Button classes={["mobile-greating-btn"]} text="Let me in" color="white-two" />
      </div>
    </div>
  )
}