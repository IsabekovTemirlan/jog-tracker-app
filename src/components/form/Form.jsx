import { Button, Input } from '..'
import closeIcon from '../../assets/icons/cancel.svg'
import './style.css'

export const Form = () => {
  return (
    <form className="add-form f-center">
      <img src={closeIcon} className="form-close" />
      <div className="form-field-wrap">
        <Input id="distance" label="Distance" type="number" value="10" />
        <Input id="time" label="Time" type="number" value="10" />
        <Input id="date" label="Date" type="date" value="" />
        <Button color="white-two" text="Save" />
      </div>
    </form>
  )
}