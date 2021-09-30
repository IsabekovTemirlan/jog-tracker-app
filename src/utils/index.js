export const calcSpeed = (distance, time) => ((+distance / +time) * 60).toFixed(2)

export const validateFields = (obj) => {
  let isValid = true
  Object.values(obj).forEach(val => {
    if (!val) isValid = false
  })
  return isValid
}