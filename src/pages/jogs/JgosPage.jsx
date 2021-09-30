import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { JogCard, Button, Form } from '../../components'
import addBtn from '../../assets/icons/add.svg'
import sadSmile from '../../assets/icons/sad.svg'
import './style.css'

export const initialJogData = {
  time: '',
  distance: '',
  date: '',
  speed: ''
}

export const JogsPage = () => {
  const jogs = useSelector(state => state.jogs)
  const [form, setForm] = useState({
    visible: false,
    type: 'add',
    data: initialJogData
  })

  const showEditForm = (data) => setForm({ visible: true, type: 'edit', data })
  const showAddForm = () => setForm({ visible: true, type: 'add', data: initialJogData })

  return (
    <div className="jogs-page">
      {jogs.length
        ? jogs.map(jog => <JogCard
          key={jog.id}
          time={jog.time}
          date={jog.date}
          distance={jog.distance}
          speed={jog.speed}
          open={() => showEditForm(jog)}
        />)
        : <div className="empty-content m-center">
            <div className="empty-content-body">
              <img className="sad-icon" src={sadSmile} />
              <p>Nothing is there</p>
            </div>
            <Button click={showAddForm} color="baby-purple" text="Create your jog first" />
          </div>
      }
      {jogs.length ? <img className="jogs-btn" src={addBtn} onClick={() => setForm(showAddForm)} /> : ''}
      {form?.visible && <Form form={form} setForm={setForm} />}
    </div>
  )
}