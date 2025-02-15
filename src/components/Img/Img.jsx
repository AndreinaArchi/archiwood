import './Img.css'

const Img = ({
  img = '/default.webp',
  w = 'auto',
  h = 'auto',
  ofit = 'cover',
  br = '0%',
  action = () => {}
}) => {
  return (
    <img
      src={img}
      className="img__settings"
      style={{
        width: w,
        height: h,
        objectFit: ofit,
        borderRadius: br
      }}
      onClick={action}
    />
  )
}

export default Img
