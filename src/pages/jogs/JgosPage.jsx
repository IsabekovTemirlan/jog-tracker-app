import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { JogCard, Button, Form } from '../../components'
import addBtn from '../../assets/icons/add.svg'
import sadSmile from '../../assets/icons/sad.svg'
import { initialJogData } from '../../config'
import './style.css'

export const JogsPage = () => {
  const { allJogs, filteredJogs, filterBarVisible } = useSelector(state => state.jogs)
  const [form, setForm] = useState({})

  const showEditForm = (data) => setForm({ visible: true, type: 'edit', data })
  const showAddForm = () => setForm({ visible: true, type: 'add', data: initialJogData })

  const renderNotConten = (withBtn = false) => (
    <div className="empty-content m-center page-enter">
      <div className="empty-content-body">
        <img className="sad-icon" src={sadSmile} />
        <p>Nothing is there</p>
      </div>
      {withBtn && <Button click={showAddForm} color="baby-purple" text="Create your jog first" />}
    </div>
  )

  const renderJogs = () => {
    if (filterBarVisible && filteredJogs) {
      if (!filteredJogs.length) return renderNotConten()
      else return filteredJogs.map(jog => <JogCard
        key={jog.id} time={jog.time} date={jog.date}
        distance={jog.distance} speed={jog.speed} open={() => showEditForm(jog)}
      />)
    }
    else {
      if (!allJogs.length) return renderNotConten(true)
      else return allJogs.map(jog => <JogCard
        key={jog.id} time={jog.time} date={jog.date}
        distance={jog.distance} speed={jog.speed} open={() => showEditForm(jog)}
      />)
    }
  }

  return (
    <div className="jogs-page">
      {renderJogs()}
      {allJogs.length ? <img className="jogs-btn" src={addBtn} onClick={() => setForm(showAddForm)} /> : ''}
      {form?.visible ? <Form form={form} setForm={setForm} /> : ''}
    </div>
  )
}