import './Button.css'

const Button = ({
  value = 'Click me',
  action = () => {},
  bgColor = '#007bff',
  txtColor = '#fff',
  fs = '16px',
  w = 'auto',
  h = 'auto',
  p = '10px 20px',
  br = '5px',
  border,
  className = ''
}) => {
  return (
    <button
      className={`custom-button ${className}`}
      style={{
        backgroundColor: bgColor,
        color: txtColor,
        width: w,
        height: h,
        padding: p,
        borderRadius: br,
        fontSize: fs,
        border: border
      }}
      onClick={action}
      aria-label={value}
    >
      {value}
    </button>
  )
}

export default Button
