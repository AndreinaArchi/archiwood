import './Products.css'

const Products = ({ children, arrayText }) => {
  return (
    <div className='products__container'>
      <div className='products__content'>
        <div className='products__content-title'>
          <h2>{arrayText.title}</h2>
        </div>
        <div className='products__content-paragraph'>
          <article>
            <p className='line-height'>{arrayText.text_1}</p>
            <p className='line-height'>{arrayText.text_2}</p>
          </article>
        </div>
        <div className='products__content-subtitle'>
          <h3 className='line-height'>{arrayText.subTitle}</h3>
        </div>
      </div>
      <div style={{width:'100%'}}>{children}</div>
    </div>
  )
}

export default Products
