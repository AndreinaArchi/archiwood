import './Img.css'

const Img = ({
  img = '/default.webp',
  w = 'auto',
  h = 'auto',
  ofit = 'cover',
  br = '0%',
  className = '',
  action = () => {}
}) => {
  return (
    <img
      src={img}
      className={`img__settings ${className}`}
      style={{
        width: w,
        height: h,
        objectFit: ofit,
        borderRadius: br
      }}
      onClick={action}
      loading='lazy'
    />
  )
}

export default Img
