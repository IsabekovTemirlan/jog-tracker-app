import React from 'react'
import './style.css'

export const FilterBar = () => {
  return (
    <div className="filter-bar">
      <form className="filter-bar-form f-center">
        <div className="filter-bar-control">
          <label className="filter-bar-label" htmlFor="dateFrom">Date From</label>
          <input className="filter-bar-input" type="date" name="dateFrom" id="dateFrom" />
        </div>
        <span className="spacer"></span>
        <div className="filter-bar-control">
          <label className="filter-bar-label" htmlFor="dateTo">Date To</label>
          <input className="filter-bar-input" type="date" name="dateTo" id="dateTo" />
        </div>
      </form>
    </div>
  )
}
