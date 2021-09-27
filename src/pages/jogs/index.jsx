import React from 'react'
import {JogCard,FilterBar} from '../../components'
import './style.css'

export const JogsPage = () => {
  return (
    <div className="jogs-page">
      <FilterBar />
      <JogCard />
      <JogCard />
      <JogCard />
      <JogCard />
    </div>
  )
}