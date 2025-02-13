import './Button.css'

const Button = ({
  value = 'Click me',
  action = () => {},
  bgColor = '#007bff',
  txtColor = '#fff',
  w = 'auto',
  h = 'auto',
  p = '10px 20px',
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
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px'
      }}
      onClick={action}
      aria-label={value}
    >
      {value}
    </button>
  )
}

export default Button
