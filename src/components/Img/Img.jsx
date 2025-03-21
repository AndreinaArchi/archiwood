import './Img.css'

const Img = ({
  img = '/default.webp',
  w = 'auto',
  h = 'auto',
  ofit = 'cover',
  br = '0%',
  r = 0,
  alt='',
  classname = '',
  action = () => {}
}) => {
  return (
    <img
      src={img}
      className={`${classname !== '' ? classname : 'img__settings'}`}
      style={{
        width: w,
        height: h,
        objectFit: ofit,
        borderRadius: br,
        transform: `rotate(${r}deg)`
      }}
      alt={alt}
      onClick={action}
      loading='lazy'
    />
  )
}

export default Img
