import React, { useState } from 'react'
import { useActions } from '../../hooks/useAction'
import './style.css'

export const FilterBar = () => {
  const { filterJogs } = useActions()
  const [filter, setFilter] = useState({ dateFrom: '', dateTo: '' })

  // const onChangeHandler = async (e) => {
  //   const { id, value } = e.target
  //   setFilter({ ...filter, [id]: value })
  //   if (filter.dateFrom && id === 'dateTo') {
  //     filterJogs({...filter, dateTo: value})
  //   }
  // }

  const onChangeHandler = (e) => {
    const { id, value } = e.target
    const newValue = { ...filter, [id]: value }
    filterJogs(newValue)
    setFilter(newValue)
  }

  return (
    <div className="filter-bar page-enter">
      <form className="filter-bar-form f-center">
        <div className="filter-bar-control">
          <label className="filter-bar-label" htmlFor="dateFrom">Date From</label>
          <input className="filter-bar-input" value={filter.dateFrom} onChange={onChangeHandler} type="date" name="dateFrom" id="dateFrom" />
        </div>
        <span className="spacer"></span>
        <div className="filter-bar-control">
          <label className="filter-bar-label" htmlFor="dateTo">Date To</label>
          <input className="filter-bar-input" value={filter.dateTo} onChange={onChangeHandler} type="date" name="dateTo" id="dateTo" />
        </div>
      </form>
    </div>
  )
}
