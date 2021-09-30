export const calcSpeed = (distance, time) => ((+distance / +time) * 60).toFixed(2)

export const validateFields = (obj) => {
  let isValid = true
  Object.values(obj).forEach(val => {
    if (!val) isValid = false
  })
  return isValid
}

export const updateArrayOfObjects = (array, newValue) => {
  return array.map(obj => obj.id === newValue.id ? ({ ...obj, ...newValue }) : obj)
}

export const filterByDateRange = (array, range) => {
  const {dateFrom, dateTo} = range
  const sortedItems = array.filter((item) => {
    const date = new Date(item.date)
    const from = new Date(dateFrom)
    const to = new Date(dateTo)
    return from <= date && to >= date
  })
  return sortedItems || []
}