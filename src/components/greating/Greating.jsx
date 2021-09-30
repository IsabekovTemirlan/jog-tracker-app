import React from 'react'
import { Button } from '../'
import { useActions } from '../../hooks/useAction'
import './style.css'

export const Greating = () => {
  const { initApp } = useActions()

  return (
    <div className="greating-card f-center">
      <div className="greating-body">
        <div className="greating-img"></div>
        <Button click={initApp} classes={["mobile-greating-btn"]} text="Let me in" color="white-two" />
      </div>
    </div>
  )
}