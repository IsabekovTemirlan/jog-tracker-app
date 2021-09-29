import './style.css'

export const Button = ({ text, color, click, width, classes }) =>
  <button
    style={{
      color: `var(--${color})` || '',
      borderColor: `var(--${color})` || '',
      width: width || '100%'
    }}
    onClick={click}
    className={"btn m-center " + classes?.join(' ')}
  >{text}</button>