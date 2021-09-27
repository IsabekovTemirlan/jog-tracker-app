import React from 'react'
import './style.css'

export const FilterBar = () => {
  return (
    <div className="filter-bar">
      <form className="filter-bar-form m-center">
        <label className="filter-bar-label" htmlFor="dateFrom">Date From</label>
        <input className="filter-bar-input" type="date" name="dateFrom" id="dateFrom" />
        <span className="spacer"></span>
        <label className="filter-bar-label" htmlFor="dateTo">Date To</label>
        <input className="filter-bar-input" type="date" name="dateTo" id="dateTo" />
      </form>
    </div>
  )
}
