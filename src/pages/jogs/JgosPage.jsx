import React from 'react'
import { JogCard, FilterBar, Button, Form } from '../../components'
import addBtn from '../../assets/icons/add.svg'
import sadSmile from '../../assets/icons/sad.svg'
import './style.css'

export const JogsPage = () => {
  return (
    <div className="jogs-page">
      {/* <JogCard />
      <JogCard />
      <JogCard />
      <img className="jogs-btn" src={addBtn} /> */}
      
      {/* <Form /> */}

      <div className="empty-content m-center">
        <div className="empty-content-body">
          <img className="sad-icon" src={sadSmile} />
          <p>Nothing is there</p>
        </div>
        <Button color="baby-purple" text="Create your jog first" />
      </div>
      
    </div>
  )
}