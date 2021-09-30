import './style.css'

export const Input = ({id, label, value, type, handler }) =>
  <div className="form-control">
    <label htmlFor={id}>{label}</label>
    <input value={value} type={type} id={id} onChange={handler} />
  </div>