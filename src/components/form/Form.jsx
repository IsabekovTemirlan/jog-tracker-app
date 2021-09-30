import { Button, Input } from '..'
import closeIcon from '../../assets/icons/cancel.svg'
import { initialJogData } from '../../config'
import { useActions } from '../../hooks/useAction'
import { calcSpeed, validateFields } from '../../utils'
import './style.css'

export const Form = ({ form, setForm }) => {
  const { addJog, updateJog } = useActions()
  const closeHandler = () => {
    setForm({ ...form, visible: false, data: initialJogData })
  }

  const onChangeHandler = (e) => {
    const { id, value } = e.target
    setForm({ ...form, data: { ...form.data, [id]: value } })
  }

  const saveHandler = (e) => {
    e.preventDefault();
    const { distance, time } = form.data;
    const newJog = {
      ...form.data,
      id: new Date().getTime(),
      speed: calcSpeed(distance, time)
    }
    if (validateFields(newJog)) {
      addJog(newJog)
      closeHandler()
    } else confirm('Fill in all the fields')
  }

  const updateHandler = (e) => {
    e.preventDefault()
    if (validateFields(form.data)) {
      const { distance, time } = form.data
      updateJog({
        ...form.data,
        speed: calcSpeed(distance, time)
      })
      closeHandler()
    } else confirm('Fill in all the fields')
  }

  return (
    <div className="add-form-backdrop">
      <form className="add-form f-center">
        <img src={closeIcon} className="form-close" onClick={closeHandler} />
        <div className="form-field-wrap">
          <Input id="distance" label="Distance" type="number" value={form.data.distance || ''} handler={onChangeHandler} />
          <Input id="time" label="Time" type="number" value={form.data.time || ''} handler={onChangeHandler} />
          <Input id="date" label="Date" type="date" value={form.data.date || ''} handler={onChangeHandler} />
          <div className="f-center">
            {form.type === 'add' && <Button click={saveHandler} color="white-two" text="Save" />}
            {form.type === 'edit' && <Button click={updateHandler} color="white-two" text="Update" />}
            <span className="spacer"></span>
            <Button click={closeHandler} color="white-two" text="Cancel" />
          </div>
        </div>
      </form>
    </div>
  )
}