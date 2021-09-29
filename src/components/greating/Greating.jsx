import React from 'react'
import { Button } from '../'
import { getToken } from '../../api'
import { useAuth } from '../../hooks/useAuth'
import './style.css'

export const Greating = () => {
  const { login } = useAuth()

  const setToken = async () => {
    const response = await getToken()
    console.log(response);
    login(response?.access_token)
  }

  return (
    <div className="greating-card f-center">
      <div className="greating-body">
        <div className="greating-img"></div>
        <Button click={setToken} classes={["mobile-greating-btn"]} text="Let me in" color="white-two" />
      </div>
    </div>
  )
}